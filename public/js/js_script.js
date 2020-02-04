function menuItem(picture, name, kcal, gluten, lactose) {
    this.picture = picture;
    this.name = name;
    this.kcal = kcal;
    this.gluten = gluten;
    this.lactose = lactose;
    this.stringPath = picture.toString();

    this.getName = function() {
	return this.name;
    };
    this.getKcal = function() {
	return this.kcal;
    };
}

let fireBurger = new menuItem("img/fire_burger.jpg", "The Fire Burger", kcal=750, gluten=true, lactose=true);

let turkeyBurger = new menuItem("img/fried_turkey_burger.jpg", "Fried Turkey Burger", kcal=600, gluten=true, lactose=false);

let doubleCheese = new menuItem("img/double_w_cheese.jpg", "Double w/ Cheese", kcal=1800, gluten=true, lactose=true);

let longBurger = new menuItem("img/long_burger.jpg", "Long Burger", kcal=850, gluten=true, lactose=false);

let tower = new menuItem("img/the_tower.jpg", "The Tower", kcal=2000, gluten=true, lactose=true);

var burgers = [fireBurger, turkeyBurger, doubleCheese, tower, longBurger];

/*
var element = document.getElementById("burgers");



var column = 1;
var row = 1;

for (var burger of burgers) {
    let burgerPara = document.createElement("div");
    let burgerNode = document.createTextNode(burger.name);
    burgerPara.appendChild(burgerNode);
    element.appendChild(burgerPara);
	
    let burgerImg = document.createElement("img");
    burgerImg.src = burger.picture;
    burgerImg.height=150;
    burgerPara.appendChild(burgerImg);
    
    let burgerInfo = document.createElement("ul");
    burgerPara.appendChild(burgerInfo);

    let kcalNode = document.createElement("li");
    let kcalText = document.createTextNode(burger.kcal + " kcal");
    kcalNode.appendChild(kcalText);
    burgerInfo.appendChild(kcalNode);
    
    if (burger.gluten)
    {
	let glutenNode = document.createElement("li");
	let glutenText = document.createTextNode("Contains Gluten");
	glutenNode.appendChild(glutenText);
	burgerInfo.appendChild(glutenNode);
    }
    
    if (burger.lactose)
    {
	let lactoseNode = document.createElement("li");
	let lactoseText = document.createTextNode("Contains Lactose");
	lactoseNode.appendChild(lactoseText);
	burgerInfo.appendChild(lactoseNode);
    }
    
}
*/


/*
var burgerHeader = document.createElement("h1");
var burgerHeaderText = document.createTextNode("Choose a burger");
burgerHeader.appendChild(burgerHeaderText);

var fireBurgerPara = document.createElement("p");
var fireBurgerNode = document.createTextNode(fireBurger.getName());
fireBurgerPara.appendChild(fireBurgerNode);

var turkeyBurgerPara = document.createElement("p");
var turkeyBurgerNode = document.createTextNode(turkeyBurger.getName());
turkeyBurgerPara.appendChild(turkeyBurgerNode);

var doubleCheesePara = document.createElement("p");
var doubleCheeseNode = document.createTextNode(doubleCheese.getName());
doubleCheesePara.appendChild(doubleCheeseNode);

var towerPara = document.createElement("p");
var towerNode = document.createTextNode(tower.getName());
towerPara.appendChild(towerNode);

var longBurgerPara = document.createElement("p");
var longBurgerNode = document.createTextNode(longBurger.getName());
longBurgerPara.appendChild(longBurgerNode);

var element = document.getElementById("div1");
element.appendChild(burgerHeader);
element.appendChild(fireBurgerPara);
element.appendChild(turkeyBurgerPara);
element.appendChild(doubleCheesePara);
element.appendChild(towerPara);
element.appendChild(longBurgerPara);
*/
/*
const vm = new Vue({
    //Here comes the optional elements of the Vue object
})
*/
