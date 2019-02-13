class Api::V1::PrescriptionsController < ApplicationController
  protect_from_forgery with: :null_session, unless: -> { request.format.json? }

  def index
    render json: Prescription.all
  end

  def show
  end

  def destroy
    if current_user_access
      Prescription.destroy(params[:id])
    else
      render json: {message: "You're not authorized to delete that"}
    end
  end

  def create
    new_prescription = Prescription.create(prescriptions_params)
    new_prescription.user = current_user
    new_medication = Medication.find_by(generic_name: params["generic_name"])
    if !new_medication
      new_medication = Medication.create(generic_name: params["generic_name"], brand_name: params["brand_name"])
    end
    new_prescription.medication = new_medication
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

  if !user_signed_in
    render json: {message: "You must sign in to take that action."}
  end
end
