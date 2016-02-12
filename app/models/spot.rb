class Spot < ActiveRecord::Base
    validates :name, :lat, :lng, presence: true
    validates :approved, inclusion: { in: [true, false],
        message: "Can only be set to true or false" }

    has_many :reviews
    has_many :taggings
    has_many :tags,
        through: :taggings,
        source: :tag
    has_many :pictures, as: :imageable
    has_one :spot_address

    def self.in_bounds(bounds)
        self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng > ?", bounds[:southWest][:lng])
        .where("lng < ?", bounds[:northEast][:lng])
    end

    def review_count
        reviews.count
    end

    def average_rating
        reviews.average(:rating)
    end
end
