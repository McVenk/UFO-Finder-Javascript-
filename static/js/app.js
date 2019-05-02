// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

// // Use d3 to update each cell's text with
// // ufo data values (date, city, state, country,shape, duration, comments)
function filltable(data_table) {
  // clear the tbody of data table for refreshing
  tbody.html("");
  // applying for each function to iterate all row elements of dataset
  data_table.forEach(function(d) {
      var row = tbody.append("tr");
      Object.entries(d).forEach(function([key, value]) {
        
        // Append a cell to the row for each value in the UFO table
        var cell = row.append("td");
        cell.text(value);
    });
 
  });
}



// getting a reference to the button on the page with the id property set to 'filter-btn'
var button = d3.select("#filter-btn");


// define search event function on clicking search button
button.on("click",function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input search element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // filter table data to the datetime input
    var filteredData = tableData.filter(date => date.datetime === inputValue );
    console.log(filteredData);
    
    // call filltable function for filling data from filtered data table
    filltable(filteredData);

  
});

// call filltable function for default dataset
filltable(tableData);