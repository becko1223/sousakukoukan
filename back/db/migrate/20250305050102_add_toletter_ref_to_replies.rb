class AddToletterRefToReplies < ActiveRecord::Migration[8.0]
  def change
    add_foreign_key :replies, :exchngeletters, column: :toletter_id
  end
end
