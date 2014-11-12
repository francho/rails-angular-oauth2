class UsersController < ApplicationController

  def logout
    env['warden'].logout

    render js: "window.location('//localhost:9000')"
  end
end
