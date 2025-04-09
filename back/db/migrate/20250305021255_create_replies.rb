class CreateReplies < ActiveRecord::Migration[8.0]
  def change
    create_table :replies do |t|
      t.text :text
      t.integer :user_id
      t.integer :toletter_id

      t.timestamps
    end
    add_foreign_key :replies, :exchngeletters, column: :toletter_id
  end
end
