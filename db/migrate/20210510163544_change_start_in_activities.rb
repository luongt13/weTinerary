class ChangeStartInActivities < ActiveRecord::Migration[6.1]
  def change
    change_column :activities, :start, :string
  end
end
