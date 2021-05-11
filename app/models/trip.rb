class Trip < ApplicationRecord
  belongs_to :user
  has_many :days, dependent: :destroy
  has_many :activities, through: :days

  scope :location_similarity, ->(location) {
    quoted_location = ActiveRecord::Base.connection.quote_string(location)
    where("location % :location", location: location).
      order(Arel.sql("similarity(location, '#{quoted_location}') DESC"))
  }
end

# where ("similarityy(name, ? ) > 0.2" ,name)
# order(Arel.sql("similarity"(name, '#{}quted')'}' DESC))