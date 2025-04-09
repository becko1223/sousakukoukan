class AddUsersRefToBuntsu < ActiveRecord::Migration[8.0]
  def change
    add_foreign_key :buntsuletters, :users, column: :author_id
    add_foreign_key :buntsuletters, :users, column: :partner_id
  end
end
