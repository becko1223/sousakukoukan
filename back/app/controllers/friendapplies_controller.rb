class FriendappliesController < ApplicationController
  def create
    Friendapply.create(applyer_id:params[:applyer_id],applied_id:params[:applied_id])
    logger.debug("create?")
    render json:{}
  end

  def approve
    Friendrelation.create(user1_id:params[:approver_id],user2_id:params[:approved_id])
    Friendrelation.create(user2_id:params[:approver_id],user1_id:params[:approved_id])
    Friendapply.find_by(applyer_id: params[:approved_id], applied_id: params[:approver_id]).destroy
    render json:{}
  end

  def reject
    Friendapply.find_by(applyer_id: params[:rejected_id], applied_id: params[:rejecter_id]).destroy
    render json:{}
  end
end
