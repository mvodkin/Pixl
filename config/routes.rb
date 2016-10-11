Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update, :destroy]
    resources :posts, only: [:create, :update, :destroy, :index]
    resource :session, controller: 'session', only: [:create, :destroy]
    resources :comments, only: [:create, :destroy]
    resource :likes, only: [:create, :destroy]
    resource :follows, only: [:create, :destroy]
  end

end
