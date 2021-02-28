class BLeafMaple {
  constructor(blmXPos,blmYPos,blmWidth,blmHeight) {
    //they got that "big leaf" energy
    //big leaf maples excrete a "poison"  that makes it so other plants (grass,
    //ground cover) doesn't grow around it's root structure. It's a tree that basicall says
    // "can't touch this" ...dah dah dah dah HAMMER TIME!
    // I know I don't really need these variables anymore (since I could not make the trees grow by the deadline) but the reference is kind of fun
    this.xPos = blmXPos;
    this.yPos = blmYPos;
    this.width = blmWidth;
    this.height = blmHeight;
  };
  show() {
    image(bigLeafMaple, this.xPos, this.yPos, this.width, this.height);
  };

} //end big leaf maple class
