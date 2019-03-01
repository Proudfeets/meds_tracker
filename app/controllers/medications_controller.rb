class MedicationsController <ApplicationController
  before_action :authenticate_user!

    def index
    end

    def show
    end

    def create
    end

    private

    def medications_params
      params.require(:medication).permit(:id, :generic_name, :brand_name)
    end
end
