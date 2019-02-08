# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
medications1 = Medication.find_or_create_by!(generic_name: 'Warfarin', brand_name: 'Coumadin')
medications2 = Medication.find_or_create_by!(generic_name: 'Lorazepam', brand_name: 'Ativan')
medications3 = Medication.find_or_create_by!(generic_name: 'Fluoxetine', brand_name: 'Prozac')
medications4 = Medication.find_or_create_by!(generic_name: 'Dexmethylphenidate', brand_name: 'Focalin')

users1 = User.find_by(email: 'johnf2@kennedy.com')
  unless users1.present?
    users1 = User.create(id: 1, email: 'johnf2@kennedy.com', password: '1234567', password_confirmation: '1234567')
end

users2 = User.find_by(email: 'liza2@warren.com')
  unless users2.present?
    users2 = User.create(id: 2, email: 'liza2@warren.com', password: '1234568', password_confirmation: '1234568')
end

users3 = User.find_by(email: 'martinj2@walsh.com')
  unless users3.present?
    users3 = User.create(id: 3, email: 'martinj2@walsh.com', password: '1234569', password_confirmation: '1234569')
end

prescriptions1 = Prescription.find_or_create_by!(user_id: 5, medication_id: 2, dosage: "1mg", frequency_number: 2, frequency_period: "as needed")
prescriptions2 = Prescription.find_or_create_by!(user_id: 6, medication_id: 1, dosage: "2 pills", frequency_number: 1, frequency_period: "per diem")
prescriptions3 = Prescription.find_or_create_by!(user_id: 7, medication_id: 3, dosage: "Half", frequency_number: 2, frequency_period: "every 12 hours")
prescriptions4 = Prescription.find_or_create_by!(user_id: 8, medication_id: 4, dosage: "5.5mg", frequency_number: 1, frequency_period: "per diem")
