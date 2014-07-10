var prompt = require('sync-prompt').prompt;

var distance = prompt('Distance (miles)? ');
var price = prompt('Gas Cost per Gallon? ');
var tank = prompt('Size of Tank (gallons)? ');
var mpg = prompt('Rated MPG? ');
var speed = prompt('Trip Speed (mph)? ');
var vehicle = prompt('Vehicle (car/truck)? ');

distance = parseInt(distance);
price = parseFloat(price);
tank = parseInt(tank);
mpg = parseInt(mpg);
speed = parseInt(speed);

if(speed > 55){
  var delta = speed - 55;

  if(vehicle === 'truck'){
    delta *= 3;
  }

  mpg -= delta;

  if(mpg < 10){
    mpg = 10;
  }
}

var gas = distance / mpg;
var cost = gas * price;
var stops = gas / tank;

console.log('To drive ' + distance + ' miles, it will cost you $' + cost.toFixed(2) + ', and you will have to take ' + Math.ceil(stops) + ' stops.');

