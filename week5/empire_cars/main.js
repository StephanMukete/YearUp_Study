let Cars = []
fetch('https://raw.githubusercontent.com/mlaw-nycda/empireCommerce/master/cars.json')
  .then(res => res.json())
  .then( car => {
    console.log(car);
    for(property in car){
     if (car[property].model_year > 2005) {
       Cars.push(car[property].model_year)//
        console.log(car[property])
        container = document.getElementById('cars');
        element = document.createElement("div");
        let year = document.createElement('li');
        console.log(Cars[0]);
        year.innerHTML =  (property + " " + car[property].model_year+"  "+ car[property].model + "  " + car[property].color)
        // year.innerHTML =  car[property].color
        element.appendChild(year)
        cars.appendChild(element)
    }
  }

  })
// container = document.getElementById('cars');
// element = document.createElement("div");
// let year = document.createElement('li');
// console.log(Cars[0]);
// year.innerHTML =  Cars[1];
// element.appendChild(year)
// cars.appendChild(element)
