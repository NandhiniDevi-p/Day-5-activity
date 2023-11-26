//TASK 05

//01) json iterate over all for loops(for, forEach,for in ,for of)

// Updated JSON object
const jsonData = {
    "name": "Nandhini Devi",
    "age": 22,
    "sex": "female",
    "skills": ["JavaScript", "HTML", "CSS"]
};

// for loop
console.log("Using for loop:");
const keys = Object.keys(jsonData);
for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = jsonData[key];
    console.log(`${key}: ${value}`);
}

// forEach loop
console.log("\nUsing forEach loop:");
Object.entries(jsonData).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});

// for...in loop
console.log("\nUsing for...in loop:");
for (const key in jsonData) {
    const value = jsonData[key];
    console.log(`${key}: ${value}`);
}

// for...of loop
console.log("\nUsing for...of loop:");
const values = Object.values(jsonData);
for (const value of values) {
    console.log(value);
}