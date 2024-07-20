// Define the Scooter class
class Scooter {
    constructor(year, color, model) {
      this.year = year;
      this.color = color;
      this.model = model;
    }
  }
  
  // Define the Driver class
  class Driver {
    constructor(name, age, experience) {
      this.name = name;
      this.age = age;
      this.experience = experience;
    }
  }
  
  // Define the PickupLocation class
  class PickupLocation {
    constructor(address, city) {
      this.address = address;
      this.city = city;
    }
  }
  
  // Export the classes if using a module system
  module.exports = { Scooter, Driver, PickupLocation };
  