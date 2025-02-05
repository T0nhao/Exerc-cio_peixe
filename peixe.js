var config =
    {
        type: Phaser.AUTO,
        width: 800,
        height: 600,

        scene:
        {
            preload:preload,
            create:create,
            update:update
        }
    };

var game= new Phaser.Game(config);
var peixão;
var tubas;


function preload(){
     this.load.image ('mar','assets/bg_azul-escuro.png');
     this.load.image ('logo','assets/logo-inteli_branco.png');
     this.load.image ('peix','assets/baiacu.png');
     this.load.image ('tubas','assets/tubarao.png');
     this.load.image ('concha','assets/concha.png');
  
                  }

function create(){
    this.add.image(400,300,'mar');
    this.add.image(400,555,'logo').setScale(0.5);
    this.add.image(680,480,'concha').setOrigin(0,0);
   

    peixão =this.add.image(400,300,'peix');
    peixão.setFlip(false,false);

    tubas =this.add.image(400,300,'tubas');
    tubas.setFlip(true,false);


                 }

function update(){
    peixão.x= this.input.x;
    peixão.y= this.input.y;

    tubas.x=this.input.y+200;
    tubas.y=this.input.x+200;

   
}



