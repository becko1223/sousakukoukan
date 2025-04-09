class AddELetterRefToLetter < ActiveRecord::Migration[8.0]
  def change
    add_reference :exchangeletters, :exchange, foreign_key: {to_table: :exchangeletters}
  end
end
