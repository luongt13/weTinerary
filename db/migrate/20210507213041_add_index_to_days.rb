class AddIndexToDays < ActiveRecord::Migration[6.1]
  def change
    add_index :days, :trip_day, unique: true
  end
end
