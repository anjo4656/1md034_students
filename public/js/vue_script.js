

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
/*
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
*/
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
		burgerSection.checkedBurgers.length != 0){		
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
	}
    }
})


'use strict';
const socket = io();

/* eslint-disable-next-line no-unused-vars */
const vm = new Vue({
  el: '#dots',
  data: {
      orders: {},
      localOrder: {x: 0, y: 0},
      numberOfOrders: 0,
  },
    
  // created: function() {
  //   /* When the page is loaded, get the current orders stored on the server.
  //    * (the server's code is in app.js) */
  //   socket.on('initialize', function(data) {
  //     this.orders = data.orders;
  //   }.bind(this));

  //   /* Whenever an addOrder is emitted by a client (every open map.html is
  //    * a client), the server responds with a currentQueue message (this is
  //    * defined in app.js). The message's data payload is the entire updated
  //    * order object. Here we define what the client should do with it.
  //    * Spoiler: We replace the current local order object with the new one. */
  //   socket.on('currentQueue', function(data) {
  //     this.orders = data.orders;
  //   }.bind(this));
  // },
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
      socket.emit('addOrder', {
        orderId: this.getNext(),
        details: {
          x: this.localOrder.x,
          y: this.localOrder.y,
        },
          orderItems: burgerSection.checkedBurgers,
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

