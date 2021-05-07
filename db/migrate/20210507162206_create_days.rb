class CreateDays < ActiveRecord::Migration[6.1]
  def change
    create_table :days do |t|
      t.integer :day
      t.references :trip, null: false, foreign_key: true

      t.timestamps
    end
  end
end
