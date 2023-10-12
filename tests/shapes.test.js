
const {Circle, Sqaure, Triangle} = require('../lib/shapes.js');

describe('Shapes', () => {
    // A test is created to check that sum does in fact return the two numbers added together.
    describe('Triangle', () => {
      it('should output the SVG for Traingle', () => {
        const shape = new Triangle();
         shape.setColor("blue");
       expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
      });
    });

    describe('Square', () => {
        it('should output the SVG for Square', () => {
          const shape = new Sqaure();
           shape.setColor("blue");
         expect(shape.render()).toEqual('<rect width="300" height="100" style="fill:blue;stroke-width:3;stroke:rgb(0,0,0)" />');
        });
      });

      describe('Circle', () => {
        it('should output the SVG for Circle', () => {
          const shape = new Circle();
           shape.setColor("blue");
         expect(shape.render()).toEqual('<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="blue" />');
        });
      });
  });

