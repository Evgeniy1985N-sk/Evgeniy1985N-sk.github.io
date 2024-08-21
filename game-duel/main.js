const { useState, useEffect } = React;

function App() {
    const [player1Score, setPlayer1Score] = useState(0);
    const [player2Score, setPlayer2Score] = useState(0);
    const [shootingSpeed1, setShootingSpeed1] = useState(400);
    const [shootingSpeed2, setShootingSpeed2] = useState(600);

    let [speed1, setSpeed1] = useState(6);
    let [speed2, setSpeed2] = useState(4);


    const colors = ['#000', '#fff', 'green', 'red', 'blue', 'yellow', 'purple', 'orange', 'brown'];


    useEffect(() => {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        const w = (canvas.width = innerWidth / 2);
        const h = (canvas.height = innerHeight / 2.4);

        const inputs = document.querySelectorAll(".input-container input");

        const rH = 30;
        const rS = 10;
        const player1 = 1;
        const player2 = 2;
        const x1 = 40;
        const color1 = 'white';
        const color2 = 'black';

        let y1 = rH;
        let y2 = rH * 2;

        let shootingS1 = 400;
        let shootingS2 = 600;
        let mouseX = null;
        let mouseY = null;


        const app = document.querySelector('.app');
        let color1Spell = color1;
        let color2Spell = color2;
        let playerNumber = 0;

        app.addEventListener('click', function(e) {
            if (e.target.tagName !== 'I') return;

            if (playerNumber === 1) {
                color1Spell = e.target.dataset.color;
                document.querySelector('.color-menu').classList.remove('active');
            }
            if (playerNumber === 2) {
                color2Spell = e.target.dataset.color;
                document.querySelector('.color-menu').classList.remove('active');
            }
        })

        class Hero {
            constructor(player, radius, color, x, y, xSpeed, ySpeed, dirX) {
                this.player = player;
                this.radius = radius;
                this.color = color;
                this.x = x;
                this.y = y;
                this.ySpeed = ySpeed;
                this.xSpeed = xSpeed;
                this.dirX = dirX;
                this.active = true;
            }

            draw() {
                if (this.active) {
                    circle(this.x, this.y, this.radius, this.color);
                }
            }

            move() {
                if (this.dirX) {
                    if (this.player === player1) y1 = this.x += this.xSpeed;
                    if (this.player === player2) y2 = this.x -= this.xSpeed;
                } else {
                    this.y += this.ySpeed;
                    if (this.player === player1) y1 = this.y;
                    if (this.player === player2) y2 = this.y;
                }

                if (this.y < this.radius || this.y > h - this.radius) {
                    this.ySpeed = -this.ySpeed;
                    mouseY = null;
                }

                if (mouseX !== null && mouseY !== null) {
                    let dist = distance(this.x, this.y, mouseX, mouseY);

                    if (dist < this.radius + 10) {
                        this.ySpeed = -this.ySpeed;

                        setTimeout(() => {
                            mouseY = null;
                        }, 600);
                    }
                }
            }

            checkCollision(hero) {
                if (this.dirX && this.active) {
                    if (distance(this.x, this.y, hero.x, hero.y) < this.radius + hero.radius) {
                        this.active = false;
                        if (this.player === player1) {
                            setPlayer1Score((prevScore) => prevScore + 1);
                        }
                        if (this.player === player2) {
                            setPlayer2Score((prevScore) => prevScore + 1);
                        }
                        this.color = "transparent";
                    }
                }
            }

            isClicked(x, y) {
                return distance(this.x, this.y, x, y) < this.radius;
            }

            updateSpeed(newSpeed) {
                this.ySpeed = Number(newSpeed);
            }

            updateColor() {
                if (this.player === player1) {
                    this.color = color1Spell;
                }
                if (this.player === player2) {
                    this.color = color2Spell;
                }
            }
        }

        function circle(x, y, radius, color) {
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2, false);
            ctx.fillStyle = color;
            ctx.fill();
        }

        function distance(x1, y1, x2, y2) {
            return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        }
        

        canvas.addEventListener("mousemove", (e) => {
            mouseX = e.clientX - canvas.offsetLeft;
            mouseY = e.clientY - canvas.offsetTop;
        });

        function handleClick(e) {
            const rect = canvas.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;

            if (hero1.isClicked(clickX, clickY)) {
                playerNumber = 1;
                document.querySelector('.color-menu').classList.add('active');
            }

            if (hero2.isClicked(clickX, clickY)) {
                playerNumber = 2;
                document.querySelector('.color-menu').classList.add('active');
            }


        }

        canvas.addEventListener('click', handleClick);

        inputs.forEach(function (item) {
            item.onchange = function (e) {
                let name = e.target.className;
                let value = e.target.value;
                if (name === "js-input-shoot-1") {
                    shootingS1 = 1000 - value;
                }
                if (name === "js-input-shoot-2") {
                    shootingS2 = 1000 - value;
                }
                if (name === "js-input-speed-1") {
                    speed1 = value;
                    hero1.updateSpeed(speed1);
                }
                if (name === "js-input-speed-2") {
                    speed2 = value;
                    hero2.updateSpeed(speed2);
                }
            };
        });


        const hero1 = new Hero(player1, rH, color1, x1, y1, 4, speed1, false);
        const hero2 = new Hero(player2, rH, color2, w - x1, y2, 4, speed2, false);

        let spells1 = [];
        let spells2 = [];

        function createSpell1() {
            const spell1 = new Hero(player1, rS, color1Spell, hero1.x + hero1.radius, hero1.y, 4, 0, true);
            spells1.push(spell1);
            setTimeout(createSpell1, shootingS1);
        }

        function createSpell2() {
            const spell2 = new Hero(player2, rS, color2Spell, hero2.x - hero2.radius, hero2.y, 4, 0, true);
            spells2.push(spell2);
            setTimeout(createSpell2, shootingS2);
        }

        createSpell1();
        createSpell2();
        

        setInterval(function () {
            ctx.clearRect(0, 0, w, h);

            hero1.draw();
            hero1.move();
            hero1.checkCollision(hero2);

            hero2.draw();
            hero2.move();
            hero2.checkCollision(hero1);

            spells1.forEach((spell) => {
                spell.draw();
                spell.move();
                spell.checkCollision(hero2);
                spell.updateColor();
            });

            spells2.forEach((spell) => {
                spell.draw();
                spell.move();
                spell.checkCollision(hero1);
                spell.updateColor();
            });

            spells1 = spells1.filter((spell) => spell.active);
            spells2 = spells2.filter((spell) => spell.active);
        }, 30);

    }, []);

    return (

        <div className="app">

            <div className="scoreboard">
                <span className="scoreboard__player">
                    Player 1: <i>{player1Score}</i>
                </span>
                <span className="scoreboard__player">
                    Player 2: <i>{player2Score}</i>
                </span>
            </div>

            <canvas id="canvas"></canvas>

            <div className="input-container">
                <label>
                    player 1:
                    <b>SHOOTING</b>
                    <input 
                      className="js-input-shoot-1" 
                      type="range" min="100" max="1000" 
                      value={shootingSpeed1} step="100" 
                      onChange={(e) => setShootingSpeed1(e.target.value)} />
                </label>
                <label>
                    player 2:
                    <b>SHOOTING</b>
                    <input 
                      className="js-input-shoot-2" 
                      type="range" min="100" max="1000" 
                      value={shootingSpeed2} step="100" 
                      onChange={(e) => setShootingSpeed2(e.target.value)} />
                </label>
                <label>
                    player 1:
                    <b>SPEED</b>
                    <input 
                      className="js-input-speed-1" 
                      type="range" min="1" max="30" 
                      value={speed1} step="1" 
                      onChange={(e) => setSpeed1(e.target.value)} />
                </label>
                <label>
                    player 2:
                    <b>SPEED</b>
                    <input 
                      className="js-input-speed-2" 
                      type="range" min="1" max="30" 
                      value={speed2} 
                      step="1" onChange={(e) => setSpeed2(e.target.value)} />
                </label>
            </div>

            <div className="color-menu">
              {
                colors.map((color, index) => (
                    <i 
                      key={index} 
                      className={colors[index]}
                      data-color = {color}
                    ></i>
                ))
              }
            </div>
        </div>

    );
}

ReactDOM.render(<App />, document.getElementById("root"));