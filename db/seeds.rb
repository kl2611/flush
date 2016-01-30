# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.delete_all
Spot.delete_all
Review.delete_all
Tag.delete_all
Tagging.delete_all
Picture.delete_all

User.create ( {username: "Guest",
                        password: "password"} )

Review.create ([ {spot_id: 1,
                            user_id: 1,
                            rating: 5,
                            comment: "This bathroom is AMAZING!"},

                            {spot_id: 2,
                            user_id: 1,
                            rating: 2,
                            comment: "Meh"
                            },

                            {spot_id: 3,
                            user_id: 1,
                            rating: 3,
                            comment: "Average"
                            },

                            {spot_id: 4,
                            user_id: 1,
                            rating: 5,
                            comment: "very clean!"
                            },

                            {spot_id: 5,
                            user_id: 1,
                            rating: 4,
                            comment: "nice"
                            }
                        ])

Spot.create ([{
                        name: "Lerner Hall",
                        description: "Easily accessible, on Columbia University campus",
                        lat: 40.8068,
                        lng: -73.9639
                     },
                     {
                        name: "Low Library",
                        description: "Located downstairs, on Columbia campus",
                        lat: 40.8081,
                        lng: -73.9621
                     },
                     {
                      name: "Diana Center",
                      description: "Go through Barnard gates and bathrooms are located on the second floor",
                      lat: 40.8096,
                      lng: -73.9635
                     },
                     {
                      name: "Northwest Corner Building",
                      description: "Located downstairs next to Joe's Coffee, go around the corner behind the escalators to find it",
                      lat: 40.810055,
                      lng: -73.961982
                     }])


Picture.create([{
                            name: "Lerner Hall 1",
                            source: "http://res.cloudinary.com/kellyliu/image/upload/v1454126865/lerner_1.jpg",
                            imageable_id: 1,
                            imageable_type: "Spot"
                           },
                           {
                             name: "Lerner Hall 2",
                             source: "http://res.cloudinary.com/kellyliu/image/upload/v1454126865/lerner_2.jpg",
                             imageable_id: 1,
                             imageable_type: "Spot"
                           },
                           {
                             name: "Low Library 1",
                             source: "http://res.cloudinary.com/kellyliu/image/upload/v1454126752/low_library_1.jpg",
                             imageable_id: 2,
                             imageable_type: "Spot"
                           },
                           {
                             name: "Low Library 2",
                             source: "http://res.cloudinary.com/kellyliu/image/upload/v1454126752/low_library_2.jpg",
                             imageable_id: 2,
                             imageable_type: "Spot"
                           },
                           {
                             name: "Diana Center 1",
                             source: "http://res.cloudinary.com/kellyliu/image/upload/v1454127564/banard_diana_1.jpg",
                             imageable_id: 3,
                             imageable_type: "Spot"
                           },
                           {
                             name: "Diana Center 2",
                             source: "http://res.cloudinary.com/kellyliu/image/upload/v1454130200/banard_diana_2.jpg",
                             imageable_id: 3,
                             imageable_type: "Spot"
                           },
                           {
                             name: "Northwest Corner Building 1",
                             source: "http://res.cloudinary.com/kellyliu/image/upload/v1454127536/columbia_noco_1.jpg",
                             imageable_id: 4,
                             imageable_type: "Spot"
                           },
                           {
                             name: "Northwest Corner Building 2",
                             source: "",
                             imageable_id: 4,
                             imageable_type: "Spot"
                           }
                           ])

Tag.create([
                    { name: "clean" },
                    {  name: "large" },
                    { name: "free" },
                    { name: "indoor" },
                    { name: "outdoor" },
                    { name: "park" },
                    { name: "fast food" },
                    { name: "gender neutral"},
                    { name: "family restroom"},
                    { name: "baby friendly"}
                    ])

Tagging.create([
                         { spot_id: 1, tag_id: 1 },
                         { spot_id: 1, tag_id: 3 },
                         { spot_id: 2, tag_id: 3 },
                         { spot_id: 2, tag_id: 7 },
                         { spot_id: 2, tag_id: 1 },
                         { spot_id: 2, tag_id: 2 },
                         { spot_id: 3, tag_id: 5 },
                         { spot_id: 3, tag_id: 6 },
                         { spot_id: 3, tag_id: 5 },
                         { spot_id: 4, tag_id: 6 },
                         { spot_id: 4, tag_id: 7 },
                         { spot_id: 4, tag_id: 8 }
                         ])
