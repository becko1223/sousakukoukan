class CreateUsers < ActiveRecord::Migration[8.0]
  def change
    create_table :users do |t|
      t.string :uid
      t.string :name
      t.string :nickname
      t.string :email
      t.text :profile
      t.integer :status

      t.timestamps
    end
  end
end
