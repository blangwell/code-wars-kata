function Pet(name, species, good) {
  this.name = name;
  this.species = species;
  this.good = good;

}

Pet.prototype.speak = function() {
  return `hello my name is ${this.name}`;
}

Pet.prototype.aboutMe = function() {
  return 'My name is ' + this.name + ' I am of the species ' + this.species +  
  ' and I am a very ' + (this.good === true ? 'good ' : 'bad ') + this.species;
}


const waffles = new Pet('waffles', 'feline', true);

// __proto__ (see notes below)
waffles.__proto__.sayHowdy = function() {
  return `howdy howdy this ${this.name}` ;
}

const peachfuzz = new Pet('peachfuzz', 'canis', false);
// although i created sayHowdy in the context of an instance of pet
// accessing its __proto__ property alters the parent object's prototype
// the call to peachfuzz.sayHowdy will work
// console.log(peachfuzz.sayHowdy());


// first kata
// something simple but with prototypes


function checkProperty() {
  Object.prototype.newMethod = function() {
    return 'this a new method!'
  }
  const obj = new Object;
  
  return obj;
};

module.exports = checkProperty;
