class CreateBuntsuletters < ActiveRecord::Migration[8.0]
  def change
    create_table :buntsuletters do |t|
      t.integer :author_id, null: false
      t.integer :partner_id, null: false
      t.text :text
      t.integer :previousletter_id

      t.timestamps
    end
    add_foreign_key :buntsuletters, :buntsuletters, column: :previousletter_id
  end
end
