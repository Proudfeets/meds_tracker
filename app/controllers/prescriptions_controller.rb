class PrescriptionsController < ApplicationController
  before_action :authenticate_user!

    def index
    end

    def show
    end

    def create
    end

    def destroy
    end

    private

    def prescriptions_params
      params.require(:prescription).permit(:id, :user, :medication, :dosage, :frequency_number, :frequency_period, :special_instructions, :prescribed_by)
    end
end
