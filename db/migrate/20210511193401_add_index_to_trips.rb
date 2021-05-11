class AddIndexToTrips < ActiveRecord::Migration[6.1]
  def change
    add_index :trips, :location
  end
end
