class Trip < ApplicationRecord
  belongs_to :user
  has_many :days, dependent: :destroy
  has_many :activities, through: :days
end
