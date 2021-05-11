class Trip < ApplicationRecord
  belongs_to :user
  has_many :days, dependent: :destroy
  has_many :activities, through: :days
#from Nikki
  scope :location_similarity, ->(location) {
    quoted_location = ActiveRecord::Base.connection.quote_string(location)
    where("location % :location", location: location).
      order(Arel.sql("similarity(location, '#{quoted_location}') DESC"))
    # where("similarity(location, ?) > 0.2", location)
    # .order(Arel.sql("similarity(location, '#{quoted_location}') DESC"))
  }
end

