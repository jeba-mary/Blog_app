Rails.application.routes.draw do
  root to: 'home#index'

 # devise_for :users, controllers: { registrations: 'registrations', sessions: 'sessions' }

  scope module: :v1,  defaults: {format: 'json'} do
    devise_for :users, controllers: {
        registrations: 'v1/custom_devise/registrations',
        confirmations: 'v1/custom_devise/confirmations',
        sessions: 'v1/custom_devise/sessions'
    }
    resources :articles
  end

   get 'articles/:id', to: 'home#index';
   get 'articles/new', to: 'home#index';
   get 'articles/edit/:id', to: 'home#index';

   get '/sign_up', to: 'home#index';
   get '/sign_in', to: 'home#index'; 

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
