class RemoveOwnerletteridFromGenres < ActiveRecord::Migration[8.0]
  def change
    remove_column :genres, :ownerletter_id, :integer
  end
end
