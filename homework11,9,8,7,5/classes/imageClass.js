class imageClass {

    // constructor
    constructor(x, y, w, h) {
        // this.myFileName = myFileName;
        //this.characterImage = loadImage(this.myFileName);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.createAnimation();
        this.direction = "";
        this.hasCollided = false;

    }
    getX() {
        return this.x;
    }
    setX() {
        this.x = x;
    }
    setCurrentFrameCount(currentFrameCount) {
        this.currentFrameCount = currentFrameCount;
    }
    createAnimation() {
        this.currentAnimation = new Sprite(this.x, this.y);
        this.currentAnimation.rotation = 0;
    }
    myLoadAnimation(animationType, fileNames) {
        this.currentAnimation.addAnimation(animationType, fileNames[0], fileNames[fileNames.length - 1]);
        // set the hit box
        this.currentAnimation.width = 200;
        this.currentAnimation.height = 150;
    }

    // properties

    // functions
    /* updateX(x) {
         this.x = x;
     }*/

    draw(animationType) {
            //rect(this.x + 75, this.y, this.w / 4, this.h / 2);
            //image(this.characterImage, this.x, this.y);
            /* this.characterImage.resize(this.w / 2, this.h / 2);
             if (this.flipX) {
                 // The push and pop functions save and reset the previous transformation.
                 push();
                 // Scale -1, 1 means reverse the x axis, keep y the same.
                 scale(-1, 1);
                 // Because the x-axis is reversed, we need to draw at different x position.
                 image(this.characterImage, -this.x - this.w / 2, this.y);
                 pop();} else {image(this.characterImage, this.x, this.y); }*/
            this.currentAnimation.scale = .5;
            this.currentAnimation.changeAnimation(animationType);
            this.currentAnimation.rotation = 0;

            /* if (this.hasCollided) {
                 this.currentAnimation.speed = 0;
                 this.currentAnimation.velocity.x = 0;
                 this.currentAnimation.velocity.y = 0;
             } else {
                 
             }*/
            this.currentAnimation.speed = 2;

            if (animationType == 'walk' && this.direction == 'forward') {
                this.currentAnimation.direction = 0;
                this.currentAnimation.mirror.x = false;
            } else if (animationType == 'walk' && this.direction == 'reverse') {
                this.currentAnimation.mirror.x = true;
                this.currentAnimation.direction = 180;
            } else if (animationType == 'walk' && this.direction == 'up') {
                this.currentAnimation.direction = 270;
            } else if (animationType == 'walk' && this.direction == 'down') {
                this.currentAnimation.direction = 90;
            } else {
                this.currentAnimation.velocity.x = 0;
                this.currentAnimation.velocity.y = 0;
            }

        }
        /* checkCollision(x2, y2, w2, h2) {

             if (
                 this.x < x2 + w2 / 2 &&
                 this.x + 75 + w2 / 2 > x2 - this.w / 4 &&
                 this.y + 200 - h2 / 2 < y2 + this.h / 2 &&
                 this.y + 50 + h2 / 2 > y2 - this.h / 2

             ) {
                 return true;
             } else {
                 return false;
             }
         }*/
    updatePosition(direction) {
        this.direction = direction;
    }

    isColliding(myImage) {
        this.hasCollided = this.currentAnimation.collide(myImage);
        return this.hasCollided;
    }
}