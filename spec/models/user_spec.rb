require 'rails_helper'

RSpec.describe User, type: :model do
  describe "User model" do
    it { should have_valid(:encrypted_password).when("Rogers")}
    it { should_not have_valid(:encrypted_password).when("")}

    it { should have_valid(:email).when("michelle@gmail.com")}
    it { should_not have_valid(:email).when("arg.com")}
    it { should_not have_valid(:email).when("Iamawoodchuck@")}

  end
end
