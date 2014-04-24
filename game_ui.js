(function(root) {
  var SetGame = root.SetGame = (root.SetGame || {})

  GameUI = SetGame.GameUI = function() {
  	this.game = new SetGame.Game()
  	this.startGame();
  }

  GameUI.prototype.startGame = function() {
  	this.game.startGame();
  	this.game.tableCards.forEach(function(card) {
  		var imageURL = "https://s3-us-west-1.amazonaws.com/setcardgame/card_images/" + card + ".png"
  		var imageTag = "<img src=" + imageURL + ">"
  		$('.gameboard').append(imageTag);
  	});
  }

  SetGame.buildBoard = function() {
  }

  SetGame.chooseCard = function(card) {

  }
})(this)