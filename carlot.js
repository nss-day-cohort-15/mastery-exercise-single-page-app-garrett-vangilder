// IIFE ONE

var CarLot = (function () {
  var inventory = [];

  return {
    getInventory: function () {
      return inventory;
    },
    loadInventory: function (cb) {
      console.log('works')
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.open('GET', 'inventory.json')
      inventoryLoader.addEventListener('load', function (){
        inventory = JSON.parse(inventoryLoader.responseText).cars
        console.log("inventory",inventory)
        cb(inventory)
      })
      inventoryLoader.send()
    }
  };

})(CarLot || {});


















