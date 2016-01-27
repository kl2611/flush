class SpotAddress < ActiveRecord::Base
    validates :spot_id, :city, presence: true
    validates :spot_id, uniqueness: true

    belongs_to :spot
end
