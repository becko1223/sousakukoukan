class Exchangeletter < ApplicationRecord
    belongs_to :user
    belongs_to :genre
    has_one :reply

    has_many :genreexpectations
    has_many :genres, through: :genreexpectations, source: :genre

   

    has_one :exchangematch, foreign_key: :letter1_id, dependent: :destroy
    has_one :exchangedletter, through: :exchangematch, source: :letter2

    has_many_attached :media

end
