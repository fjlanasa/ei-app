class CreateAllWords < ActiveRecord::Migration[5.0]
  def change
    create_table :words do |t|
      t.string :name, null: false
    end
  end
end
