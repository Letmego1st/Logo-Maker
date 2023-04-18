// Old Way

const inquirer = require("inquirer");
const fs = require('fs')
//const path = require('path');
 const {shapes} = require("./lib/shapes");


// New Way
// import inquirer from 'inquirer'
inquirer
  .prompt([
    {
        type: "validate",
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
        choices: ["circle", "square", "triangle"] 
       },
    
    ])


       .then(function (data) {
       const svgPath = "./lib/shapes";
       console.log(data);
     fs.writeFile(svgPath, data.userName, function(err){
         if (err) throw err
      });
    });

    
    // function init() {
    //     inquirer.prompt (questions).then((userResponse) => {
    //       console.log("userResponse = ", userResponse);
    //       writeToFile("logoMaker.svg", {Circle, Square, Triangle}(userResponse));
      
    //     });
    //   }





    // init()




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
