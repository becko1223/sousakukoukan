class AddLetterRefToReplies < ActiveRecord::Migration[8.0]
  def change
    def change
      add_reference :replies, :toletter, foreign_key: { to_table: :exchngeletters }
    end
  end
end
