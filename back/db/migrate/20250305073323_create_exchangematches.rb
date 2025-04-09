class CreateExchangematches < ActiveRecord::Migration[8.0]
  def change
    create_table :exchangematches do |t|
      t.integer :letter1_id
      t.integer :letter2_id

      t.timestamps
    end
  end
end
