Rails.application.routes.draw do
  root to: 'home#index'

  devise_for :users, controllers: { registrations: 'registrations', sessions: 'sessions' }

  namespace :api do
    namespace :v1 do
      devise_for :users, controllers: { registrations: 'registrations', sessions: 'sessions' }
      resources :articles
    end
   end

   get 'articles/:id', to: 'home#index';
   get 'articles/new', to: 'home#index';
   get 'articles/edit/:id', to: 'home#index';

   get '/sign_up', to: 'home#index';
   get '/signIn', to: 'home#index'; 

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
