//размеры поля
var boardWidth = 1280;
var boardHeight = 800;

class Snake{
    constructor(left, top){
        this.left=Math.round(left);
        this.top=Math.round(top);
        //скорость змейки
        this.speed=125;
    }
    render(){
        let result = document.createElement('div');
        result.setAttribute('class', 'snake');
        result.style.left=this.left + 'px';
        result.style.top=this.top + 'px';
        return result;
    }
}
class Apple{
    constructor(left, top){
        this.left=Math.round(left);
        this.top=Math.round(top);
    }
    render(){
        let result = document.createElement('div');
        result.setAttribute('class', 'apple');
        result.style.left=this.left + 'px';
        result.style.top=this.top + 'px';
        return result;
    }
}

function addobjects (){
    let snake = new Snake(
        (boardWidth - 20) / 2, 
        (boardHeight - 20) / 2
    );
    let apple = new Apple(
        Math.random() * (boardWidth - 20), 
        Math.random() * (boardHeight - 20)
    );
    gameBoard.appendChild(
        snake.render()    
    );
    gameBoard.appendChild(
        apple.render()    
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
    addobjects
);


