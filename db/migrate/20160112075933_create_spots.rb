class CreateSpots < ActiveRecord::Migration
  def change
    create_table :spots do |t|
        t.string :name, null: false
        t.boolean :approved, default: false
        t.text :description

        t.timestamps null: false
    end

    add_index :spots, :name
  end
end
