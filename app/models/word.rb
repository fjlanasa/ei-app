class Word < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true
end
