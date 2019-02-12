require "rails_helper"

RSpec.describe Api::V1::PrescriptionsController, type: :controller do
  let!(:prescription_one) { Prescription.create(user_id: 7, medication_id: 3, dosage: "2mg", frequency_number: 3, frequency_period: "per diem") }
  let!(:prescription_two) { Prescription.create(user_id: 9, medication_id: 1, dosage: "7", frequency_number: 1, frequency_period: "each hour") }

  describe "GET#index" do
    it "should return a list of all the prescriptions" do

      get :index
      returned_json = JSON.parse(response.body)

    end
  end
end
