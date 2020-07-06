import { Game, WEBGL } from "phaser";
import { TitleScene } from "./scenes/";

const config: Phaser.Types.Core.GameConfig = {
  width: 640,
  height: 960,
  type: WEBGL,
  scene: [TitleScene],
  scale: {
    mode: Phaser.Scale.RESIZE,
    width: 640,
    height: 960,
    min: {
      width: 320,
      height: 480,
    },
    max: {
      width: 1400,
      height: 1200,
    },
  },
};

const game = new Game(config);
