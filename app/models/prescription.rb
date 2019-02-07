class Prescription < ApplicationRecord
  validates :dosage, presence: true
  validates :frequency_number, presence: true
  validates :frequency_period, presence: true

  belongs_to :user
  belongs_to :medication
end
