(function(root) {
  var SetGame = root.SetGame = (root.SetGame || {})

  GameUI = SetGame.GameUI = function() {
  	this.game = new SetGame.Game()
  	this.buildBoard();
  	this.clicks = 0;
  	this.clickCards();
  }

  GameUI.prototype.buildBoard = function() {
  	this.game.startGame();
  	var split = 0;
  	this.game.tableCards.forEach(function(card) {
  		if (split % 4 == 0) {
  			$('.gameboard').append('<br>');	
  		}
  		var imageURL = "https://s3-us-west-1.amazonaws.com/setcardgame/card_images/" + card + ".png"
  		var imageTag = "<img class='card' src=" + imageURL + ">"
  		$('.gameboard').append(imageTag);
  		split++;
  	});
  }

  GameUI.prototype.clickCards = function() {
  	var ui = this;

  	$('.card').on('click', function(event) {
  		if ($(event.target).attr('class') === "card") {
  			ui.clicks++
  		} else {
  			ui.clicks--
  		}
  		console.log(ui.clicks)
  		$(this).toggleClass('clicked');
  	})
  }

})(this)