// Write your solution in this file!

const driver = {};

function updateDriverWithKeyAndValue(object, key, value) {
  return Object.assign ({}, driver, newDriver); 
}

const newDriver = {
  name: 'Sam',
  address: '11 Broadway'};
  
function destructivelyUpdateDriverWithKeyAndValue (driver,address,value) {
 
 driver.name = 'Sam',
 driver.address = '12 Broadway';
       
 return driver; 
}

function deleteFromDriverByKey(object, name){
  var newdriver = Object.assign ({}, object);
  delete newdriver.name;
  return newdriver;
}

function destructivelyDeleteFromDriverByKey(driver, name){
  delete driver.name;
  return driver;
}

