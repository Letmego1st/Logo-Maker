// Old Way

const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const { Triangle, Square, Circle } = require("./lib/shapes");
const SVG = require("./lib/svg")
const { writeFile } = require("fs/promises");
// New Way
// import inquirer from 'inquirer'
//inquirer
const questions = [
  {
    type: "input",
    message: "Enter up to 3 characters:",
    name: "logoName",
  },
  {
    type: "input",
    message: "Enter a color keyword or a hexadecimal number for the text?",
    name: "textColor",
  },
  {
    type: "input",
    message: "Enter a color keyword or a hexadecimal number for the shape:",
    name: "shapeColor",
  },
  {
    type: "list",
    message: "Choose a shape for your project?",
    name: "logoShape",
    choices: ["circle", "square", "triangle"],
  },
];

//    .then(function (data) {
//    const svgPath = "./lib/shapes";
//    console.log(data);
//  fs.writeFile(svgPath, data.userName, function(err){
//      if (err) throw err
//   });
// });

function init() {
  //console.log("init")
  inquirer.prompt(questions).then(({logoName, textColor, shapeColor, logoShape}) => {
    // console.log("userResponse = ", userResponse);
    //  writeToFile("logoMaker.svg", shapes(userResponse));
    let shape;
    switch (logoShape) {
      case "square":
        shape = new Square();
        break;
      case "triangle":
        shape = new Triangle();
        break;
      default:
        shape = new Circle();
        break;
    }
    shape.setColor(shapeColor);
    let svg = new SVG();
    svg.setText(logoName,textColor);
    svg.setShape(shape);
    return writeFile("logo.svg",svg.display());
  })
  .then(() => {
    console.log("successfully generated logo.svg")
  })
  .catch((err) => {
    console.log(err);
  })
}

init();

//   .then(function (data) {
//     console.log(data);
//     fs.writeFile('test.txt', data.userName, function(err){
//         if (err) throw err
//     })
//   });

// const arr = [1,2,3,4,5,6]
// const John = ['John', 'Cena', 15, 'Columbia Unviersity', true, 2]

// const objJohn = {
//     // key: value pairs
//     //key = name or context we are giving
//     //value = what is the data of said key/context
//     first: 'John',
//     last: 'Cena',
//     age: 15,
//     school: 'Columbia',
//     passing: true,
//     yearsleft: 2
// }
// console.log(John[2])
// console.log(objJohn.age)
