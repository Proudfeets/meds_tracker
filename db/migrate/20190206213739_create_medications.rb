class CreateMedications < ActiveRecord::Migration[5.2]
  def change
    create_table :medications do |t|
      t.string :generic_name,   null: false, default: ""
      t.string :brand_name

      t.timestamps null: false
    end
  end
end
