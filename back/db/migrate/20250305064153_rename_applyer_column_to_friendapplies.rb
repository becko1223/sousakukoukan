class RenameApplyerColumnToFriendapplies < ActiveRecord::Migration[8.0]
  def change
    rename_column :friendapplies, :applyer, :applyer_id
    rename_column :friendapplies, :applied, :applied_id
  end
end
