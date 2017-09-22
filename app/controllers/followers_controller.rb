class FollowersController < ApplicationController

  def random
    render json: User.where(["id != ?", current_user.id]).order("random()").all
  end
end
