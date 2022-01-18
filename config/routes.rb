Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resources :posts, only: [:show, :create, :update, :destroy, :index]
    resources :likes, only: [:create, :show, :destroy]
    resources :comments, only: [:create, :show, :update, :destroy]
    resource :session, only: [:create, :destroy]
  end

  root to: 'static_pages#root'
end
