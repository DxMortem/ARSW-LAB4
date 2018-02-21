var order1 = {
	"table_id": 2,
	"products": [{
      "product":"PIZZA",
      "quantity":3,
      "price":"$10000"
    },
		{
			"product": "HOTDOG",
			"quantity": 1,
			"price": "$3000"
		},
    {
			"product": "COKE",
			"quantity": 4,
			"price": "$1300"
		}
	]
};
function addNewOrder() {
	
	var tope = new Array();
	tope.push("Product");
	tope.push("Quantity");
	tope.push("Price");
 
    var table = document.createElement("TABLE");
    table.border = "1";
 
    var columnCount = 3;
 
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = tope[i];
        row.appendChild(headerCell);
    }
 
    for (var i = 0; i < order1.products.length; i++) {
        row = table.insertRow(-1);
        var cell = row.insertCell(-1);
        cell.innerHTML = order1.products[i].product;
		var cell = row.insertCell(-1);
        cell.innerHTML = order1.products[i].quantity;
		var cell = row.insertCell(-1);
        cell.innerHTML = order1.products[i].price;
        }
 
    var dvTable = document.getElementById("dvTable");
    dvTable.innerHTML = "";
    dvTable.appendChild(table);
}