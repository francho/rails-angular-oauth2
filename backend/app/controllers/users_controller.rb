class UsersController < ApplicationController

  def logout


    env['warden'].logout

    user = User.find(doorkeeper_token.resource_owner_id)
    puts '******************************'
    puts user.inspect
    sign_out user



    render js: "window.location('//localhost:9000')"
  end
end
