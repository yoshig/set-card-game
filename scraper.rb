require 'open-uri'

3.times do |color|
  3.times do |shape|
    3.times do |num|
      3.times do |shade|
        card = (color * 27) + (shape * 9) + (num * 3) + shade + 1
        saver = "#{color}#{shape}#{num}#{shade}.png"
        site = "http://www.puzzles.setgame.com/images/setcards/#{card}.gif"
        open(saver, 'wb') do |file|
          file << open(site).read
        end
      end
    end
  end
end