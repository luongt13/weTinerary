Rails.application.routes.draw do
  # resources :users do 
  # resources :users do 
  #   resources :trips
  # end

    resources :trips do
      resources :days do
      end
  end

  get "/all-trips", to: "trips#all_trips"

  devise_for :users, controllers: { registrations: 'registrations' }
  namespace :api do
    namespace :v1 do
      get 'post/index'
      post :auth, to: 'authentication#create'
      get  '/auth' => 'authentication#fetch'
    end

    namespace :v2 do
      # Things yet to come
    end
  end
    # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
