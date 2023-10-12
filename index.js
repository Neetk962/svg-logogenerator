const inquirer = require('inquirer');
const fs = require('fs');
const {Circle,Square,Triangle} = require("./lib/shapes")

const generateSVG = (data,shape) => {
  return`<svg height="300" width="200">
  <text x="0" y="15" fill="${data.textcolor}">${data.logotext}</text>
  ${shape.render()}
</svg>

  `
}
  
  
  
  
inquirer
  .prompt([
    {
      type: 'input',
      name: 'logotext', //answer labeled 
      message: 'What text is going on your logo, please enter upto 3 characters?',
    },
    {
      type: 'input',
      name: 'textcolor',
      message: 'What color do you want the text to be, please enter color?', //message user will be asked 
    },
    {
      type: 'list',
      name: 'shape',
      message: 'What shape would you like?',
      choices: [
        'circle','square','triangle'
      ]

    },
    {
      type: 'input',
      name: 'shapecolor',
      message: 'What color would you like the shape to be',
    },
    


    
  ])
  
  .then((answers) => {
    let shape;
    if (answers.shape=="circle") {
      shape= new Circle ()
      

    } else if (answers.shape=="square") {
      shape= new Square ()


    } else {
      shape= new Triangle ()

    }

    shape.setColor(answers.shapecolor);


    const LogoContent = generateSVG(answers,shape);

    fs.writeFile('logo.svg', LogoContent, (err) =>
      err ? console.log(err) : console.log('Successfully created logo!')
    );
  });

