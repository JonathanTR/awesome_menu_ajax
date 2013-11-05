JtrNatMenu::Application.routes.draw do
  root to: "menus#index"

  resources :menus, only: [:index, :create, :destroy]
end
