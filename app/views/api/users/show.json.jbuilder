json.extract! @user, :id, :username

if @user.picture
    json.avatar @user.picture, :id, :username, :source
end
