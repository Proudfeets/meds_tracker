class Medication < ApplicationRecord
  validates :generic_name, presence: true

end
