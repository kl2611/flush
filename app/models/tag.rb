class Tag < ActiveRecord::Base
    validates :name, presence: true, uniqueness: true

    has_many :taggings, dependent: :destroy
    has_many :spots, through: :taggings, source: :spot

    def self.queried_tags(str)
        partial = "%#{str.downcase}%"
        Tag.where("lower(name LIKE ?", partial)
    end
end
