class ChangeDayinDay < ActiveRecord::Migration[6.1]
  def change
    rename_column :days, :day, :trip_day
  end
end
