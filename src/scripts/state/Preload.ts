module PhaserUIDemo.State {
  export class Preload extends Phaser.State {
    private preloadBar:Phaser.Sprite;

    preload() {
      this.preloadBar = this.add.sprite(290, 290, 'preload-bar');
      this.load.setPreloadSprite(this.preloadBar);

      this.load.atlasJSONHash('panel', 'assets/icons/panel.png', 'assets/icons/panel.json');
      this.load.image('health', 'assets/icons/health.png');
      this.load.image('health-increase', 'assets/icons/health-increase.png');
      this.load.image('piston', 'assets/icons/pistol.png');
    }

    create() {
      this.game.state.start('main');
    }
  }
}
