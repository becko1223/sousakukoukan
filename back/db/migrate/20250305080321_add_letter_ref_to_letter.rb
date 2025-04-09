class AddLetterRefToLetter < ActiveRecord::Migration[8.0]
  def change
    rename_table :exchanegletters, :exchangeletters
    
  end
end
