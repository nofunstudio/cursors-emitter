
import { Cursors } from "./../cursors";
import { isTouchDevices } from "./../utils";
export class Cursor2 extends Cursors{

  constructor(index) {
    super(index);
    this.speed = !isTouchDevices ? .2 : 1;
    this.delta = !isTouchDevices ? 0.04 : 0.04;
    this.cursor = true;
    this.tinyCursor = false;
    this.init();
    this.loop();
  }

  setParamsParticles() {
    this.nbrParticles =  !isTouchDevices ? 800 : 300;
    this.radiusStart = this.diagonalWindow()/8;
    this.radiusDiff = -.2;
    this.sorting = "desc";
    
    
    
    };
  }

  
