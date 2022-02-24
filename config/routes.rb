Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get '/posts', to: "posts#index"
  get '/posts/:id', to: "posts#show"
  post '/posts', to: "posts#create"

end
