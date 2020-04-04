// index.js
;(function () {
  // init config variables
  let canvas, ctx

  // setup config variables
  function begin () {
    canvas = document.getElementById('gameCanvas')
    ctx = canvas.getContext('2d')

    // grid of objects' size
    let maxObjsHeight = 4
    let maxObjsWidth = 5

    // shape area config - all the shapes will be contained
    //
    let sqMargin = 50 
    let sqHeight = 100
    let sqWidth = 100

    // a rando vars will 
    // get a different colour
    let randoX = getRandomInRange(0, maxObjsWidth)
    let randoY = getRandomInRange(0, maxObjsHeight)
    let randoFill = ''

    let defaultFillColour = '#3698FF'
    let randoFillColour = '#FFED2A'

    let i, j, currX, currY, currWidth, currHeight, currShape, fillColour
    currXStart = 50
    currY = 50

    // draw all grid of shapes
    for (j = 0 ; j < maxObjsHeight ; j++){
      currX = currXStart
      for (i = 0 ; i < maxObjsWidth ; i++ ) {
        console.log(i,j,randoX, randoY)
        if ((i == randoX)&&(j==randoY)){
          fillColour = randoFillColour
        } else {
          fillColour = defaultFillColour
        }
        
        currShape = new Rectangle(
          currX, currY, sqWidth, sqHeight,
          fillColour, 'white', '5')

        currShape.draw()
        currX = currShape.upperRightX() + sqMargin
      }
      currY = currShape.lowerLeftY() + sqMargin
    }
  }


  // shape objects
  class Rectangle{
    constructor(
      x = 0, y = 0,
      width = 0, height = 0,
      fillColor = '', strokeColor = '', strokeWidth = 2
    ) {
      this.x = Number(x)
      this.y = Number(y)
      this.width = Number(width)
      this.height = Number(height)
      this.fillColor = fillColor
      this.strokeColor = strokeColor
      this.strokeWidth = Number(strokeWidth)
    }

    //class funcs
    area() {
      return this.width * this.height
    }

    upperLeftX() {
      return this.x
    }

    upperRightX() {
      return this.x + this.width 
    }

    upperLeftY() {
      return this.y
    }

    lowerLeftY() {
      return this.y + this.height
    }

    draw() {
      ctx.save()
      ctx.fillStyle = this.fillColor
      ctx.lineWidth = this.strokeWidth

      ctx.beginPath()
      ctx.strokeStyle = this.strokeColor
      ctx.rect(this.x, this.y, this.width, this.height)

      ctx.fill()
      ctx.stroke()

      ctx.restore()
    }
  } // end class Rectangle
  
  // todo: more shapes

  // helper func
  function getRandomInRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  // wait for the HTML to load
  document.addEventListener('DOMContentLoaded', begin)

})()