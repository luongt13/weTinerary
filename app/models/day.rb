class Day < ApplicationRecord
  belongs_to :trip
  has_many :activities, dependent: :destroy, inverse_of: :day
  accepts_nested_attributes_for :activities
  # , reject_if: proc { |attributes| attributes['type'].blank? }
end
