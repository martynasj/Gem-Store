var app = angular.module('store', []);

app.controller('StoreController', function() {
  this.products = gems;
  this.clients = ['Martynas', 'Domas'];
  this.price = 12;
  this.name = 'Belekas';
  this.friends = ['Martis', 'Domis', 'Linis'];
});

var gems = [
  {
    name: "Docedahadron",
    price: 11.99,
    description: "Very rare gem",
    canPurchase: true,
    soldOut: false
  },

  {
    name: "Topaz",
    price: 5.99,
    description: "Very rare gem",
    canPurchase: true,
    soldOut: false
  },
  {
    name: "Ruby",
    price: 129.00,
    description: "Red color rare gem",
    canPurchase: true,
    soldOut: false
  },
  {
    name: "Topaz",
    price: 5.99,
    description: "Very rare gem",
    canPurchase: true,
    soldOut: false
  },
  {
    name: "Ruby",
    price: 129.00,
    description: "Red color rare gem",
    canPurchase: true,
    soldOut: false
  }
];
