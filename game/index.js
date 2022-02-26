import Loading from "./scenes/Loading.js";
import GameScene from "./scenes/GameScene.js";

function initializeGame(canvasId) {
  const changeGameSize = (gameObject) => {
    if (gameObject.isBooted) {
      setTimeout(() => {
        gameObject.scale.resize(window.innerWidth, window.innerHeight);
      }, 100);
    }
  };

  const game = new Phaser.Game({
    type: Phaser.CANVAS, // using CANVAS instead of AUTO because there is this weird error for customEnvironment from phaser
    canvas: document.getElementById(canvasId),
    backgroundColor: "#f4f4f6",
    scene: [Loading, GameScene],
    scale: {
      mode: Phaser.Scale.NONE,
      width: window.innerWidth,
      height: window.innerHeight,
    },
    callbacks: {
      postBoot: (gameObject) => {
        changeGameSize(gameObject);
      },
    },
  });

  const resizeListener = () => changeGameSize(game);
  window.addEventListener("resize", resizeListener);

  return {
    game,
    destroyGame: () => {
      game.destroy(true, false);
      window.removeEventListener("resize", resizeListener);
    },
  };
}

const game = initializeGame("game-canvas");
