class SpotAddress < ActiveRecord::Base
    validates :spot_id, :street_address, :city, :state, :zip, presence: true
    validates :spot_id, uniqueness: true

    belongs_to :spot
end
