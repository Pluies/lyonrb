require 'spec_helper'

describe EventsController do
  include Devise::TestHelpers
  
  describe 'index' do
    it 'should succeed' do
      get :index
      response.should be_success
    end
  end
end