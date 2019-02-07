class User < ApplicationRecord
    mount_uploader :profile_photo, ProfilePhotoUploader
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  validates :encrypted_password, presence: true

  has_many :prescriptions
  has_many :medications, through: :prescriptions

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
