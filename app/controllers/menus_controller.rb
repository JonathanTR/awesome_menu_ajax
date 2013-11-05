class MenusController < ApplicationController

  def index
    @menus = Menu.order("created_at DESC")
    @menu = Menu.new
  end

  def create
    @menu = Menu.new(params[:menu])
    if @menu.save
      render text: render_to_string(partial: 'menus/new_menu', locals: { menu: @menu })
    else
      flash[:error] = "Please enter a valid menu name"
      redirect_to root_path
    end
  end

  def update
    @menu = Menu.find(params[:id])
    @menu.update_attribute(:name, params[:menu][:name])
    # render json: { success: true }
    redirect_to root_path
  end

  def destroy
    @menu = Menu.find(params[:id])
    @menu.destroy
    render json: { success: true }
  end

end
