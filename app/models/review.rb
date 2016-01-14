class Review < ActiveRecord::Base
    validates :rating, inclusion: { in: [1, 2, 3, 4, 5],
        message: "Rating must be between 1-5" }

    validates :spot_id, :user_id, :rating, presence: true
    validates :user_id, uniqueness: { scope: :spot_id,
        message: "You can only review a spot once"}

    belongs_to :spot
    belongs_to :user
end
