//Estabilish connection to database
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'resto'
});

// estabilises connection from sql
connection.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

// calls query
connection.query('SELECT * FROM menu',function(err,rows){
  if(err) throw err;
// Fetch to console
  console.log('Data received from Db:\n');
  console.log(rows);
// Print row to table
  var json = rows;
  for (var i = 0; i < json.length; i++) {
    // Find a <table> element with id="myTable":
    var table = document.getElementById("myTable");
    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow(0);
    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    // Add some text to the new cells:
    cell1.innerHTML = json[i].item_code;
    cell2.innerHTML = json[i].name;
    cell3.innerHTML = json[i].price;
  }
});

// terminates connection
connection.end();
