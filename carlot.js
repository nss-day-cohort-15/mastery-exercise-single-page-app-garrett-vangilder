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

})();

var CarLot = (function(addInventory){
  addInventory.activateEvents = function(){
    console.log('activateEvents works')
    var carCard = document.querySelectorAll('.carCard');
    carCard.forEach((carCards)=>{
      carCards.addEventListener('click', (e)=>{
      carCards.classList.toggle('selected');

      addInventory.carSelector();
      carHandler();

      });
    });
    document.querySelector("#input").addEventListener("input",addInventory.carOverride);
    function carHandler(e){
      console.log('carHandler is go')
      CarLot.carSelector()
      document.querySelector('.selected').style.border='solid 2px red';
      addInventory.carOverride()
      console.log(carCard.classList);
    }
  }
  return addInventory
})(CarLot || {});
















