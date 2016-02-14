class DropSpotAddress < ActiveRecord::Migration
    def up
        drop_table :spot_addresses
    end

    def down
        create_table :spot_addresses do |t|
            t.integer  "spot_id", null: false
            t.string   "street_address"
            t.string   "city", null: false
            t.string   "state"
            t.integer  "zip"
            t.string   "neighborhood"

            t.timestamps
        end
        add_index :spot_addresses, :spot_id
    end
end
