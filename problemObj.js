//Access the golden rod color value in output.
const colors = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
  "golden rod": '#daa520'
};

// console.log(colors["golden rod"]);

// For this object below add a property named passenger capacity with value 5

const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
  passenger: 5
}
// console.log(car.passenger)
// Display the physics marks as output.
const student = {
  name: "Hamim Sakep",
  id: 5421,
  physics: {
      subject: "HSC Physics",
      author: "Shahjahan Tapan",
      marks: 30
  }
};

// console.log(student.physics.subject)

// 4.Count the number of properties.
// let students = {
//   name: 'Ariana Grande',
//   age: 21,
//   city: 'Gaibandha',
//   isStudent: true
// };
//  x = Object.keys(students).length
//  console.log(x)


// 5 .  string diye | use koror 


let myObject = {
  name: 'john Doe',
  age : 25, 
  city : 'Example City',
  isStudent : true
}

// const keys  = Object.keys(myObject);
// const value = Object.values(myObject)
// console.log(keys+ " | " + typeof(value))

for(let key in myObject){
  // console.log(`Key: ${key} | type: ${myObject[key]}`)
  //  console.log(key)
  //  console.log(myObject[key])
}

const keys = Object.keys(myObject);
console.log(keys)

for(const key of keys){
  console.log("Key: " + key, "|" ,"Type: "+ typeof(myObject[key]) )
}


