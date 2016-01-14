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

    def self.find_by_tag_partial(str)
        partial = "%#{str}%"
        Spot.includes(:tags).references(:tags).where("tags.name LIKE ?", partial)
    end

    def self.find_by_spot_partial(str)
        partial = "%#{str.downcase}%"
        Spot.where("lower(name) LIKE ?", partial)
    end
end
