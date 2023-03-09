//Opgave 1:
const mikkel = {
    firstName: "Mikkel",
    lastName: "Asmussen",
    age: 23
}

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

const anotherMikkel = new Person("Mikkel", "Asmussen", 24);
console.log(anotherMikkel);
console.log(mikkel);


//Opgave 2
class Average {
    constructor(valueOne, valueTwo, valueThree) { //Constructor method
        this.valueOne = valueOne;
        this.valueTwo = valueTwo;
        this.valueThree = valueThree;
    }
    calculateAverage() {
        return `The average of the numbers in the object is: ${((this.valueOne + this.valueTwo + this.valueThree) / 3).toFixed(4)}` //Calculating average, and returning string + answer.
    }
}

const averageOne = new Average(10, 20, 30); //Creating new object
console.log(averageOne.calculateAverage()); //Logging answer

//Opgave 3
class Volume {
    constructor(height, radius) {
        this.height = height;
        this.radius = radius;
    }
    calculateVolume() {
        return `The volume of the cylinder is: ${(Math.PI * this.radius ** 2 * this.height).toFixed(4)}`
    }
}

const cylinderOne = new Volume(19, 5);
console.log(cylinderOne.calculateVolume());


//Opgave 4
class Car {
    constructor(model, year, kilometers, color, price, photo) {
        this.model = model;
        this.year = year;
        this.kilometers = kilometers;
        this.color = color;
        this.price = price;
        this.photo = photo;
    }

}
const carOne = new Car("Hyundai Getz", 2007, 150000, "black", 6000, false);
console.log(carOne)

//Opgave 5
document.getElementById('cases').addEventListener('change', function () {
    var visible = document.querySelector('.visible'), cases = document.getElementById(this.value);
    if (visible != null) {
        visible.className = 'vehicle';
    }
    if (cases != null) {
        cases.className = 'visible';
    }
});

class CarTwo {
    constructor(model, year, kilometers, color, price, horsepower, photo) {
        this.model = model, this.year = year, this.kilometers = kilometers, this.color = color, this.price = price, this.horsepower = horsepower, this.photo = photo;
    }

    addCar(boolean) {
        let valuesOfCar = Object.values(this), keysOfCar = Object.keys(this), divOfCar = document.createElement("div");
        divOfCar.className = "classOfCars";
        document.getElementById('carContainer').appendChild(divOfCar);
        for (let i = 0; i < keysOfCar.length; i++) {
            if (keysOfCar[i] === "price") {
                let priceParagraph = document.createElement("p");
                priceParagraph.textContent = (`${keysOfCar[i].charAt(0).toUpperCase() + keysOfCar[i].slice(1)}: ${valuesOfCar[i]}`)
                priceParagraph.className = "price";
                divOfCar.appendChild(priceParagraph);
            }
            else if (keysOfCar[i] === "photo") {
                let photo = document.createElement("img");
                photo.src = this.photo;
                divOfCar.appendChild(photo);
            }
            else if (valuesOfCar[i] != undefined) {
                let otherParagraphs = document.createElement("p");
                otherParagraphs.textContent = (`${keysOfCar[i].charAt(0).toUpperCase() + keysOfCar[i].slice(1)}: ${valuesOfCar[i]}`)
                otherParagraphs.className = "otherValues";
                divOfCar.appendChild(otherParagraphs);
            }
        }
        let button = document.createElement("button");
        button.textContent = "Remove car";
        button.addEventListener("click", () => { this.removeCar(divOfCar) });
        divOfCar.appendChild(button);
        if(boolean === true) {
            document.getElementById("carHeader").style.display = "block";}
        return [button, divOfCar];
    }
    removeCar(aCar) { aCar.remove(); }
}

function getInputValuesOfCar() {
    const createCar = new CarTwo(document.getElementById('inputOne').value, document.getElementById('inputTwo').value, document.getElementById('inputThree').value, document.getElementById('inputFour').value, document.getElementById('inputFive').value, document.getElementById("inputSix").value, document.getElementById('inputSeven').value);
    createCar.addCar(true);
}

function getInputValuesOfBike() {
    const createBike = new Bike(document.getElementById('bikeInputOne').value, document.getElementById('bikeInputTwo').value, document.getElementById('bikeInputThree').value, document.getElementById('bikeInputFour').value, document.getElementById('bikeInputFive').value, document.getElementById("bikeInputSix").value);
    createBike.addCar(false);
}

function getInputValuesOfMotorcycle() {
    const createMotorcycle = new Motorcycle(document.getElementById('motorcycleInputOne').value, document.getElementById('motorcycleInputTwo').value, document.getElementById('motorcycleInputThree').value, document.getElementById('motorcycleInputFour').value, document.getElementById('motorcycleInputFive').value, document.getElementById("motorcycleInputSix").value);
    createMotorcycle.addMotorcycle(false);
}

class Bike extends CarTwo {
    constructor(model, year, color, price, gears, photo) {
        super(model, year), this.color = color, this.price = price, this.gears = gears, this.photo = photo;
    }
    addCar() {
        const myBike = super.addCar()
        myBike[0].textContent = "Remove bike";
        document.getElementById('bikeContainer').appendChild(myBike[1]);
        document.getElementById("bikeHeader").style.display = "block";
    }
}

class Motorcycle extends CarTwo {
    constructor(model, year, kilometers, color, price, photo) {
        super(model, year, kilometers, color, price), this.photo = photo;
    }
    addMotorcycle() {
        const myMotorcycle = super.addCar()
        myMotorcycle[0].textContent = "Remove motorcycle";
        document.getElementById('motorcycleContainer').appendChild(myMotorcycle[1]);
        document.getElementById("motorcycleHeader").style.display = "block";
    }
}









