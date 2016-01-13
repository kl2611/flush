class Tagging < ActiveRecord::Base
    validates :spot_id, :tag, presence: true
    validates :spot_id, uniqueness: { scope: :tag_id,
        message: "Location already has this tag"}

    belongs_to :spot
    belongs_to :tag

end
