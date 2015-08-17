"use strict";
use(function() {
    var readJson = null;
    var listArr = [];
    if (this.fieldValue != '') {
        readJson = this.fieldValue;
        var count = 0;
        readJson.forEach(function(entry) {
            var itemJson = JSON.parse(entry);
            listArr[count++] = itemJson;
        });
    } else if (this.fieldName != '') {
        readJson = granite.resource.properties[this.fieldName];
        if (typeof readJson != "undefined" && readJson != null && readJson != "") {
            if (readJson.length > 0) {
                var count = 0;
                readJson.forEach(function(entry) {
                    var itemJson = JSON.parse(entry);
                    listArr[count++] = itemJson;
                });
            } else {
                listArr[0] = JSON.parse(readJson);
            }
        }
    }
    return {
        listJson: listArr
    }
});