

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
            if (nameField.name && emailField.email && /*streetField.street &&
		houseField.house && */paymentField.selected &&
		genderField.pick &&
		burgerSection.checkedBurgers.length != 0 &&
		(vm.localOrder.x != 0 || vm.localOrder.y != 0)){		
		orderPrint.print();
		vm.addOrder();
	    }
	    else{
		orderPrint.show = false;
		orderPrint.error = true;
		if (!(nameField.name && emailField.email &&
		      /*streetField.street && houseField.house &&*/
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
		if(vm.localOrder.x == 0 && vm.localOrder.y == 0)
		{
		    orderPrint.noLocation = true;
		}
		else {
		    orderPrint.noLocation = false;
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
	/*categories: ["Name: ", "Email: ", "Street: ", "House: ",*/
	categories: ["Name: ", "Email: ",
		     "Payment Method: ", "Gender: "],
	ordered: null,
	error: false,
	formError: false,
	emptyOrder: false,
	noLocation: false,
    },
    methods: {
	print: function() {
	    this.information = [nameField.name, emailField.email,
				/*streetField.street, houseField.house,*/
				paymentField.selected, genderField.pick];
	    this.show = true;
	    this.ordered = burgerSection.checkedBurgers;
	    this.error = false;
	    this.formError = false;
	    this.emptyOrder = false;
	    this.noLocation = false;
	}
    }
})


'use strict';
const socket = io();

const vm = new Vue({
  el: '#dots',
  data: {
      orders: {},
      localOrder: {x: 0, y: 0},
      numberOfOrders: 0,
      customerInfo: {name: "",
		     email: "",
		     payment: "",
		     gender: ""},
  },
    
  methods: {
    getNext: function() {
      /* This function returns the next available key (order number) in
       * the orders object, it works under the assumptions that all keys
       * are integers. */
      /*let lastOrder = Object.keys(this.orders).reduce(function(last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;*/
	this.numberOfOrders += 1;
	return this.numberOfOrders;
    },
    addOrder: function() {
      /* When you click in the map, a click event object is sent as parameter
       * to the function designated in v-on:click (i.e. this one).
       * The click event object contains among other things different
       * coordinates that we need when calculating where in the map the click
       * actually happened. */
      /*let offset = {
        x: event.currentTarget.getBoundingClientRect().left,
        y: event.currentTarget.getBoundingClientRect().top,
	};*/

	this.customerInfo.name = nameField.name;
	this.customerInfo.email = emailField.email;
	this.customerInfo.payment = paymentField.selected;
	this.customerInfo.gender = genderField.pick;

      socket.emit('addOrder', {
        orderId: this.getNext(),
        details: {
          x: this.localOrder.x,
          y: this.localOrder.y,
        },
          orderItems: burgerSection.checkedBurgers,
	  customerInfo: this.customerInfo, 
      });
    },
      displayOrder: function(event) {
	  /* When you click in the map, a click event object is sent as parameter
	   * to the function designated in v-on:click (i.e. this one).
	   * The click event object contains among other things different
	   * coordinates that we need when calculating where in the map the click
	   * actually happened. */
	  let offset = {
              x: event.currentTarget.getBoundingClientRect().left,
              y: event.currentTarget.getBoundingClientRect().top,
	  };
	  this.localOrder.x = event.clientX - 10 - offset.x;
	  this.localOrder.y = event.clientY - 10 - offset.y;
	  /*
	  socket.emit('displayOrder', {
              orderId: this.getNext(),
              details: {
		  x: event.clientX - 10 - offset.x,
		  y: event.clientY - 10 - offset.y,
              },
              orderItems: ['Beans', 'Curry'],
	  });*/
      },

  },
});

