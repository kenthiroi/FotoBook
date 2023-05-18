Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :update, :show]
    resources :posts, only: [:show, :create, :update, :destroy, :index]
    post "/posts/by_user_id", to: "posts#index_by_user_id", as: "index_by_user_id"
    resources :likes, only: [:create, :show, :destroy]
    resources :comments, only: [:create, :show, :update, :destroy]
    resources :friend_requests, only: [:create, :show, :destroy]
    resources :friends, only: [:create, :show, :destroy]
    resource :session, only: [:create, :destroy]
  end

  root to: 'static_pages#root'
end
