class LevelTwoWord < ActiveRecord::Base
  validates :name, presence: true
  validates :level_one_word_id, presence: true

  belongs_to :level_one_word

end
