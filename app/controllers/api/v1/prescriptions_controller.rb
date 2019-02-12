class Api::V1::PrescriptionsController < ApplicationController
  protect_from_forgery with: :null_session, unless: -> { request.format.json? }

  def index
    render json: Prescription.all
  end

  def show
  end

  def create
    new_prescription = Prescription.new(prescriptions_params)
      binding.pry
    if new_prescription.save
      render json: {message: "Your entry has been saved!"}
    else
      render json: {message: "Your entry could not be saved."}
    end
  end

  private
  def prescriptions_params
    params.require(:prescription).permit(:id, :user, :medication, :dosage, :frequency_number, :frequency_period, :special_instructions, :prescribed_by)
  end
end
