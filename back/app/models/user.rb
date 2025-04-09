class User < ApplicationRecord
    has_many :exchangeletters
    has_many :replies
    has_many :sendbuntsuletters, class_name: "Buntsuletter", foreign_key: :author_id
    has_many :comebuntsuletters, class_name: "Buntsuletter", foreign_key: :partner_id

    has_many :active_friendapplies, class_name: "Friendapply", foreign_key: :applyer_id, dependent: :destroy
    has_many :passive_friendapplies, class_name: "Friendapply", foreign_key: :applied_id, dependent: :destroy
    has_many :applyings, through: :active_friendapplies, source: :applied
    has_many :applyers, through: :passive_friendapplies, source: :applyer

    has_many :friendrelations, foreign_key: :user1_id, dependent: :destroy
    has_many :friends, through: :friendrelations, source: :user2

    has_one_attached :avatar



end
