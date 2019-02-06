# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
medications1 = Medication.create(generic_name: 'Warfarin', brand_name: 'Coumadin')
medications2 = Medication.create(generic_name: 'Lorazepam', brand_name: 'Ativan')
medications3 = Medication.create(generic_name: 'Fluoxetine', brand_name: 'Prozac')

users1 = User.create(email: 'jack@kennedy.com', password: '123456')
users2 = User.create(email: 'lizzie@warren.com', password: '123456')
users3 = User.create(email: 'marty@walsh.com', password: '123456')
