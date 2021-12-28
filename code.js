var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["04bdb0eb-aacd-437f-bf08-d2e66b0c89e7","bf3003d6-effc-4689-a3ce-b02dcdd5fa4c","2474bb80-ab76-4505-920d-99c2ae1bc299"],"propsByKey":{"04bdb0eb-aacd-437f-bf08-d2e66b0c89e7":{"name":"kid_44_suit_1","sourceUrl":null,"frameSize":{"x":152,"y":300},"frameCount":1,"looping":true,"frameDelay":12,"version":"J.b69f07fFRPOEY0xHyf.d3sol9qZzQu","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":152,"y":300},"rootRelativePath":"assets/04bdb0eb-aacd-437f-bf08-d2e66b0c89e7.png"},"bf3003d6-effc-4689-a3ce-b02dcdd5fa4c":{"name":"0a633855c250798d3ab1b2dbfe28f18e-desenho-animado-engracado-da-profissao-de-ladrao.png_1","sourceUrl":"assets/v3/animations/ObpMKsR4ZbNDbYZDVaNgRnzfy8VY3mxj94B4j0L9Dv0/bf3003d6-effc-4689-a3ce-b02dcdd5fa4c.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"9at2tRiBEGxZWxIgSBqYPLFhx5P5pqGT","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/ObpMKsR4ZbNDbYZDVaNgRnzfy8VY3mxj94B4j0L9Dv0/bf3003d6-effc-4689-a3ce-b02dcdd5fa4c.png"},"2474bb80-ab76-4505-920d-99c2ae1bc299":{"name":"icone-de-voiture-symbole-png-orange.png_1","sourceUrl":"assets/v3/animations/ObpMKsR4ZbNDbYZDVaNgRnzfy8VY3mxj94B4j0L9Dv0/2474bb80-ab76-4505-920d-99c2ae1bc299.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"y5m425fe9pBI21em.C2Y7onad8zhPOcl","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/ObpMKsR4ZbNDbYZDVaNgRnzfy8VY3mxj94B4j0L9Dv0/2474bb80-ab76-4505-920d-99c2ae1bc299.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var rua = createSprite(200,272,350,300);
var calsada1 = createSprite(372,272,58,300);
var calsada2 = createSprite(1,272,54,300);
var velhinho = createSprite(15,219,15,15);
velhinho.setAnimation("kid_44_suit_1");
velhinho.scale = 0.2;
var loja = createSprite(387,220,33,200);
var divisoria = createSprite(1,120,800,2);
var ladrao = createSprite(353,140,10,10);
ladrao.setAnimation("0a633855c250798d3ab1b2dbfe28f18e-desenho-animado-engracado-da-profissao-de-ladrao.png_1");
ladrao.scale = 0.1;
var carro1 = createSprite(75,132,15,15);
carro1.setAnimation("icone-de-voiture-symbole-png-orange.png_1");
carro1.scale = 0.1;
var carro2 = createSprite(136,132,15,15);
carro2.setAnimation("icone-de-voiture-symbole-png-orange.png_1");
carro2.scale = 0.1;
var carro3 = createSprite(230,384,15,15);
carro3.setAnimation("icone-de-voiture-symbole-png-orange.png_1");
carro3.scale = 0.1;
var carro4 = createSprite(299,384,15,15);
carro4.setAnimation("icone-de-voiture-symbole-png-orange.png_1");
carro4.scale = 0.1;

var mortes = 0; 

rua.shapeColor = "black";
calsada1.shapeColor = "gray";
calsada2.shapeColor = "gray";
velhinho.shapeColor = "white";
loja.shapeColor = "red";
divisoria.shapeColor = "blue";
ladrao.shapeColor = "black";
carro1.shapeColor = "red";
carro2.shapeColor = "red";
carro3.shapeColor = "red";
carro4.shapeColor = "red";


carro1.velocityY=3;
carro2.velocityY=1;
carro3.velocityY=2;
carro4.velocityY=3;
ladrao.velocityY=1;



function draw() {
  background("blue");
  textSize(20);
  stroke("blsck");
  
  text("mortes: "+ mortes, 76,96);
 
 if (keyDown("w")|| keyDown("up")) {
  velhinho.y = velhinho.y -1;
 
 }
  
 if (keyDown("s")|| keyDown("down")) {
  velhinho.y = velhinho.y +1;
 
 } 
  
 if (keyDown("a")|| keyDown("left")) {
  velhinho.x = velhinho.x -1.5;
 
 } 
  
 if (keyDown("d")|| keyDown("right")) {
  velhinho.x = velhinho.x +1.5;
 
 }  
  
  createEdgeSprites();
  carro1.bounceOff(bottomEdge);
  carro2.bounceOff(bottomEdge);
  carro3.bounceOff(bottomEdge);
  carro4.bounceOff(bottomEdge);
  ladrao.bounceOff(bottomEdge);
  carro1.bounceOff(divisoria);
  carro2.bounceOff(divisoria);
  carro3.bounceOff(divisoria);
  carro4.bounceOff(divisoria);
  ladrao.bounceOff(divisoria);
  
  
  
  if (velhinho.isTouching(rightEdge)) {
   velhinho.x = 15;
   velhinho.y = 219;
   mortes = mortes + 1;
  }
  
  if (velhinho.isTouching(leftEdge)) {
   velhinho.x = 15;
   velhinho.y = 219;
  }
 
 
  if (velhinho.isTouching(divisoria)) {
   velhinho.x = 15;
   velhinho.y = 219;
   mortes = mortes + 1;
  }
 
  if (velhinho.isTouching(bottomEdge)) {
   velhinho.x = 15;
   velhinho.y = 219;
   mortes = mortes + 1;
  }
 
  if (velhinho.isTouching(carro1)) {
   velhinho.x = 15;
   velhinho.y = 219;
   mortes = mortes + 1;
  }
  
  if (velhinho.isTouching(carro2)) {
   velhinho.x = 15;
   velhinho.y = 219;
   mortes = mortes + 1;
  }
  
  if (velhinho.isTouching(carro3)) {
   velhinho.x = 15;
   velhinho.y = 219;
   mortes = mortes + 1;
  }
 
  if (velhinho.isTouching(carro4)) {
   velhinho.x = 15;
   velhinho.y = 219;
   mortes = mortes + 1;
  }
 
  if (velhinho.isTouching(ladrao)) {
   velhinho.x = 15;
   velhinho.y = 219;
   mortes = mortes + 1;
  }
 
  if (velhinho.isTouching(loja)){
   velhinho.x = 15;
   velhinho.y = 219; 
   stroke("White");
   text ("parabens ",  200,200);
   textSize (50);
  }
  
  
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
