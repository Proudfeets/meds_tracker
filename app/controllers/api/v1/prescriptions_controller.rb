class Api::V1::PrescriptionsController < ApplicationController

  def index
    render json: Prescription.all
  end

  def show
  end

  private
  def prescriptions_params
    params.require(:prescription).permit(:id, :user, :medication, :dosage, :frequency_number, :frequency_period, :special_instructions, :prescribed_by)
  end
end
