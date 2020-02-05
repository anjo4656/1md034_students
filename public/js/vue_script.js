

const burgerSection = new Vue({
  el: '#burgers',
  data: {
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
	selected: 'Credit Card'
    }
})

const genderField = new Vue({
    el: '#gender',
    data: {
	male: "Male",
	female: "Female",
	nonBinary: "Non\-Binary",
	undisclosed: "Undisclosed",
	pick: 'Undisclosed'
    }
})

const order = new Vue({
    el: '#orders',
   
    methods: {
        placeOrder: function() {
            if (nameField.name && emailField.email && streetField.street &&
		houseField.house && paymentField.selected &&
		genderField.pick &&
		burgerSection.checkedBurgers.length != 0){		
		orderPrint.print();
	    }
	    else{
		orderPrint.show = false;
		orderPrint.error = true;
		if (!(nameField.name && emailField.email &&
		      streetField.street && houseField.house &&
		      paymentField.selected && genderField.pick)){
		    orderPrint.formError = true;
		}
		else{
		    orderPrint.formError = false;
		}
		if(burgerSection.checkedBurgers.length == 0)
		{
		    orderPrint.emptyOrder = true;
		}
		else {
		    orderPrint.emptyOrder = false;
		}
	    }
	}
    }
});

const orderPrint = new Vue({
    el: '#orderPrint',
    data: {
	show: false,
	information: null,
	categories: ["Name: ", "Email: ", "Street: ", "House: ",
		     "Payment Method: ", "Gender: "],
	ordered: null,
	error: false,
	formError: false,
	emptyOrder: false,
    },
    methods: {
	print: function() {
	    this.information = [nameField.name, emailField.email,
				streetField.street, houseField.house,
				paymentField.selected, genderField.pick];
	    this.show = true;
	    this.ordered = burgerSection.checkedBurgers;
	    this.error = false;
	    this.formError = false;
	    this.emptyOrder = false;
	}
    }
})
