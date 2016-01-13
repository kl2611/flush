Rails.application.routes.draw do
  root 'static_pages#root'

  resource :session, only: [:create, :destroy, :new]
  resources :users, only: [:create, :new, :show, :index]

  get "*path", to: "static_pages#index"
end
