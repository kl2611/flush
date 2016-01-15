json.id @review.id
json.spot_id @review.spot_id
json.rating @review.rating
json.comment @review.comment

json.user do
  json.user_id @review.user.id
  json.username @review.username
end
