echo "Remember to run npx cap update if you installed any new native plugins"

rm -rf capacitorDir
mkdir capacitorDir
# node copyHtmlCapacitor.js
# cp -r resources capacitorDir/resources
# cp -r packages capacitorDir/packages

cp index.html capacitorDir/index.html #Irrelevant

npx cap copy
npx cap open ios #Open in XCode
