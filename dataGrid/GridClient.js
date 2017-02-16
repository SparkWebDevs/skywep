define(["require", "exports", './GridController', './SampleData', './CurrencyManager'], function (require, exports, __gc, __data, __cm) {
    // -------------------------------------------------------------------------------------
    // BlueSky Grid - TESTPAGE - full experimental grid
    // -------------------------------------------------------------------------------------
    var GridClient = (function () {
        function GridClient() {
            this._$comment = undefined;
        }
        GridClient.prototype.prepare = function () {
            // one-off, define some currencies for the CurrencyManager so it can return symbols for the grid
            __cm.setCurrencyInfo(new __cm.CurrencyInfo("GBP", "British Pound", "£", "GBP", ""));
            __cm.setCurrencyInfo(new __cm.CurrencyInfo("USD", "US Dollar", "$", "USD", ""));
            __cm.setCurrencyInfo(new __cm.CurrencyInfo("EUR", "Euro", "€", "EUR", ""));
            // define the column definitions for the grid
            this._coldefs = [];
            this._coldefs.push(new __gc.ColDefinition("requestId", "Request #", 100, "", "", "", "asc"));
            this._coldefs.push(new __gc.ColDefinition("originator", "Originator", 150, "", "", "", ""));
            this._coldefs.push(new __gc.ColDefinition("product", "Product", 150, "", "", "", ""));
            this._coldefs.push(new __gc.ColDefinition("submitedDate", "Submited", 100, "date", "", "left", ""));
            this._coldefs.push(new __gc.ColDefinition("status", "Status", 150, "", "", "", ""));
            this._coldefs.push(new __gc.ColDefinition("customer", "Customer", 100, "", "", "", ""));
            this._coldefs.push(new __gc.ColDefinition("buildDate", "1stBuild", 100, "date", "", "left", ""));
            this._coldefs.push(new __gc.ColDefinition("type", "Type", 150, "", "", "", ""));
        };
        // this call creates the grid and places it within the given DOM element
        GridClient.prototype.createGrid = function ($grid, $comment) {
            var self = this; // 
            // hand over the comment dom element (so we can write out comments);
            this._$comment = $comment;
            // create a grid light controller
            this._gc = new __gc.GridController();
            this._gc.createGrid($grid);
            // supply a callback to be informed when the user selects a row
            this._gc.cbSelectedDataItem = function (dataItem) {
                $comment.text("Row selected - single click - code: " + dataItem.code);
            };
            // supply a callback to be informed when the user double clicks a row
            this._gc.cbSelectedDataItemDblClick = function (dataItem) {
                $comment.text("Row selected - double click - code: " + dataItem.code);
            };
            this._gc.cbStyling = function (coldef, item) {
                // define a new CellStyleProperties object we will return
                var styleProp = new __gc.CellStyleProperies();
                 //now check which column is being checked and set any style properties appropriately 

                return styleProp;
            };
        };
        // (re)populate the data of the test grid
        GridClient.prototype.populateData = function (rowcount) {
            var self = this;
            // if no count was given the assign 500 rows
            if (!rowcount)
                rowcount = 500;
            // create some sample data
            var data = __data.generateSampleData(rowcount);
            // simply pass on the data (and their definitions) to the grid light 
            this._gc.setData(data, this._coldefs).done(function () {
                self._$comment.text("Grid loaded with " + rowcount + " rows."); // let user know
            });
        };
        return GridClient;
    })();
    exports.GridClient = GridClient;
});
