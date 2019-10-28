class GroupsController < ApplicationController

  def new
    @group = Group.new
    @group.users << current_user 
  end

  def create
    @group = Group.new(gropu_params)
    if @group.save
      redirect_to root_path,  notice:"グループを作成しました"
    else
      render :new
  end

  private

  def group_params
  params.require(:gruop).permit(:name, user_ids: [])
  end


end
