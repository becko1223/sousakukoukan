class CreateFriendapplies < ActiveRecord::Migration[8.0]
  def change
    create_table :friendapplies do |t|
      t.integer :applyer
      t.integer :applied

      t.timestamps
    end
  end
end
