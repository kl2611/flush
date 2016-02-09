json.extract! spot, :id, :name, :description, :lat, :lng
json.average_rating spot.average_rating

json.taggings do
    json.array! spot.taggings do |tagging|
        json.extract! tagging, :id, :tag_id
        json.extract! tagging.tag, :name
    end
end

json.pictures do
    json.array! spot.pictures do |picture|
        json.extract! picture, :id, :source
    end
end

json.reviews do
  json.partial! 'api/reviews/review', collection: spot.reviews, as: :review
end
