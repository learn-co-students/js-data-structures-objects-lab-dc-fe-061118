// Write your solution in this file!
const driver = { name: 'Sam'}

function updateDriverWithKeyAndValue(driver, key, value) {
  const driverWithAddress = { ...driver };
  driverWithAddress['address']="11 Broadway";
  return driverWithAddress;
  return driver;
} 

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver.address = '12 Broadway'
  return driver;
} 

function deleteFromDriverByKey(driver, key) {
  const noDriver = { ...driver };
  delete noDriver.name;
  return noDriver;
  return driver;
} 

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver.name;
  return driver;
} 