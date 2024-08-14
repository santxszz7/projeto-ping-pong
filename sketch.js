let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;
let colidiu = false;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;


function setup() {
    createCanvas(600, 400);

}
function draw() {
    background(0);
    mostraBolinha();
    movimentaBolinha();
    verificaColisaoBorda();
    mostraRaquete(xRaquete, yRaquete);
    mostraRaquete(xRaqueteOponente, yRaqueteOponente);
    movimentaMinhaRaquete();
    verificaColisaoRaquete();
    verificaColisaoRaquete(xRaquete, yRaquete);
    verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
    movimentaRaqueteOponente();
    incluiPlacar();
    marcaPonto();

}
function movimentaRaqueteOponente() {
    velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
    yRaqueteOponente += velocidadeYOponente
}

function verificaColisaoRaquete(x, y) {
    colidiu = collideRectCircle(xRaquete, yRaquete, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu) {
        velocidadeXBolinha *= -1;
    }
    raquetada.play();
}


function verificaColisaoRaquete() {
    if (xBolinha - raio < xRaquete + raqueteComprimento) {
        velocidadeXBolinha *= -1;
        raquetada.play();
    }
}

function mostraRaquete(xRaquete, yRaquete) {
    rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
}
function mostraRaquete(xRaqueteOponente, yRaqueteOponente) {
    rect(xRaqueteOponente, yRaqueteOponente, raqueteComprimento, raqueteAltura);
}


function mostraBolinha() {
    circle(xBolinha, yBolinha, diametro)
}

//movimentaBolinha();
xBolinha += velocidadeXBolinha;
yBolinha += velocidadeYBolinha;

function verificaColisaoRaquete(x, y) {
    colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu) {
        velocidadeXBolinha *= -1;
    }
}


function verificaColisaoBorda() {
    if (xBolinha + raio > width || xBolinha - raio < 0) {
        velocidadeXBolinha *= -1;
    }
    if (yBolinha + raio > height || yBolinha - raio < 0) {
        velocidadeYBolinha *= -1;
    }
}
function movimentaMinhaRaquete() {
    if (keyIsDown(UP_ARROW)) {
        yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yRaquete += 10;
    }
    //placar do jogo
    let meusPontos = 0;
    let pontosDoOponente = 0;
    function incluiPlacar() {
        fill(255);
        text(meusPontos, 278, 26);
        text(pontosDoOponente, 321, 26);
        function marcaPonto() {
            if (xBolinha > 590) {
                meusPontos += 1;
                ponto.play();
            }
            if (xBolinha < 10) {
                pontosDoOponente += 1;
                ponto.play();
            }

            function incluiPlacar() {
                textAlign(CENTER);
                textSize(16);
                fill(255);
                rect(150, 10, 40, 20);
                text(meusPontos, 150, 26);
                rect(450, 10, 40, 20);
                text(pontosDoOponente, 450, 26);
                //sons do jogo
                let raquetada;
                let ponto;
                let trilha;

                function preload() {
                    trilha = loadSound("trilha.mp3");
                    ponto = loadSound("ponto.mp3");
                    raquetada = loadSound("raquetada.mp3");

                    function setup() {
                        createCanvas(600, 400);
                        trilha.loop();
                    }

                    function movimentaRaqueteOponente() {
                        if (keyIsDown(87)) {
                            yRaqueteOponente -= 10;
                        }
                        if (keyIsDown(83)) {
                            yRaqueteOponente += 10;
                        }
                    }

                }

            }


        }
    }



}