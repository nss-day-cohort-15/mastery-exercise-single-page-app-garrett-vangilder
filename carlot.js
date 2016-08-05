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
        if (carCards.classList.contains('selected')){
      console.log('selected')
      document.querySelector('.selected').style.background='none';
      var input = document.querySelector('#input');
      console.log(input);
      input.value = "";
      carCards.classList.remove('selected');
    } else {
      carCards.classList.add('selected')
      carHandler(e);
    }
      });
    });
    document.querySelector("#input").addEventListener("input",addInventory.carOverride);

    function carHandler(e){
      console.log('carHandler is go')
      document.querySelector('.selected').style.background='tomato',border = '10px red solid';
      addInventory.carOverride()

      function setFocusToTextBox(){
      document.getElementById("input").focus();
      }
    }
  }
  return addInventory
})(CarLot || {});
















