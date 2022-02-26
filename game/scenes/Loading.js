class Loading extends Phaser.Scene {
  constructor() {
    super("loading-scene");
  }

  preload() {
    this.load.spritesheet(
      "player",
      "/game/assets/sprites/characters/player.png",
      {
        frameWidth: 24,
        frameHeight: 24,
      }
    );
  }

  create() {
    this.scene.start("game-scene");
  }
}

export default Loading;
