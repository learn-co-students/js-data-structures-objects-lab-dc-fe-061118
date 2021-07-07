// Write your solution in this file!
driver = {}
function updateDriverWithKeyAndValue(driver, key, value) {
  copy=Object.assign({}, driver)
  copy[key]=value;
  return copy;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key]=value;
  return driver;
}


function deleteFromDriverByKey(driver, key){
  newdriver = Object.assign({}, driver)
  delete newdriver[key];
  return newdriver
}


function destructivelyDeleteFromDriverByKey(driver,key){
  delete driver[key];
  return driver;
}