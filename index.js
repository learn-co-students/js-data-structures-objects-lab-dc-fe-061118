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

function destructivelyDeleteFromDriverByKey(driver,key){
  newdriver = delete driver.key;
  return newdriver;
   
}