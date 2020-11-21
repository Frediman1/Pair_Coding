// Medium

var originalVowel = function (x) {

  var vowels = ["a", "e", "i", "o", "u", "y"];

  for (var i = 0; i < vowels.length; i++) {
    if (x === vowels[i]) {
      return ("This is a vowel");
    }
  }

  return ("This is not a vowel");

};
console.log(originalVowel("a"));
console.log(originalVowel("e"));
console.log(originalVowel("l"));
console.log(originalVowel("y"));

// Medium (2)

function anagramCompare(a, b) {
  y = a.split("").sort();
  z = b.split("").sort();
  for (i = 0; i < y.length; i++) {
    if (y.length === z.length) {
      if (y[i] === z[i]) {
        console.log(`${a} and ${b} are Anagrams`);
        break;
      }
      else {
        console.log(`${a} and ${b} are not Anagrams`);
        break;
      }
    }
    else {
      console.log(`${a} is different from ${b}`);
    }
    break;
  }
}

anagramCompare("Treena", "Treean");

anagramCompare("Fredrick", "Rudy");


//Medium 3

function gdc_two_numbers(x, y) {
  var Z;
  while ((x % y) > 0) {
    Z = x % y;
    x = y;
    y = Z;
  }
  return y;
}

console.log(gdc_two_numbers(389, 700));


// Medium 4 

class myCar {
  constructor(make, model, year, mileage) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
  }

  driveToWork() {
    console.log(`Old Mileage: ${this.mileage}`)
    this.mileage += 33;
    console.log(`New Milage: ${this.mileage}`)
  }


  driveAroundTheWorld() {
    console.log(`Old Mileage: ${this.mileage}`)
    this.mileage += 24000;
    console.log(`New Milage: ${this.mileage}`)
  }

  runErrands() {
    console.log(`Old Mileage: ${this.mileage}`)
    this.mileage += 30;
    console.log(`New Milage: ${this.mileage}`)
  }
}

let c1 = new myCar("Dodge", "Charger", "2016", 666);
c1.driveAroundTheWorld();

c1.runErrands();

c1.driveToWork();