Rails.application.routes.draw do
  root 'static_pages#root'

  resource :session, only: [:create, :destroy, :new]
  resources :users, only: [:create, :new, :show, :index]

    namespace :api, defaults: { format: :json } do
        resource :session, only: [:create, :destroy, :show]
        resources :users, only: [:show]
        resources :spots, only: [:index, :new, :create, :show]

        get 'spots/search', to: 'spots#search'
        resources :reviews, only: [:index, :create, :show, :update, :destroy]
        resources :taggings, only: [:index, :create, :show, :destroy]
        resources :tags, only: [:index, :create, :show]
    end
end
