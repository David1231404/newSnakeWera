//размеры поля
var boardWidth = 1280;
var boardHeight = 800;

//скорость змейки
var snakeSpeed = 125
class Snake{
    constructor(left,top){
        this.left=Math.round(left);
        this.top=Math.round(top);
    }
    render(){
        let result = document.createElement('div');
        result.setAttribute('class', 'snake');
        result.style.left=this.left + 'px';
        result.style.top=this.top + 'px';
        return result;
    }
}

function addsnake (){
    let snake = new Snake(
        Math.random() * boardWidth, 
        Math.random() * boardHeight 
    );
    gameBoard.appendChild(
    snake.render()    
    );
}

function changeDirection(keyCode) {
    if (keyCode === 37 && direction !== "right") {
      direction = "left";
    } else if (keyCode === 38 && direction !== "down") {
      direction = "up";
    } else if (keyCode === 39 && direction !== "left") {
      direction = "right";
    } else if (keyCode === 40 && direction !== "up") {
      direction = "down";
    }
  }

window.addEventListener(
    'load',
    addsnake
);


