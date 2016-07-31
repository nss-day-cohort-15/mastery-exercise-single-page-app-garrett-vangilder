

//Loop over the inventory and populate the page
var CarLot = (function(addInventory){
var cars = []
var placeToSendCars = document.querySelector('#placeForCars');
CarLot.loadInventory(setArray)

  function setArray() {
    cars = CarLot.getInventory()
    addInventory.populatePage(cars)
    console.log(cars);
  }


  addInventory.populatePage = function (cars) {
  console.log('addInventory is starting')
      console.log(cars)
      cars.forEach(function(cars,index){
        console.log('does this work');
        placeToSendCars.innerHTML +=
        `<div class=carCard id="car-${index}">
          <span class="cardContent"> <strong>${cars.make}:</strong>
          Make: ${cars.make}
          Year: ${cars.year}
          Price: ${cars.price}
          Color: ${cars.color}
          Description:${cars.description}
          </span>
          </div>`

      })
      };
      return addInventory;
    }
    )(CarLot||{});

//   // Now that the DOM is loaded, establish all the event listeners needed
//   CarLot.activateEvents();
// }

// // Load the inventory and send a callback function to be
// // invoked after the process is complete
// CarLot.loadInventory();





















