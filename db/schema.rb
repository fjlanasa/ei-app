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

ActiveRecord::Schema.define(version: 20161004014052) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "level_one_words", force: :cascade do |t|
    t.string "name", null: false
  end

  create_table "level_two_words", force: :cascade do |t|
    t.string  "name",              null: false
    t.integer "level_one_word_id", null: false
  end

  create_table "posts", force: :cascade do |t|
    t.text     "text",              null: false
    t.integer  "user_id",           null: false
    t.integer  "level_two_word_id", null: false
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "provider",   null: false
    t.string   "uid",        null: false
    t.string   "name",       null: false
    t.string   "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "image"
    t.index ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true, using: :btree
  end

end
