require 'open-uri'
require 'json'

class Api::LevelTwoWordsController < ApiController
  def index
    name = params[:name]
    url2 = "https://wordsapiv1.p.mashape.com/words/#{name}"
    str2 = ''
    open(url2,"X-Mashape-Key" => "tWoEhzcNoImshNr61g8SmApOU9LBp1Llbr2jsn2vvnaJD0KZrj") {|f| f.each_line {|line| str2 += line}}
    data2 = JSON.parse(str2)
    definition = data2['results'][0]['definition']
    url3 = "http://api.giphy.com/v1/gifs/search?q=#{name}&api_key=dc6zaTOxFJmzC"
    url3 = URI.parse(url3)
    str3 = url3.read
    data3 = JSON.parse(str3)
    gif_url = data3['data'][rand(data3['data'].length)]['images']['fixed_height']['url']
    render json: { definition: definition, gif_url: gif_url }
  end
end
