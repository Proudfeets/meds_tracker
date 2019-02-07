class Medication < ApplicationRecord
  validates :generic_name, presence: true

  has_many :prescriptions
  has_many :medications, through: :prescriptions
end
