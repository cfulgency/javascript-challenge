// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// Display Dataset as Default

tableData.forEach((report) => {
    console.log(report);
    var row = tbody.append('tr');

    Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

// Select Submit Button
var submit = d3.select("#filter-btn");

//Click Event of Date/Time Filter
submit.on("click", function() {

// Remove Existing Table
d3.select("tbody").html("");

// Prevent Page from Refreshing
d3.event.preventDefault();

// Get Value Property of Input Element
var dateTime = d3.select("#datetime").property("value");
console.log(dateTime);

// Filter Report
var filteredData = tableData.filter(record => record.datetime === dateTime);
console.log(filteredData);

// Display Filtered Dataset
filteredData.forEach((report) => {
    var row = tbody.append('tr');

    Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

});