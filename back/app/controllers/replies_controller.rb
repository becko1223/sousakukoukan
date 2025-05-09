class RepliesController < ApplicationController
  def create
    reply= Reply.new(reply_params)
    User.find(reply_params[:user_id]).update(status:0)
    reply.save
  end

  def show
    logger.debug(params[:id])
    reply= Reply.find_by(toletter_id: params[:id])
    
    user= reply.user
    author={
      id:user&.id,
      name:user&.name,
      avatar:url_for(user&.avatar)
    }
    value={
      id:reply&.id,
      text:reply&.text,
      author:author
    }
    
    render json:value
  end

  def reply_params
    params.permit(:user_id, :toletter_id,:text)
  end
end
