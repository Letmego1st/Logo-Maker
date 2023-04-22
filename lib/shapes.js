// console.log('Shapes')
//  const Circle = require('./circle');
//  const Square = require('./square');
//  const Triangle = require('./triangle');

//  const makeShape = (data) => {
//    const { logoShape } = data;
//    switch (logoShape) {
//      case 'circle':
//        const makeCircle = new Circle(data);
//        return makeCircle;
//        break;

//      case 'triangle':
//        const makeTriangle = new Triangle(data);
//        return makeTriangle;
//       break;

//      case 'square':
//        console.log(data);
//        const makeSquare = new Square(data);
//        return makeSquare;
//        break;

//      default:
//        return `Something is not right!`;
//        break;
//    }
//  };

//  module.exports = { makeShape };


class Shape {
    constructor(){
        this.color = "";
    }
    setColor(color) {
        this.color = color;
    }
}

class Triangle extends Shape {
    display() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;   
    }
}

class Square extends Shape {
    display() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
    }
}

class Circle extends Shape {
    display() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}