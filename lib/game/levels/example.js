ig.module( 'game.levels.example' )
.requires( 'impact.image' )
.defines(function(){
LevelExample=/*JSON[*/{
	"entities": [],
	"layer": [
		{
			"name": "main",
			"width": 8,
			"height": 8,
			"linkWithCollision": false,
			"visible": true,
			"tilesetName": "media/tilesheet.png",
			"repeat": false,
			"preRender": false,
			"distance": "1",
			"tilesize": 16,
			"foreground": false,
			"data": [
				[3,3,3,3,3,3,3,3],
				[3,0,0,3,3,0,0,3],
				[3,0,0,3,3,0,0,3],
				[3,3,3,0,0,3,3,3],
				[3,3,0,0,0,0,3,3],
				[3,3,0,0,0,0,3,3],
				[3,3,0,3,3,0,3,3],
				[3,3,3,3,3,3,3,3]
			]
		}
	]
}/*]JSON*/;
LevelExampleResources=[new ig.Image('media/tilesheet.png')];
});