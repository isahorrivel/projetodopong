//Posição e tamanho da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 25;
let raio = 12.5;

//Velocidade da bolinha
let velocidadeDaBolinhaX = 6;
let velocidadeDaBolinhaY = 6;

//Raquete
let xRaquete = 5;
let yRaquete = 150;
let RaqueteCcomprimento = 10;
let RaqueteAltura = 90;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentoBolinha();
  colideBorda();
  mostraRaquete();
  movimentaRaquete();
  colideRaquete()
}
//
function mostraBolinha() {
  circle(XBolinha, YBolinha, diametro);
}
function movimentoBolinha() {
  XBolinha += VelocidadeDaBolinhaX;
  YBolinha += velocidadeDaBolinha;
}
function colideBorda() {
  if (XBolinha > width || XBolinha < 0) {
    velocidadeDaBolinhaX *= -1;
}
  if (YBolinha > height || YBolinha < 0) {
    velocidadeDaBolinhaY *= -1;
 }
}
function mostraRaquete() {
  rect(xRaquete, yRaquete, RaqueteComprimento, RaqueteAltura);
}
function movimentaRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
   if (keyIsDown(DOWN_ARROW)) {
     
   }
