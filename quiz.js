console.log('JS file Working')
// XML HTTP Request
var carLoad =(function (){
  var carArray;

  return{
    getCars: function (cb) {
      var xhr = new XMLHttpRequest()
      xhr.open('GET', 'inventory.json')
      xhr.addEventListener('load', function () {
        carArray = JSON.parse(xhr.responseText).cars
          cb(carArray)
      })
        xhr.send()
    }
  }
})(carLoad||{})


function populatePage (inventory) {
  // Loop over the inventory and populate the page

  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory();
