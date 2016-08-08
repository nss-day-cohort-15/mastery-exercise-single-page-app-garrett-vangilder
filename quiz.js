

//Loop over the inventory and populate the page
var CarLot = (function(addInventory){
var cars = []
var placeToSendCars = document.querySelector('#placeForCars');

  setArray = function () {
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
          <h5 class="textContent">Description:${cars.description}</h5>
          </span>
          </div>`

      })
    addInventory.activateEvents();
      };
      setArray();
    CarLot.loadInventory(setArray)



addInventory.carOverride = function() {
  console.log('carOverride is go')
  var carDescription = document.querySelector('.selected .textContent');
  document.querySelector('#input').focus();
  var newText = document.querySelector('#input').value;
  console.log(newText);
  carDescription.innerHTML = newText;
  console.log(carDescription);

}



      return addInventory;
    })(CarLot||{});







