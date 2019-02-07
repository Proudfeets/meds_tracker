require 'rails_helper'

RSpec.describe Prescription, type: :model do
  describe "Prescription model" do
    it { should have_valid(:dosage).when("5 mg")}
    it { should_not have_valid(:dosage).when("")}

    it { should have_valid(:frequency_number).when("3")}
    it { should_not have_valid(:frequency_number).when("")}

    it { should have_valid(:frequency_period).when("hours")}
    it { should_not have_valid(:frequency_period).when("")}


  end
end
