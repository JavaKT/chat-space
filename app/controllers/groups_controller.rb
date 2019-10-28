class GroupsController < ApplicationController

  def new
  end

  def create
  end

  def edit
  end

  def update
  end


  private

  params.require(:group).permit(:group_id, :name)

end
