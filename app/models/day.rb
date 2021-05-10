class Day < ApplicationRecord
  belongs_to :trip
  has_many :activities, -> {order(:start)}, dependent: :destroy, inverse_of: :day 
  accepts_nested_attributes_for :activities
end
