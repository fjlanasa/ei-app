class DropDefinitionsFromLevelOneWords < ActiveRecord::Migration[5.0]
  def change
    remove_column :level_one_words, :definition
  end
end
