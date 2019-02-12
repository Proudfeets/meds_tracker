class PrescriptionSerializer < ActiveModel::Serializer
  attributes :id, :user, :medication, :dosage, :frequency_number, :frequency_period, :special_instructions, :prescribed_by

  def dosage
    object.dosage
  end

  def frequency_number
    object.frequency_number
  end

  def frequency_period
    object.frequency_period
  end

  def instructions
    object.special_instructions
  end

  def prescriber
    object.prescribed_by
  end

  def user_name
    object.user.name
  end

  def medication_generic
    object.medication.generic_name
  end

  def medication_brand
    object.medication.brand_name
  end

end
