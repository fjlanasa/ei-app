class Post < ActiveRecord::Base
  validates :text, presence: true
  validates :user_id, presence: true
  validates :level_two_word_id, presence: true

  belongs_to :level_two_word
  belongs_to :user
end
