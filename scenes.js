 // First make a class
class Loading extends Phaser.Scene{
    // Your class should have 4 methods in it 'constructor, preload, create, and update'
    constructor()// This method gives the scene a name. You would THINK its name is 'Loading' but it isn't without this method >:(
    {
        super('Loading');
    }
    preload()// This method loads things before the game starts
    {
        this.load.image("cloudLogo","assets/cloud.png");
        this.load.audio("intro", "assets/intro.mp3");
    }
    create()// This method is called once at the start of the game
    {
        let sfx = this.sound.add("intro", {loop: false});
        let bg = this.add.rectangle(0,0,9600,5400,0x090909);
        bg.alpha = 1;


        this.cloudLogo = this.add.sprite(510,620,"cloudLogo");
        this.cloudLogo.alpha = 1;

        let wordLogo = this.add.text(
            330,
            250,
            "Cloud Watching Studios",
            {
                font:"25px Helvetica",
                color:"#F3F3F3",

            }
        );
        wordLogo.alpha = 0;

        this.tweens.add({
            targets: bg,
            alpha: 0,
            delay: 3000,
            duration: 3000,                    
        });

        this.tweens.add({
            targets: this.cloudLogo,
            y: -210,
            delay: 6000,
            duration: 3000,
        });

        this.tweens.add({
            targets: wordLogo,
            alpha: 1,
            delay: 7500,
            duration: 1,
        });

        this.tweens.add({
            targets: wordLogo,
            alpha: 0,
            delay: 10000,
            duration: 2000,
        });
        this.time.delayedCall(1, () => {sfx.play()});
        this.time.delayedCall(12500, () => {this.scene.start('Scene1')});
        this.input.on('pointerdown', () => {this.scene.start('Scene1')});
    }
    update(){}// This method is called constantly
}

class Scene1 extends Phaser.Scene{
    constructor(){
        super('Scene1');
    }
    preload()
    {
        this.load.image("sky","assets/cloudsfar.png");
        this.load.image("grass","assets/grass.png");
        this.load.audio("music", "assets/bg.mp3");
    }
    create()
    {
        let BGM = this.sound.add("music", {loop: true});
        this.sky = this.add.sprite(500,0,"sky");
        this.sky.width = 960;
        this.sky.height = 540;
        this.sky.alpha = 0;

        let phrase = this.add.text(
            400,
            150,
            "Watch Clouds in serene locals",
            {
                font:"25px Helvetica",
                color:"#F3F3F3",

            }
        );     
        phrase.setWordWrapWidth(200); 
        phrase.alpha = 0;  

        let cloud = this.add.ellipse(-150, 150,300,200,0xF3F3F3);
        //let cloud = this.add.ellipse(1110, 150,300,200,0xF3F3F3);
        cloud.alpha = 1;

        //this.grass = this.add.sprite(480,300,"grass");
        this.grass = this.add.sprite(480,615,"grass");
        this.grass.width = 960;
        this.grass.height = 100;
        this.grass.setDisplaySize(960,500);

        this.tweens.add({
            targets: this.sky,
            alpha: 1,
            duration: 2000,
        });

        this.tweens.add({
            targets: this.grass,
            y: 300,
            delay: 2000,
            duration: 2000,
        });

        this.tweens.add({
            targets: cloud,
            x: 1110,
            delay: 4000,
            duration: 5000,
        });

        this.tweens.add({
            targets: phrase,
            alpha: 1,
            delay: 6500,
            duration: 1,
        });
        this.tweens.add({
            targets: phrase,
            y: -100,
            delay: 10500,
            duration: 2000,
        });

        this.tweens.add({
            targets: this.grass,
            y: 615,
            delay: 12500,
            duration: 2000,
        });

        this.tweens.add({
            targets: this.sky,
            alpha: 0,
            delay: 14500,
            duration: 2000,
        });
        this.time.delayedCall(200, () => {BGM.play()});
        this.time.delayedCall(16500, () => {this.scene.start('Scene2')});
        this.input.on('pointerdown', () => {this.scene.start('Scene2')});
    }
}

class Scene2 extends Phaser.Scene{
    constructor(){
        super('Scene2');
    }
    preload(){
        this.load.image("sky2","assets/sky2.png");
        this.load.image("grass2","assets/ground 2.png");
        this.load.image("cloud2","assets/clouds2.png");
    }
    create(){
        this.sky2 = this.add.sprite(0,0,"sky2");
        this.sky2.setScale(1.8);
        this.sky2.alpha = 0;

        //this.grass2 = this.add.sprite(100,100,"grass2");
        this.grass2 = this.add.sprite(100,330,"grass2");

        let phrase2 = this.add.text(
            300,
            150,
            "Paint clouds as they pass you by",
            {
                font:"25px Helvetica",
                color:"#F3F3F3",

            }
        );  
        phrase2.alpha = 0;

        //this.cloud2 = this.add.sprite(-400,200,"cloud2");
        this.cloud2 = this.add.sprite(1300,200,"cloud2");
        this.cloud2.setScale(0.6);
        this.cloud2.angle = 5;

        this.tweens.add({
            targets: this.sky2,
            alpha: 1,
            duration: 2000,
        });

        this.tweens.add({
            targets: this.grass2,
            y: 100,
            delay: 2000,
            duration: 2000,
        });

        this.tweens.add({
            targets: this.cloud2,
            x: -400,
            delay: 4000,
            duration: 5000,
        });

        this.tweens.add({
            targets: phrase2,
            alpha: 1,
            delay: 6500,
            duration: 1,
        });
        this.tweens.add({
            targets: phrase2,
            y: -50,
            delay: 8500,
            duration: 2000,
        });

        this.tweens.add({
            targets: this.grass2,
            y: 330,
            delay: 10500,
            duration: 2000,
        });

        this.tweens.add({
            targets: this.sky2,
            alpha: 0,
            delay: 12500,
            duration: 2000,
        });
        this.time.delayedCall(16500, () => {this.scene.start('Scene3')});
        this.input.on('pointerdown', () => {this.scene.start('Scene3')});
        
    }
}

class Scene3 extends Phaser.Scene{
    constructor(){
        super('Scene3');
    }
    preload(){
        this.load.image("sky3","assets/sky3.png");
        this.load.image("grass3","assets/ground3.png");
    }
    create(){
        this.sky3 = this.add.sprite(0,500,"sky3");
        this.sky3.alpha = 0;

        let phrase3 = this.add.text(
            300,
            50,
            "Listen to serene music and relax",
            {
                font:"25px Helvetica",
                color:"#F3F3F3",

            }
        ); 
        phrase3.alpha = 0;

        let cloud3 = this.add.ellipse(400, 100,600,200,0xF3F3F3);
        cloud3.alpha = 0;

        this.grass3 = this.add.sprite(100,730,"grass3");
        this.grass3.setDisplaySize(1800,600);

        //this.tweens.add({});

        this.tweens.add({
            targets: this.sky3,
            alpha: 1,
            duration: 2000,
        });

        this.tweens.add({
            targets: this.grass3,
            y: 400,
            delay: 2000,
            duration: 2000,
        });

        this.tweens.add({
            targets: phrase3,
            alpha: 1,
            delay: 4000,
            duration: 2000            
        });

        this.tweens.add({
            targets: cloud3,
            alpha: 1,
            delay: 7000,
            duration: 3000
        });

        this.tweens.add({
            targets: phrase3,
            alpha: 0,
            delay: 10000,
            duration: 1
        });

        this.tweens.add({
            targets: cloud3,
            alpha: 0,
            delay: 11000,
            duration: 3000
        });

        this.time.delayedCall(14000, () => {
            this.cameras.main.fadeOut(2000, 0, 0, 0);
        });

        this.time.delayedCall(16000, () => {this.scene.start('End')});
        this.input.on('pointerdown', () => {this.scene.start('End')});
    }
}

class End extends Phaser.Scene{
    constructor(){
        super("End");
    }
    preload(){
        this.load.image("sky4","assets/stars.png");
        this.load.image("title","assets/title.png");
    }
    create(){
        this.cameras.main.fadeIn(2000, 0, 0, 0);
        this.sky4 = this.add.sprite(0,0,"sky4");
        this.title = this.add.sprite(470,-200,"title");
        this.title.setScale(0.4);

        let phrase4 = this.add.text(
            10,
            370,
            "Play Options Quit",
            {
                font:"50px Helvetica",
                color:"#F3F3F3",

            }
        );     
        phrase4.setWordWrapWidth(100); 
        phrase4.alpha = 0;

        this.tweens.add({
            targets: this.title,
            y: 150,
            delay: 2000,
            duration: 2000,
        });

        this.tweens.add({
            targets: phrase4,
            alpha: 1,
            delay: 4000,
            duration: 2000,
        });
    }

}
const config = {
    type: Phaser.AUTO,
    width: 960,
    height: 540,
    backgroundColor: '#4a90e2',
    scene: [Loading, Scene1, Scene2, Scene3, End]
};

// Once we create our class, we create a new phaser game (aka the physical game window on the website)
let game = new Phaser.Game(config);