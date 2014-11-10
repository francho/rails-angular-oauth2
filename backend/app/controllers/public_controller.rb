class PublicController < ApplicationController
  doorkeeper_for :protected_index

  def index
  end

  def protected_index
  end
end
