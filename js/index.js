window.onload = function() {

    var items = [{
        "name": "Lusicious Jello Mix",
        "description": ["Very Elegant", "Trending item", "Come in Purple"],
        "price": 80.65
    }, {
        "name": "Tarnished Standing Desk",
        "description": ["Modular", "Works for both Tall and Loud People", "Smells like Productivity"],
        "price": 1654.99
    }, {
        "name": "Hand-made Hand Grenades",
        "description": ["Such gift!", "Much boom!", "Very safe for kids"],
        "price": 10.44
    }, {
        "name": "Pan-fried Cookie Dough",
        "description": ["Chocolate", "Family-size", "Hot Mess"],
        "price": 16.99
    }, {
        "name": "Fancy Dress Hanger",
        "description": ["Keep organized", "On Sale"],
        "price": 67.32
    }, {
        "name": "Snarky Britsh Mustache 3-Pack",
        "description": ["Sharing is caring!", "Hugs not drugs", "As seen on 'So You Think You Can Dance - Nigeria!'"],
        "price": 1.99
    }, ];


    var containerElement = document.getElementById('container');

    for (var i = 0; i < items.length; i++) {
    	var divRow = document.createElement('div');
	containerElement.appendChild(divRow);

	var nameDiv = document.createElement('div');
	nameDiv.className = 'name';
	nameDiv.innerHTML = items[i].name;
    containerElement.appendChild(nameDiv);

    var descriptionDiv = document.createElement('div');
	descriptionDiv.className = 'description';
	descriptionDiv.innerHTML = items[i].description;
    containerElement.appendChild(descriptionDiv);

	var priceDiv = document.createElement('div');
	priceDiv.className = 'price';
	priceDiv.innerHTML = '$' + items[i].price;
    containerElement.appendChild(priceDiv);


/*
    var item1Div = document.createElement('div');
    item1Div.className = 'item1';
    item1Div.innerHTML = items[0];
    containerElement.appendChild(item1Div);*/
    



        /*console.log(shoppingItems[i].name);
        console.log(shoppingItems[i].description);
        console.log(shoppingItems[i].price);*/


        /*var shoppingItemName = shoppingItems[i].name;
        var shoppingItemDescription = shoppingItems[i].description;
        var shoppingItemsPrice = shoppingItems[i].price;
    
console.log(shoppingItemsName);
console.log(shoppingItemDescription);
console.log(shoppingItemsPrice);*/
}


};

