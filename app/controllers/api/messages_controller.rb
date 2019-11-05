class Api::MessagesController < ApplicationController
  def index
    group = Group.find(params[:group_id])
    last_name_id = params[:id].to_i
    last_body_id = params[:id].to_i
    @messages = group.messages.includes(:user).where("id > #{last_message_id}")
  end
end