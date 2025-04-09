class ExchangelettersController < ApplicationController
  def create
    newletter= Exchangeletter.new(
      user_id:params[:user_id],
      description:params[:description],
      media:params[:media]
    )
    newletter.genre_id=Genre.find_by(name:params[:genre]).id
    newletter.save

    params[:expected_genre].each do |genre|
      logger.debug "#{genre}"
      logger.debug "#{newletter.id}"
      Genreexpectation.create(genre_id:Genre.find_by(name:genre).id, exchangeletter_id:newletter.id)
    end

    User.find(newletter.user_id).update(status:1)

    if(exchangeletter= Exchangeletter.includes(:genre,:genres).where.not(id:newletter.id).find_by(isexchanged: false, genre: {name: newletter.genres.select(:name)}, genres: {name: newletter.genre.name}))
      #exchanegletter.update(exchangeletter_id:newletter.id,isexchanged:true)
      newletter.isexchanged=true
      exchangeletter.update(isexchanged:true)

      Exchangematch.create(
        [
          {
            letter1_id:newletter.id,
         letter2_id:exchangeletter.id
        },
         {
          letter1_id:exchangeletter.id,
          letter2_id:newletter.id
         }
        ]
        
      )

      User.find(newletter.user_id).update(status:2)
      User.find(exchangeletter.user_id).update(status:2)
    end
    newletter.save 

  end


  def show
    exchangeletter = Exchangeletter.find(params[:id])
    user={
      id:exchangeletter.user.id,
      name:exchangeletter.user.nickname,
      avatar:url_for(exchangeletter.user.avatar)
    }
    media=[]
    logger.debug("hihi")
    logger.debug(exchangeletter.media.length)
    logger.debug("hoihoi")
    exchangeletter.media.each do |m|
      media.push(url_for(m))
      logger.debug("hihi")
    end



    value={
      id: exchangeletter.id,  
      media:media,
      description:exchangeletter.description,
      author:user,
      genre:exchangeletter.genre.name
    }
    render json:value
  end


  def list
    letters= Exchangeletter.includes(:exchangedletter).where(exchangedletter: {user_id: params[:id]})
    

    value=[]
    letters.each do |letter|
      object={
        id:letter.id,
        partner_name:letter.user.name,
        partner_avatar:url_for(letter.user.avatar),
        description:letter.description
      }
      value.push(object)
    end
   
    render json:value
  end

  def matchnumber
    id=Exchangeletter.find(params[:id]).exchangedletter.id
    render json: {id:id}
  end




  def exchangeletter_params
    params.permit(:description,:user_id,:media,:genre,:expected_genre)
  end
end














