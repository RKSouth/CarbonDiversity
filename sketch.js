
function preload() {

  //tree images
  bigLeafMaple = loadImage('Images/AltBigLeafMaple2.png');
  cedarLeftLowerLeaves = loadImage('Images/CedarLeftLowerLeaves.png');
  cedarMiddleLeaves = loadImage('Images/CedarMiddleLeaves.png');
  cedarRightLowerLeaves = loadImage('Images/CedarRightLowerLeaves.png');
  cedarTopLeaves = loadImage('Images/CedarTopLeaves.png');
  cedarLowerTrunk = loadImage('Images/LowerTrunk.png');
  cedarUpperTrunk = loadImage('Images/UpperTrunk.png');
  douglasFir = loadImage('Images/DouglasFir.png');
  redAlder = loadImage('Images/RedAlder.png');
  westernHemlock = loadImage('Images/WesternHemlock2.png');

  //background image
  backgroundImage = loadImage('Images/background1.png');
  //atoms of carbon image
  carbonImage = loadImage('Images/Carbon.png');
} //end of preload
//beginning of arrays of trees
let pMenziessii = [];
let aRubra = [];
let tHeterophylla = [];
let aMacrophyllum = [];
let tPlicata = [];
let carbonFlux = [];

//numbers used by scroll bars

let params = {

  // trees
  DouglasFir: 1,
  DouglasFirMin: 0,
  DouglasFirMax: 20,

  RedAlder: 1,
  RedAlderrMin: 0,
  RedAlderMax: 20,

  WesternHemlock: 1,
  WesternHemlockMin: 0,
  WesternHemlockMax: 20,

  WesternRedCedar: 1,
  WesternRedCedarMin: 0,
  WesternRedCedarMax: 20,

  BigLeafMaple: 1,
  BigLeafMapleMin: 0,
  BigLeafMapleMax: 20,
};


// the gui object
let gui;

function setup() {
  createCanvas(800, 600);
  background(0);
  strokeWeight(3);
  gui = createGui('Number of Trees');
  gui.addObject(params);
  //tree creation no more than 20 trees
  for (let i = 0; i < 20; i++) {
    pMenziessii.push(new DougFir());
  }
  for (let i = 0; i < 20; i++) {
    aRubra.push(new RAlder());
  }
  for (let i = 0; i < 20; i++) {
    tHeterophylla.push(new WHemlock());
  }
  for (let i = 0; i < 20; i++) {
    let blmYPos = 370;
    let blmWidth = 200;
    let blmHeight = 200;
    let blmXPos = random(width-blmWidth);
    aMacrophyllum.push(new BLeafMaple(blmXPos, blmYPos,blmWidth,blmHeight));
  }
  for (let i = 0; i < 20; i++) {
    tPlicata.push(new WRedCedar());
  }



  for (let i = 0; i < 1000; i++) {
    carbonFlux.push(new CarbonInTheTrees());
  }

} //end of set-up
function draw() {
  image(backgroundImage, 0, 0, width, height);
  //showing the trees
  for (let i = 0; i < 20; i++) {
    if(i < params.DouglasFir) {pMenziessii[i].show()};
    if(i < params.RedAlder) {aRubra[i].show()};
    if(i < params.WesternHemlock) {tHeterophylla[i].show()};
    if(i < params.BigLeafMaple) {aMacrophyllum[i].show()};
    if(i < params.WesternRedCedar) {tPlicata[i].show()};
  }
  //pMenziessii.show(this.width, this,height);
//carbon change
textSize(12);
text("Total Carbon Absorbed",380,55);
if (carbonRichness()) {
  text(int(totalSpeciesCount*0.35),505,55); //part of the "total carbon absorbed counter"
  for (let i = 0; i < int((totalSpeciesCount)*0.35); i++) { //carbon development dependant on total tree count and 0.35 ratio of tree/carbon
    carbonFlux[i].move();
    carbonFlux[i].display();

  } }else {
    text(int(totalSpeciesCount/0.35),505,55);//part of the "total carbon absorbed counter"
    for (let i = 0; i < int((totalSpeciesCount)/0.35); i++) {
     carbonFlux[i].move();
      carbonFlux[i].display();
    }
  }
//Title and instructions
  textSize(30);
  text("Carbon + Diversity",340,25);
  textSize(12);
  text("Maximize your forest carbon!",375,40);


} //end of draw
//function for determining when carbon appears
function carbonRichness() {
//using percentages of tree stand to determine over story richness
//I used the total amount of trees as the variable to calculate because it stands to reason more trees=more carbon
   totalSpeciesCount = params.BigLeafMaple + params.DouglasFir + params.RedAlder + params.WesternHemlock + params.WesternRedCedar;
   perDougFir = params.DouglasFire / totalSpeciesCount;
   perRedAl = params.RedAlder / totalSpeciesCount;
   perBigLM = params.BigLeafMaple / totalSpeciesCount;
   perWeHem = params.WesternHemlock / totalSpeciesCount;
   perWeRCedar = params.WesterRedCedar / totalSpeciesCount;
//if all trees are 0.2 of the population of trees then they are equal, I chose to give it a plus or minus 10% range
  if (perDougFir >= 0.3 || perRedAl >= 0.3 || perBigLM >= 0.3 || perWeHem >= 0.3 || perWeRCedar >= 0.3 ||
    perDougFir <= 0.1 || perRedAl <= 0.1 || perBigLM <= 0.1 || perWeHem <= 0.1 || perWeRCedar <= 0.1) {
    return true
  } else { return false

  }
}
