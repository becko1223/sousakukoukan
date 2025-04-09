class CreateExchngeletters < ActiveRecord::Migration[8.0]
  def change
    create_table :exchngeletters do |t|
      t.text :description
      t.integer :user_id, null: false
      t.boolean :isexchanged, null: false, default: false

      t.timestamps
    end
  end
end
