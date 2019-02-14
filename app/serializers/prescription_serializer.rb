class PrescriptionSerializer < ActiveModel::Serializer
  attributes :id, :user, :medication, :medication_brand, :medication_generic, :dosage, :frequency_number, :frequency_period, :special_instructions, :prescribed_by


  def instructions
    object.special_instructions
  end

  def prescriber
    object.prescribed_by
  end

  def medication_generic
    object.medication.generic_name
  end

  def medication_brand
    object.medication.brand_name
  end

end
