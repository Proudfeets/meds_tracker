require 'rails_helper'

RSpec.describe Medication, type: :model do
  describe "Medication model" do

    it { should have_valid(:generic_name).when("vicodin")}
    it { should_not have_valid(:generic_name).when("")}


  end
end
