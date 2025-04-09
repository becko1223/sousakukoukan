class Reply < ApplicationRecord
    belongs_to :user
    belongs_to :exchangeletter, foreign_key: :toletter_id
end
