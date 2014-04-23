(function(root) {
	Array.prototype.unique = function() {
	    var o = {}, i, l = this.length, r = [];
	    for(i=0; i<l;i+=1) o[this[i]] = this[i];
	    for(i in o) r.push(o[i]);
	    return r;
	};


	var SetGame = root.SetGame = (root.SetGame || {});

	var Game = SetGame.game = function() {
		this.deck = SetGame.deck.buildDeck();
		this.score = 0;
		this.startGame();
	}

	Game.prototype.startGame = function() {
		this.tableCards = this.deck.slice(this.deck.length - 12);
	}

	Game.prototype.validSet = function(a, b, c) {
		var valid = true;
		// Will need to change 4 for easy difficulty
		for (var i = 0; i < 4; i++) {
			var feature = [a[i], b[i], c[i]].unique.length
			if (feature == 2) {
				valid = false;
			}
		}
		return valid;
	};

	Game.prototype.anySets = function() {
		for (var i = 0; i < tableCards.length; i++) {
			for (var j = i + 1; j < tableCards.length; j++) {
				for (var k = j + 1; k < tableCards.length; k++) {
					if (this.validSet(i, j, k)) {
						return true;
					}
				}
			}
		}

		return false;
	}

	Game.prototype.gameOver = function() {
		return this.deck.length == 0 && this.anySets();
	}

})(this)