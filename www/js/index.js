document.addEventListener('deviceready', function(){
  window.resolveLocalFileSystemURL(cordova.file.externalRootDirectory, function (rootDirEntry) {
        rootDirEntry.getDirectory('/Download/', { create: true }, function (dirEntry) {
            var isAppend = true;
            dirEntry.getFile('test.txt', { create: true }, function (fileEntry) {
                writeFile(fileEntry, "Content!", isAppend);
                // Success
            });
        });
    });


});


function writeFile(fileEntry, dataObj, isAppend) {
    // Create a FileWriter object for our FileEntry (log.txt).
    fileEntry.createWriter(function (fileWriter) {

        fileWriter.onwriteend = function() {
            console.log("Successful file read...");
        };

        fileWriter.onerror = function (e) {
            console.log("Failed file read: " + e.toString());
        };

        // If we are appending data to file, go to the end of the file.
        if (isAppend) {
            try {
                fileWriter.seek(fileWriter.length);
            }
            catch (e) {
                console.log("file doesn't exist!");
            }
        }
        fileWriter.write(dataObj);
    });
}


var error = function(){
  console.log('error');
}
