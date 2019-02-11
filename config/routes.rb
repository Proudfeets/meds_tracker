Rails.application.routes.draw do
  root 'homes#index'

  resources :prescriptions, only: [:index, :create]
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :prescriptions, only: [:show, :create, :destroy, :index] do
      end
    end
  end
end
