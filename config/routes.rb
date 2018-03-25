Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :tags, except: [:new, :edit]
      resources :prayers, except: [:new, :edit]
    end
  end

  get '*path', to: "application#fallback", constraints: -> (request) do
    !request.xhr? && request.format.html?
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
