(function(root) {
	Array.prototype.unique = function() {
	    var o = {}, i, l = this.length, r = [];
	    for(i=0; i<l;i+=1) o[this[i]] = this[i];
	    for(i in o) r.push(o[i]);
	    return r;
	};


	var SetGame = root.SetGame = (root.SetGame || {});

	var Game = SetGame.Game = function() {
    this.deck = new SetGame.deck("hard");
		this.score = 0;
	}

	Game.prototype.startGame = function() {
    this.tableCards = this.deck.cards.slice(this.deck.cards.length - 12);
    this.fringeCards = [];
	}

	Game.prototype.validSet = function(a, b, c) {
		var valid = true;
		// Will need to change 4 for easy difficulty
		for (var i = 0; i < 4; i++) {
			var feature = [a[i], b[i], c[i]].unique().length
			if (feature == 2) {
				valid = false;
			}
		}
		return valid;
	};

	Game.prototype.anySets = function() {
    if (this.fringeCards.length > 0) {
      return true;
    }
    
		for (var i = 0; i < this.tableCards.length; i++) {
			for (var j = i + 1; j < this.tableCards.length; j++) {
				for (var k = j + 1; k < this.tableCards.length; k++) {
          var card1 = this.tableCards[i]
          var card2 = this.tableCards[j]
          var card3 = this.tableCards[k]
					if (this.validSet(card1, card2, card3)) {
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
  
  Game.prototype.addToTable = function(source) {
    for (var i = 0; i < 3; i++) {
      var card = source.pop();
      if (card) {
        var space = this.tableCards.indexOf(nil);
        this.tableCards[space] = card;
      }
    }
  }
  
  Game.prototype.removeFromTable = function(a, b, c) {
    [a, b, c].forEach(function(card) {
      var location = this.tableCards.indexOf(card);
      if (location > -1) {
        this.tableCards[location] = undefined;
      } else {
        location = this.fringeCards.indexOf(card);
        this.fringeCards[location] = undefined;
      }      
    });
  }

})(this)