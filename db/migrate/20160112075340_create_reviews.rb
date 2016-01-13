class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
        t.integer :spot_id, null: false
        t.integer :user_id, null: false
        t.integer :rating, null: false, default: 5
        t.text :comment, null: false

        t.timestamps null: false
    end

    add_index :reviews, :spot_id
    add_index :reviews, :user_id
  end
end
