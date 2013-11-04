class MenusController < ApplicationController

  def index
    @menus = Menu.all
    @menu = Menu.new
  end

  def create
    @menu = Menu.new(params[:menu])
    if @menu.save
      redirect_to root_path
    else
      flash[:error] = "Please enter a valid menu name"
      redirect_to root_path
    end
  end

end
