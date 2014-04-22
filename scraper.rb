require 'open-uri'

82.times do |card|
  next if card == 0
  saver = "image#{card}.png"
  site = "http://www.puzzles.setgame.com/images/setcards/#{card}.gif"
  open(saver, 'wb') do |file|
    file << open(site).read
  end
end

http://www.puzzles.setgame.com/images/setcards/2.gif