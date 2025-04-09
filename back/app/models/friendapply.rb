class Friendapply < ApplicationRecord 
    belongs_to :applyer, class_name: "User"
    belongs_to :applied, class_name: "User"
end
