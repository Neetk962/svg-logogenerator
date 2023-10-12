


class Shapes {
    constructor() {
      this.color = ""
      
    }
  
    setColor(color) {
      this.color=color
    }
  
    
}


class Square extends Shapes {

render(){
    return `<rect width="300" height="100" style="fill:${this.color};stroke-width:3;stroke:rgb(0,0,0)" />`
}

}
class Triangle extends Shapes {
    
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />` 
    }
}  

class Circle extends Shapes {
    render () {
        return `<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${this.color}" />`
    }
}


module.exports={Triangle, Square, Circle}