class GameScene extends Phaser.Scene {
  constructor() {
    super("game-scene");

    this.gameWidth = null;
    this.gameWidth = null;
    this.player = null;
  }

  preload() {
    this.gameWidth = this.sys.game.canvas.width;
    this.gameHeight = this.sys.game.canvas.height;
  }

  create() {
    this.player = this.add.sprite(
      this.gameWidth / 2,
      this.gameHeight / 2,
      "player",
      0
    );
    this.player.scale = 5;
  }
}

export default GameScene;
