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
