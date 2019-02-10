import { SVG_NS } from "../settings";

export default class Paddle {
    constructor(boardHeight, width, height, x, y, up, down, keydown) {
      this.boardHeight = boardHeight;
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.speed = 10;
      this.score = 0;
        document.addEventListener("keydown", event => {
            switch (event.key) {
                case up:
                  this.up();
                   // console.log("up");
                  // this.y = this.y - this.speed;
                  break;
                case down:
                  this.down();
                   // console.log("down");
                  // this.y = this.y + this.speed;
                  break;
              }
        });
    }
    up(){
      this.y = Math.max((this.y - this.speed), 0);
    }
    down(){
      this.y = Math.min(this.y + this.speed, this.boardHeight - this.height);
    }
    coordinates(x, y, width, height) {
      let leftX = x;
      let rightX = x + width;
      let topY = y;
      let bottomY = y + height;
      return [leftX, rightX, topY, bottomY];
    }
    render(svg){
       let rect = document.createElementNS(SVG_NS, 'rect');
       rect.setAttributeNS(null, "width", this.width);
       rect.setAttributeNS(null, "height", this.height);
       rect.setAttributeNS(null, "fill", "white");
       rect.setAttributeNS(null, "x", this.x);
       rect.setAttributeNS(null, "y", this.y);
       svg.appendChild(rect);
    }
  }