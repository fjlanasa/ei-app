Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'static_pages#index'

  namespace :api do
    resources :level_one_words do
      resources :level_two_words
    end
  end
end
