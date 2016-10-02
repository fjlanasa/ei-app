class DropDefinitionsFromLevelTwoWords < ActiveRecord::Migration[5.0]
  def change
    remove_column :level_two_words, :definition
  end
end
