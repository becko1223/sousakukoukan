class BuntsulettersController < ApplicationController
  def create
    buntsuletter= Buntsuletter.new(
      author_id:params[:author_id],
      partner_id:params[:partner_id],
      previousletter_id:params[:previousletter_id],
      media:params[:media]
    )
    buntsuletter.save
    buntsuletter.previousletter.previousletter&.update(islatest:false)
    logger.debug(url_for(buntsuletter.media[0]))
    render json:{id:buntsuletter.id}
  end

  def show
    buntsuletter= Buntsuletter.find(params[:id])
    user= buntsuletter.author
    media=[]
    buntsuletter.media.each do |m|
      media.push(url_for(m))
    end
    value={
      id:buntsuletter.id,
      description:buntsuletter.text,
      next_id:buntsuletter.nextletter&.id,
      previous_id:buntsuletter.previousletter&.id,
      media:media,
      author_name:user.name,
      author_avatar:url_for(user.avatar),
      author_id:user.id
    }
    render json:value
  end

  def list
    letters= Buntsuletter.where(partner_id:params[:id],islatest:true)
    value=[]
    letters.each do |letter|
      id=letter.id
      if(letter.nextletter)
        id=letter.nextletter.id
      end
      logger.debug(id)
      object={
        id:id,
        partner_name:letter.author.name,
        partner_avatar:url_for(letter.author.avatar)
      }
      value.push(object)
    end
    render json:value
  end


  def fromprofile
    letter=Buntsuletter.where(partner_id:params[:my_id],author_id:params[:friend_id]).last
    if(!letter.nextletter.nil?)
      letter=letter.nextletter
    end
    render json:{id:letter.id}
  end


  def buntsu_params
    params.permit(:author_id, :partner_id, :text, :previousletter_id, :media)
  end

end
