ig.module('game.main')
.requires(
    'impact.game',
    'game.levels.example'
)
.defines(function(){

    MyGame = ig.Game.extend({
        animSheet: new ig.AnimationSheet('media/tilesheet.png', 16, 16),
        init: function() {
            this.backgroundAnims['media/tilesheet.png'] = {
                2: new ig.Animation(this.animSheet, 0.3, [0, 1, 2, 3])
            };
            this.loadLevel(LevelExample);
        }
    });

    ig.main( '#canvas', MyGame, 60, 128, 128, 2 );
});
