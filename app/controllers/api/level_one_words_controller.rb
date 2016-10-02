class Api::LevelOneWordsController < ApiController
  def index
    level_one_words = LevelOneWord.all
    render json: { words: level_one_words}, status: :ok
  end

  def show
    # binding.pry
    level_one_word = LevelOneWord.find(params[:id])
    level_two_words = level_one_word.level_two_words
    render json: { word: level_one_word , level_two_words: level_two_words}, status: :ok
  end
end
