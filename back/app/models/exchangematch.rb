class Exchangematch < ApplicationRecord
    belongs_to :letter1, class_name: "Exchangeletter"
    belongs_to :letter2, class_name: "Exchangeletter"
end
