// from data.js
var tableData = data;

// Get Reference to Table Body
var tbody = d3.select("tbody");

// Display Entire Dataset as Default

tableData.forEach((report) => {
    console.log(report);
    var row = tbody.append('tr');

    Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

// Select Submit Button in HTML File
var clickHandler = d3.select("#filter-btn");

//Click Event
clickHandler.on("click", function() {

//Remove Existing Table
d3.select("tbody").html("");

//Prevent Page from Refreshing
d3.event.preventDefault();

// Get Value Property of Input Elements and Set Text to Lowercase
var dateTime = d3.select("#datetime").property("value");

var selectedCountry = d3.select("#country").property("value").toLowerCase();

var selectedState = d3.select("#state").property("value").toLowerCase();

var selectedCity = d3.select("#city").property("value").toLowerCase();

var selectedShape = d3.select("#shape").property("value").toLowerCase();

// Initialize tableData as filteredData
filteredData = tableData;

if (dateTime) {
    filteredData = filteredData.filter(record => record.datetime === dateTime);
}
if (selectedCountry) {
    filteredData = filteredData.filter(record => record.country === selectedCountry);
}
if (selectedState) {
    filteredData = filteredData.filter(record => record.state === selectedState);
}
if (selectedCity) {
    filteredData = filteredData.filter(record => record.city === selectedCity);
}
if (selectedShape) {
    filteredData = filteredData.filter(record => record.shape === selectedShape);
}

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