class CreatePictures < ActiveRecord::Migration
  def change
    create_table :pictures do |t|
        t.string :name, null: false
        t.string :source, null: false
        t.integer :imageable_id, null: false
        t.string :imageable_type, null: false

      t.timestamps null: false
    end

    add_index :pictures, :imageable_id
  end
end
