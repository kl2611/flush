json.extract! review, :id, :rating, :comment

json.extract! review.user, :id, :username

if review.user.picture
    json.avatar review.user.picture, :name, :source
end
