Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :posts

  # get '/posts', to: "posts#index"
  # get '/posts/:id', to: "posts#show"
  # post '/posts', to: "posts#create"
  # patch '/posts/:id', to: "posts#update"

  # get '/me' , to: "auth#getprofile"

end
