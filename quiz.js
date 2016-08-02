

//Loop over the inventory and populate the page
var CarLot = (function(addInventory){
var cars = []
var placeToSendCars = document.querySelector('#placeForCars');

  function setArray() {
    cars = CarLot.getInventory()
    addInventory.populatePage(cars)
    console.log(cars);
  }


  addInventory.populatePage = function (cars) {
  console.log('addInventory is starting')
      console.log(cars)
      cars.forEach(function(cars,index){
        placeToSendCars.innerHTML +=
        `<div class="carCard col-sm-3" style="border: ${cars.color} solid 5px " id="car-${index}">
          <h2><span class="cardContent"> <strong>${cars.model}</strong></h2>
          <h3>Make: ${cars.make}</h3>
          <h3>Year: ${cars.year}</h3>
          <h4>Price: ${cars.price}</h4>
          <h4>Color: ${cars.color}</h4>
          <h5>Description:${cars.description}</h5>
          </span>
          </div>`

      })
      };
      setArray();
    CarLot.loadInventory(setArray)
      return addInventory;
    }
    )(CarLot||{});



var CarLot = (function(carlot){
  console.log('does this work');
  carlot.activateEvents = function () {
    document.addEventListner("click", handler);
    var input =document.querySelector("#input")
    input.addEventListner('input', CarLot.carRewrite);

    function handler(e){
      var selectColor = document.getElementById('colorSelect').value
      CarLot.carSelector(e,selectColor)
    }

    carlot.carRewrite = function() {
      var selectedCar = document.querySelector('.selected')
      selectedCar.children[4].textContent = document.querySelector('#input').value;
    }
  }
  return carlot
})(CarLot|| {})



// addEventListner();
//   // Now that the DOM is loaded, establish all the event listeners needed
// CarLot.activateEvents() {

// };


 // }

// // Load the inventory and send a callback function to be
// // invoked after the process is complete
// CarLot.loadInventory();





















