class Buntsuletter < ApplicationRecord
    belongs_to :author, class_name: "User",  foreign_key: :author_id
    belongs_to :partner, class_name: "User", foreign_key: :partner_id
    belongs_to :previousletter, class_name: "Buntsuletter", foreign_key: :previousletter_id, optional: true
    has_one :nextletter, class_name: "Buntsuletter", foreign_key: :previousletter_id

    has_many_attached :media
end
