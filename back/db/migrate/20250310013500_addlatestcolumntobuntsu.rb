class Addlatestcolumntobuntsu < ActiveRecord::Migration[8.0]
  def change
    add_column :buntsuletters, :islatest, :boolean, default: true
  end
end
