json.extract! @spot, :id, :name, :description, :lat, :lng

json.taggings do
    json.array! @spot.taggings do |tagging|
        json.extract! tagging, :id, :tag_id
        json.extract! tagging.tag, :name
    end
end

json.pictures do
    json.array! @spot.pictures do |picture|
        json.extract! picture, :id, :source
    end
end

json.address do
    json.extract! @spot.spot_address, :street_address, :city
end
