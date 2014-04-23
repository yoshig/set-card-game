(function(root) {
	var SetGame = root.SetGame = (root.SetGame || {});

	var deck = SetGame.deck = function(options) {
		// this.difficulty = options.difficulty
		this.buildDeck(this.difficulty)
	};

	deck.prototype.buildDeck = function(difficulty) {
		var n = difficulty == "easy" ? 3 : 4
		this.deck = [];
		
		for (var i = 0; i < 3; i++) {
			for (var j = 0; j < 3; j++) {
				for (var k = 0; k < 3; k++) {
					for (var l = 0; l < 3; l++){
						var combo = i.toString()
						            + j.toString()
						            + k.toString()
						            + l.toString();
						this.deck.push(combo)
					}
				}
			}
		}
		return shuffle(this.deck);
	}

	// From http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
	deck.prototype.shuffle = function(array) {
	  var currentIndex = array.length
	    , temporaryValue
	    , randomIndex
	    ;

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }

	  return array;
	}

})(this)
