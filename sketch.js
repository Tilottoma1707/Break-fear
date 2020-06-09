
var font;

var vehicles = [];

function preload(){
  font = loadFont('AvenirNextLTPro-Demi.otf');
}
function setup() {
  createCanvas(600, 300);
  // textFont(font);
  // textSize(128)
  // fill("pink");
  // noStroke();
  // text('MIND',50,200)

  var points = font.textToPoints('FEAR',50,200,192);

for (var i = 0; i < points.length;i++){
  var pointers = points[i];
  var vehicle = new Vehicle(pointers.x,pointers.y);
  vehicles.push(vehicle);
}


}

function draw() {
  background(20);

  for(var i = 0; i< vehicles.length;i++){
var v = vehicles[i];
v.update();
v.show();
v.return();
  }
}