class WRedCedar{
constructor(){
//CEDAR LOWER TRUNK CLT
  this.CLTx = 55;
  this.CLTy = 55;
  this.CLTlocy = 515;
//CEDAR LEFT LOWER LEAVES CLLL
  this.CLLLx = 75;
  this.CLLLy = 75;
  this.CLLLlocy = 490;

// CEDAR RIGHT LOWER LEAVE CRLL
  this.CRLLx = 75;
  this.CRLLy = 75;
  this.CRLLlocy = 480;

  //this.CUTx = 100
//  this.CUTy = 170
  //this.CUTlocx = random(0,600);
//  this.CUTlocy = 400

//Cedar Middle Leaves
  this.CMLx = 80;
  this.CMLy = 80;
  this.CMLlocy = 450;
//cedar top leave CTL
  this.CTLx = 60;
  this.CTLy = 70;
  this.CTLlocy = 420;

  this.xloc = random(width);
};
show(){

image(cedarLowerTrunk,this.xloc, this.CLTlocy, this.CLTx, this.CLTy);
image(cedarLeftLowerLeaves, this.xloc-25, this.CLLLlocy, this.CLLLx, this.CLLLy);
image(cedarRightLowerLeaves,this.xloc+25, this.CRLLlocy, this.CRLLx, this.CRLLy);
//image(cedarUpperTrunk,357,340,120,130);
image(cedarMiddleLeaves, this.xloc, this.CMLlocy, this.CMLx, this.CMLy);
image(cedarTopLeaves,this.xloc, this.CTLlocy, this.CTLx, this.CTLy);
};
}//end western red cedar class
