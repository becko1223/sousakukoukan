class Genre < ApplicationRecord
    has_many :exchangeletters

    has_many :genreexpectations
    has_many :genreletters, through: :genreexpectations, source: :exchangeletter
end
