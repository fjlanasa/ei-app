class CreateWords < ActiveRecord::Migration[5.0]
  def change
    create_table :level_one_words do |t|
      t.string :name, null: false
      t.text :definition, null: false
    end
  end
end
