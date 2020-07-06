import { Scene } from "phaser";

export class TitleScene extends Scene {
  constructor() {
    super({
      key: "TitleScene",
    });
  }

  preload() {}

  create() {
    this.add.text(16, 16, "Hello World", { fontSize: "32px", fill: "#fff" });
  }

  update() {}
}
