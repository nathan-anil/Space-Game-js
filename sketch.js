var cnv;
var ship;
var bgImg;
var enemys = [];
var bullets = [];
var gameOver = false;
var numEnemys = 4;
var stars = [];
var canvasSize = 800;
var myScore = 0;
var highScore = 0;
var bigger = false;

WebFont.load({
    google: {
        families: ['Orbitron', 'Droid Serif']
    }
});
localStorage.setItem("highScore", JSON.stringify(highScore));
function setup() {
    cnv = createCanvas(canvasSize, canvasSize);
    centerCanvas();
    ship = new Ship(7);
    reset1();
}
function reset1() {
    for (var i = 0; i < numEnemys; i++) {
        enemys[i] = new Enemy(random(10, canvasSize - 10), random(-canvasSize, 0), 25, 25);
    }
    for (var i = 0; i < 125; i++) {
        stars[i] = new Star(random(0, canvasSize), random(-canvasSize, 0));
    }
    setTimeouts();
}

function draw() {
    background(0, 0, 0);
    //FIND HI SCORE:

    if (gameOver !== true) {
        game();
    } else {
        textSize(30);
        textFont('Orbitron');
        if (myScore > JSON.parse(localStorage.getItem("highScore"))) {
            localStorage.removeItem('highScore');
            localStorage.setItem("highScore", JSON.stringify(myScore));
        }
        if (myScore == JSON.parse(localStorage.getItem("highScore"))) {
            fill(10, 200, 10);
            text("Mission Success!.", width / 2 - 150, height / 2 - 100);
        }
        else {
            fill(200, 10, 10);
            text("Mission Failed, you Died.", width / 2 - 150, height / 2 - 100);
        }
        fill(255, 255, 255);
        text("Score: " + myScore, width / 2 - 110, height / 2);
        text("HI Score: " + JSON.parse(localStorage.getItem("highScore")), width / 2 - 110, height / 2 + 50);
        fill(150, 10, 10);
        text("Enter to Retry", width / 2 - 110, height / 2 + 200);
    }
}



function game() {

    fill(255);
    textSize(20);
    textFont('Obitron');
    text("Score: " + myScore, 650, 15);
    text("Best: " + JSON.parse(localStorage.getItem("highScore")), 550, 15);
    for (var i = 0; i < stars.length; i++) {
        stars[i].show();
        stars[i].move();
        if (stars[i].y > canvasSize) {
            stars[i].y = stars[i].init;
        }
    }
    for (var i = enemys.length - 1; i >= 0; i--) {
        if (enemys[i].toDelete1) {
            enemys[i].y = enemys[i].init;
            enemys[i].toDelete1 = false;
            numEnemys += 1;
            enemys[i].lives += 2;
            enemys[i].ydir += .1;
            for (var j = 0; j < stars.length; j++) {
                stars[j].ydir += .1;
            }

            ship.speed += .1;
            enemys[i].setNewLocation();
            console.log(numEnemys);
            console.log("speed" + enemys[i].ydir);
            console.log("Lives should go up" + enemys[i].lives);
        }
    }

    ship.show();
    ship.move();
    for (var i = 0; i < bullets.length; i++) {
        bullets[i].show();
        bullets[i].move();
        for (var j = 0; j < enemys.length; j++) {
            if (bullets[i].hits(enemys[j])) {
                bullets[i].toHide();
                enemys[j].shrink();
            }
        }
    }

    var edge = false;
    for (var i = 0; i < enemys.length; i++) {
        enemys[i].show();
        enemys[i].move();

        if (enemys[i].y > 650) {
            gameOver = true;
        }
    }

    for (var i = bullets.length - 1; i >= 0; i--) {
        if (bullets[i].toDelete) {
            bullets.splice(i, 1);
        }
    }
    myScore += 1;
    const el = document.querySelector('.messages h3');
    powerups();


} //END OF GAME LOOp

function centerCanvas() {
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
}
function keyReleased() {
    if (key !== ' ') {
        ship.setDir(0);
    }

}
function keyPressed() {
    if (key === ' ' || keyCode === UP_ARROW) {
        var bullet = new Bullet(ship.x + 1, ship.y - 40);
        bullets.push(bullet);
    }
    if (keyCode === 13) {
        location.reload();
    }
    if (keyCode === RIGHT_ARROW) {
        ship.setDir(1);
    } else if (keyCode === LEFT_ARROW) {
        ship.setDir(-1);
    } else if (key !== ' ') {
        ship.setDir(0);
    }
}
var runPower1 = false;

function powerups() {
    if (bigger) {
        if (keyCode === 17) {
            runPower1 = true;
            setTimeout(function () {
                el.style.color = 'blue';
                el.style.display = 'none';
                bigger = false
                runPower1 = false;
            }, 15000);
        }
    }
    for (var i = bullets.length - 1; i >= 0; i--) {
        if (runPower1) {
            bullets[i].s = 30;
        } else { bullets[i].s = 10; }
    }
}

var runInterval = false;
function setTimeouts() {
    var counter = random(5000, 20000);
    console.log(counter);
    const el = document.querySelector('.messages h3');
    el.textContent = "[ctrl] - Bigger Bullets Unlocked";
    bigger = true;
    setTimeout(function () {

        bigger = false;

    }, counter);
}

