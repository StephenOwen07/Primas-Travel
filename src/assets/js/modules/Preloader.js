var $ = require("jquery");

function Person(fullName, favColor) {
  this.name = fullName;
  this.favouriteColor = favColor;
  this.greet = function() {
    console.log("hi");
  };
}

module.exports = Person;
