class AddletterRefToLetter < ActiveRecord::Migration[8.0]
  def change
    rename_table :exchngeletters, :exchanegletters
    
  end
end
