class CreateFriendrelations < ActiveRecord::Migration[8.0]
  def change
    create_table :friendrelations do |t|
      t.integer :user1_id
      t.integer :user2_id

      t.timestamps
    end
  end
end
