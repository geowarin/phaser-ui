/// <reference path="definitions/phaser.d.ts"/>
/// <reference path="definitions/lodash.d.ts"/>

module PhaserUIDemo {
  export class Game extends Phaser.Game {
    constructor() {
      super(800, 600, Phaser.CANVAS, 'jsr-revolution-game');

      this.state.add('boot', State.Boot);
      this.state.add('preload', State.Preload);
      this.state.add('main', State.Main);

      this.state.start('boot');
    }
  }
}
