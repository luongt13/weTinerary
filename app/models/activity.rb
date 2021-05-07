class Activity < ApplicationRecord
  belongs_to :day, inverse_of: :activities
end
