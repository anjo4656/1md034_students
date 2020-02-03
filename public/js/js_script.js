
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

console.log(fireBurger.getName());
console.log(fireBurger.getKcal());

const vm = new Vue({
    //Here comes the optional elements of the Vue object
})
