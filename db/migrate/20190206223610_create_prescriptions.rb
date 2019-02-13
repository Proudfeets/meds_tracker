class CreatePrescriptions < ActiveRecord::Migration[5.2]
  def change
    create_table :prescriptions do |t|
      t.string :dosage, null: false, default: ""
      t.string :frequency_number, null: false, default: ""
      t.string :frequency_period, null: false, default: ""
      t.string :special_instructions, default: ""
      t.string :prescribed_by, default: ""

      t.belongs_to :medication, null: false
      t.belongs_to :user, null: false

      t.timestamps null: false
    end
  end
end
