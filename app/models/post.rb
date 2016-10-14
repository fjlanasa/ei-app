class Post < ActiveRecord::Base
  validates :text, presence: {message: 'of post can\'t be blank'}
  validates :user_id, presence: {message: 'must be signed-in to post'}
  validates :level_two_word_id, presence: true

  belongs_to :level_two_word
  belongs_to :user
end
