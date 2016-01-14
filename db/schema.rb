# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160114051038) do

  create_table "pictures", force: :cascade do |t|
    t.string   "name",           null: false
    t.string   "source",         null: false
    t.integer  "imageable_id",   null: false
    t.string   "imageable_type", null: false
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "pictures", ["imageable_id"], name: "index_pictures_on_imageable_id"

  create_table "reviews", force: :cascade do |t|
    t.integer  "spot_id",                null: false
    t.integer  "user_id",                null: false
    t.integer  "rating",     default: 5, null: false
    t.text     "comment",                null: false
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  add_index "reviews", ["spot_id"], name: "index_reviews_on_spot_id"
  add_index "reviews", ["user_id"], name: "index_reviews_on_user_id"

  create_table "spot_addresses", force: :cascade do |t|
    t.integer  "spot_id",                             null: false
    t.string   "street_address",                      null: false
    t.string   "city",           default: "New York"
    t.string   "state",          default: "NY"
    t.integer  "zip",                                 null: false
    t.string   "neighborhood"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
  end

  add_index "spot_addresses", ["spot_id"], name: "index_spot_addresses_on_spot_id", unique: true

  create_table "spots", force: :cascade do |t|
    t.string   "name",                        null: false
    t.boolean  "approved",    default: false
    t.text     "description"
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
  end

  add_index "spots", ["name"], name: "index_spots_on_name"

  create_table "taggings", force: :cascade do |t|
    t.integer  "spot_id",    null: false
    t.integer  "tag_id",     null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "taggings", ["spot_id"], name: "index_taggings_on_spot_id"
  add_index "taggings", ["tag_id"], name: "index_taggings_on_tag_id"

  create_table "tags", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "tags", ["name"], name: "index_tags_on_name", unique: true

  create_table "users", force: :cascade do |t|
    t.string   "password_digest", null: false
    t.string   "username",        null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true
  add_index "users", ["username"], name: "index_users_on_username", unique: true

end
