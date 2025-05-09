class UsersController < ApplicationController


  def login
    user=find_or_create_by(uid:params[uid])
    logger.debug("hihiihihihhihihiihihihihiihihi")
    render json:{id:user.id}
  end

  def update
    user=User.find(params[:id])
    user.update(user_params)
  end

  def status
    status=User.find(params[:id]).status
    letter_id=User.find(params[:id]).exchangeletters.last.exchangedletter&.id
    value={status:status,letter_id:letter_id}
    render json:value
  end

  def show
    user=User.find(params[:showid])
    selfuser=User.find(params[:userid])
    relation=0
    if(Friendrelation.exists?(user1_id:selfuser.id, user2_id:user.id)) then
      relation=1
    elsif(Friendapply.exists?(applyer_id:selfuser.id,applied_id:user.id)) then
     relation=2
    elsif(Friendapply.exists?(applyer_id:user.id,applied_id:selfuser.id)) then
     relation=3
    end
    
    value={
      id:user.id,
      uid:user.uid,
      nickname:user.nickname,
      description:user.profile,
      avatar:url_for(user.avatar),
      relation:relation
    }

    render json:value
  end

  def friend
    friends=User.find(params[:id]).friends
    value=[]
    friends.each do |friend|
      object={
        id:friend.id,
        name:friend.nickname,
        avatar:url_for(friend.avatar)
      }
      value.push(object)
     
    end
    
    render json:value
  end

  def friendapplyer
    applyers=User.find(params[:id]).applyers
    value=[]
    applyers.each do |applyer|
      object={
        id:applyer.id,
        name:applyer.nickname,
        avatar:url_for(applyer.avatar)
      }
      value.push(object)
    end
    render json:value
  end

  def create
    user=User.new(user_params)
    user.status=0
    user.save
    render json:{}
  end


  def user_params
    params.permit(:id, :uid, :name, :nickname, :email, :profile, :avatar)
  end


end
