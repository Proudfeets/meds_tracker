class Api::V1::PrescriptionsController < ApplicationController
  serialization_scope :current_user
  protect_from_forgery with: :null_session, unless: -> { request.format.json? }


  def index
    render json: Prescription.all
  end

  def show
    @prescription = Prescription.find(params[:id])
    render json: { prescription: @prescription, medication: @prescription.medication}
  end

  def destroy
      @prescription = Prescription.find(params[:id])
      @prescription.destroy
      render json: { prescription: @prescription, medication: @prescription.medication}
  end

  def create
    # binding.pry
    new_prescription = Prescription.new(prescriptions_params)
    new_prescription.user = current_user
    new_medication = Medication.find_by(generic_name: params["generic_name"])
    if !new_medication
      new_medication = Medication.create(generic_name: params["generic_name"], brand_name: params["brand_name"])
    else
      new_prescription.medication = new_medication
    end
    # binding.pry
    if new_prescription.save
      render json: {message: "Your entry has been saved!"}
    else
      render json: {message: "Your entry could not be saved."}
    end
  end

  private
  def prescriptions_params
    params.require(:prescription).permit(:id, :user, :medication, :dosage, :frequency_number, :frequency_period, :special_instructions, :prescribed_by, :generic_name, :brand_name, )
  end
end
