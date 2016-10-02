class LevelOneWord < ActiveRecord::Base
  validates :name, presence: true

  has_many :level_two_words

end
