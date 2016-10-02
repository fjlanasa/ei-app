class CreateLevelTwoWords < ActiveRecord::Migration[5.0]
  def change
    create_table :level_two_words do |t|
      t.string :name, null: false
      t.text :definition, null: false
      t.integer :level_one_word_id, null: false
    end
  end
end
