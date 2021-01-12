class DataSource {
	constructor({
		batchSize = 1, //Max gauges per request.
		concurrency = 1, //Max outstanding requests.
		batchCallback = function() {}, //Called with every batch that comes in successfully
		retries = 5, //Number of attempt to make to load each batch.
		retryDelay = 2000, //Delay between retries in milliseconds.
		timeout = 36000 //Timeout in milliseconds.
	}) {

		let gaugeIDCache = []
		let requestCache = []

		this.add = function(newGaugeIDs) {
			if (!(newGaugeIDs instanceof Array)) {newGaugeIDs = [newGaugeIDs]} //Allow passing a single gaugeID.
			gaugeIDCache = gaugeIDCache.concat(newGaugeIDs)
			this.flush(true) //Only flush full blocks.
		}

		//Place gauges in gaugeIDCache into batches. Resolve when all existing calls finish.
		this.flush = function(onlyFull = false) {
			let offset = 0
			let slice = []

			while (offset < gaugeIDCache.length) {
				slice = gaugeIDCache.slice(offset, offset+batchSize)
				if (onlyFull && slice.length !== batchSize) {
					break;
				}

				//Process slice.
				requestCache.push(this.processBatch(slice, batchCallback))

				slice = []
				offset += batchSize
			}

			gaugeIDCache = slice
			return Promise.allSettled(requestCache)
		}


		let outstanding = 0;
		let queue = []

		this.processBatch = async function(batch, callback) {
			if (outstanding >= concurrency) {
				//We need to wait.
				await new Promise((resolve, reject) => {
					queue.push(resolve)
				})
			}
			concurrency++

			let result;
			for (let i=0;i<retries;i++) {
				try {
					result = await new Promise((resolve, reject) => {
						this._processBatch(batch).then(resolve, reject)
						setTimeout(function() {
							reject("Timeout Exceeded")
						}, timeout)
					})
					break;
				}
				catch (e) {
					//We are going to suppress logging somewhat, as errors (timeout, connection reset) are very common on the Canadian gauges,
					//however it usually works just fine on retry.

					if (i + 1 === retries) {
						console.error("Error on the following batch: ")
						console.error(batch)
						console.trace(e)
						console.error("Loading Failed. Already tried" + retries + "times. ")
					}
					else {
						await new Promise((resolve, reject) => {
							setTimeout(resolve, retryDelay*(i+1))
						})
					}
				}
			}
			concurrency--
			if (queue.length > 0) {
				queue.pop()()
			}

			if (batch.some((gaugeID) => {
				return result?.[gaugeID]
			})) {
				//This must be an object of gauges, as at least one gaugeID existed in the object.
				for (let gaugeID in result) {
					try {
						callback(result[gaugeID], this.prefix + gaugeID)
					}
					catch (e) {console.error(e)}
				}
			}
			else if (result) {
				//Assume this is an individual gauge.
				callback(result, this.prefix + batch[0])
			}
		}
	}

	removePrefix(code) {
		if (code.startsWith(this.prefix)) {
			return code.slice(this.prefix.length)
		}
	}

	getValidCode(code) {return this.removePrefix(code)}
}

module.exports = DataSource
