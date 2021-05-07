class ChangeTypeInActivities < ActiveRecord::Migration[6.1]
  def change
    change_column :activities, :type, :text
  end
end
