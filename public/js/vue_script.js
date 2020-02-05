

const burgerSection = new Vue({
  el: '#burgers',
  data: {
      /*burgers: [fireBurger, turkeyBurger, doubleCheese, tower, longBurger],*/
      burgers: food,
      checkedBurgers: [],
  },
});

const nameField = new Vue({
    el: '#fullName',
    data: {
	name: ''
    }
})

const streetField = new Vue({
    el: '#street',
    data: {
	street: ''
    }
})

const houseField = new Vue ({
    el: '#house',
    data:{
	house: ''
    }
})

const emailField = new Vue({
    el: '#email',
    data: {
	email: ''
    }
})

const paymentField = new Vue({
    el: '#payment',
    data: {
	selected: ''
    }
})

const genderField = new Vue({
    el: '#gender',
    data: {
	male: "male",
	female: "female",
	nonBinary: "nonBinary",
	undisclosed: "undisclosed",
	pick: ''
    }
})

const order = new Vue({
    el: '#orders',
   
    methods: {
        placeOrder: function() {           
	    /*console.log([nameField.name, emailField.email, streetField.street, houseField.house, paymentField.selected, genderField.pick]);*/
	    orderPrint.print();
        }
    }
});

const orderPrint = new Vue({
    el: '#orderPrint',
    data: {
	show: false,
	information: null,
	categories: ["Name: ", "Email: ", "Street: ", "House: ", "Payment Method: ", "Gender: "],
	ordered: null
    },
    methods: {
	print: function() {
	    this.information = [nameField.name, emailField.email, streetField.street, houseField.house, paymentField.selected, genderField.pick];
	    this.show = true;
	    this.ordered = burgerSection.checkedBurgers;
	}
    }
})
