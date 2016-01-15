class AddLatAndLngToSpots < ActiveRecord::Migration
  def change
    add_column :spots, :lat, :float, default: 0
    add_column :spots, :lng, :float, default: 0
    change_column :spots, :lat, :float, null: false
    change_column :spots, :lng, :float, null: false
  end
end
