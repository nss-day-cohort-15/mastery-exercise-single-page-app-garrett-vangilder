var CarLot = (function(addInventory){
      var input = document.querySelector('#input');
  addInventory.activateEvents = function(){
    console.log('activateEvents works')
    var carCard = document.querySelectorAll('.carCard');



    carCard.forEach(someFunction);


    function someFunction(carCards) {
      //For when something is clicked and its already chosen
      carCards.addEventListener('click', (e)=>{

        input.value = "";
        previousBorderColor = e.currentTarget.style.borderColor
        previousThing = e.currentTarget;
        console.log(">>>>>?>>>>",previousBorderColor)
        console.log(">>>>>?>>>>",previousThing)
        if (carCards.classList.contains('selected')){
          console.log('if runs')
          carCards.classList.remove('selected');
          carCards.style.background='white'
          previousThing.style.borderWidth = '5px';

        }  else  {
          console.log('else runs')
          carCard.forEach((carCards)=> {
          carCards.classList.remove('selected');
          carCards.style.background='white'
          carCards.style.borderWidth = '5px';
          })
          carCards.classList.toggle('selected')
          carHandler(e);
        }

      });


    }

    document.querySelector("#input").addEventListener("input",addInventory.carOverride);

    function carHandler(target, tomato){
      console.log('carHandler is go')
      addInventory.carOverride()
      setLargeBorder(target, previousBorderColor)
      setBackground(target,previousBorderColor)
      function setFocusToTextBox(){
      input.focus();
      }

      function setLargeBorder() {
        console.log('set border working')
        document.querySelector('.selected').style.borderWidth ='30px';
      }
      function setBackground() {
      document.querySelector('.selected').style.background='tomato'

      }
    }
  }
  return addInventory
})(CarLot || {});
