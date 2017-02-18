define(["require", "exports"], function (require, exports) {
    // Generated a bunch of sample data that can be used agains the ColDefinitions 
    function generateSampleData(numberOfRows) {
        // define the return data
        var data = [];
        for (var i = 0; i < numberOfRows; i++) {
            var row = {};
            row["requestId"] =  i;
            row["packageSize"] =  "1.0X4.0X0.9";
            row["originator"] =  "Javier";
            row["product"] =  "Skyeng";
            row["submitedDate"] =  randomDate(new Date(2000, 1, 1), new Date());
            row["status"] =  "Good";
            row["customer"] =  "Sparktechs";
            row["buildDate"] =  randomDate(new Date(2000, 1, 1), new Date());
            row["type"] =  "New";
            data.push(row);
        }
        return data;
    }
    exports.generateSampleData = generateSampleData;
    function randomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }
    function getRndNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
});
