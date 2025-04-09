class AddGenreidToExchangeletters < ActiveRecord::Migration[8.0]
  def change
    add_reference :exchngeletters, :genre, foreign_key: true
  end
end
