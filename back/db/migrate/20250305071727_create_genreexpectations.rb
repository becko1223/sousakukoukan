class CreateGenreexpectations < ActiveRecord::Migration[8.0]
  def change
    create_table :genreexpectations do |t|
      t.integer :genre_id
      t.integer :exchangeletter_id

      t.timestamps
    end
  end
end
