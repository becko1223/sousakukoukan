Rails.application.routes.draw do
  post "buntsuletters/create", to: 'buntsuletters#create'
  get "buntsuletters/show/:id", to: 'buntsuletters#show'
  get "buntsuletters/list/:id", to: 'buntsuletters#list'
  get "buntsuletters/fromprofile/:my_id/:friend_id", to: 'buntsuletters#fromprofile'

  post "replies/create", to: 'replies#create'
  get "replies/show/:id", to: 'replies#show'

  post "exchangeletters/create", to: 'exchangeletters#create'
  get "exchangeletters/show/:id", to: 'exchangeletters#show'
  get "exchangeletters/list/:id", to: 'exchangeletters#list'
  get "exchangeletters/matchnumber/:id", to: 'exchangeletters#matchnumber'

  get "friendapplies/create/:applyer_id/:applied_id", to: 'friendapplies#create'
  get "friendapplies/approve/:approver_id/:approved_id", to: 'friendapplies#approve'
  get "friendapplies/reject/:rejecter_id/:rejected_id", to: 'friendapplies#reject'

  get "users/status/:id", to: 'users#status'
  get "users/show/:showid/:userid", to: 'users#show'
  get "users/friend/:id", to: 'users#friend'
  get "users/friendapplyer/:id", to: 'users#friendapplyer'
  get "users/login/:uid", to: 'users#login'
  post "users/create", to: 'users#create'
  post "users/update/:id", to: 'users#update'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end
