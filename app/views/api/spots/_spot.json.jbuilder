json.extract! spot, :id, :name, :description, :lat, :lng
json.average_rating spot.average_rating

json.reviews do
  json.partial! 'api/reviews/review', collection: spot.reviews, as: :review
end
