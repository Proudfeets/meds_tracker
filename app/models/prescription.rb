class Prescription < ApplicationRecord
  validates :dosage, presence: true
  validates :frequency_number, presence: true
  validates :frequency_period, presence: true
  validates_presence_of :user_id, :medication_id

  belongs_to :user
  belongs_to :medication
end
