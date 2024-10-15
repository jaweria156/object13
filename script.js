var itemsArray = [
    { name: "juice", price: 50, quantity: 3 },
    { name: "cookie", price: 30, quantity: 9 },
    { name: "shirt", price: 880, quantity: 1 },
    { name: "pen", price: 100, quantity: 2 }
];

let totalAllItems = 0;

itemsArray.forEach(item => {
    let totalPrice = item.price * item.quantity;
    console.log(`Total price of ${item.name}: ${totalPrice}`);
    totalAllItems += totalPrice;
});

console.log(`Total price of all items: ${totalAllItems}`);


var user = {
    name: "John",
    email: "john@example.com",
    password: "12345",
    age: 25,
    gender: "Male",
    city: "New York",
    country: "USA"
};

// Check if age and country properties exist
console.log("age" in user);  // true
console.log("country" in user);  // true

// Check if firstName and lastName properties exist
console.log("firstName" in user);  // false
console.log("lastName" in user);  // false

function Person(name, email, age, city) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.city = city;
}

// Creating multiple records
var person1 = new Person("Alice", "alice@example.com", 28, "New York");
var person2 = new Person("Bob", "bob@example.com", 35, "Los Angeles");

console.log(person1);
console.log(person2);


function Person(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}

function saveRecord() {
    let name = document.getElementById('name').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let address = document.getElementById('address').value;
    let education = document.getElementById('education').value;
    let profession = document.getElementById('profession').value;

    let newPerson = new Person(name, gender, address, education, profession);

    // Store records in localStorage
    let peopleRecords = JSON.parse(localStorage.getItem('people')) || [];
    peopleRecords.push(newPerson);
    localStorage.setItem('people', JSON.stringify(peopleRecords));

    alert('Record saved successfully!');
    document.getElementById('populationForm').reset();
}

// To retrieve and display stored records:
function displayRecords() {
    let peopleRecords = JSON.parse(localStorage.getItem('people')) || [];
    console.log(peopleRecords);
}