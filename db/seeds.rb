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

User.create ( {username: "guest",
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
                      name: "Somewhere on Broadway",
                      description: "Grassy plains cover a whole block. Recreational facilities are well taken care of!",
                      lat: 40.807,
                      lng: -73.9641
                     },
                     {
                      name: "Absolute Bagels",
                      description: "Indoor rock climbing gym has challenging courses. Gym equipment is available as well.",
                      lat: 40.81,
                      lng: -73.9639
                     }])

SpotAddress.create ([{
                                    spot_id: 1,
                                    street_address: "Broadway",
                                    zip: 10027,
                                    city: "New York"
                                    },

                                    {
                                    spot_id: 2,
                                    street_address: "116th Street",
                                    zip: 10027,
                                    city: "New York"
                                    },

                                    {
                                    spot_id: 3,
                                    street_address: "116th Street",
                                    zip: 10027,
                                    city: "New York"
                                    },

                                    {
                                    spot_id: 4,
                                    street_address: "116th Street",
                                    zip: 10027,
                                    city: "New York"
                                    }
                                    ])

Picture.create([{
                            name: "Bernal Heights 1",
                            source: "http://res.cloudinary.com/stephlee/image/upload/v1450993606/bernal_heights1_zrnigs.jpg",
                            imageable_id: 1,
                            imageable_type: "Spot"
                           },
                           {
                             name: "Bernal Heights 2",
                             source: "http://res.cloudinary.com/stephlee/image/upload/v1450993586/bernal_heights2_ewipim.jpg",
                             imageable_id: 1,
                             imageable_type: "Spot"
                           },
                           {
                             name: "Bernal Heights 3",
                             source: "http://res.cloudinary.com/stephlee/image/upload/v1450993588/bernalheights3_epzmi6.jpg",
                             imageable_id: 1,
                             imageable_type: "Spot"
                           },
                           {
                             name: "Dolores Park 1",
                             source: "http://res.cloudinary.com/stephlee/image/upload/v1450993613/dolo1_bo7hef.jpg",
                             imageable_id: 2,
                             imageable_type: "Spot"
                           },
                           {
                             name: "Dolores Park 2",
                             source: "http://res.cloudinary.com/stephlee/image/upload/v1450993596/dolo2_i3nxhg.jpg",
                             imageable_id: 2,
                             imageable_type: "Spot"
                           },
                           {
                             name: "Dolores Park 3",
                             source: "http://res.cloudinary.com/stephlee/image/upload/v1450993615/dolo3_gnn9ee.jpg",
                             imageable_id: 2,
                             imageable_type: "Spot"
                           },
                           {
                             name: "Mission Cliffs 1",
                             source: "http://res.cloudinary.com/stephlee/image/upload/v1450993609/missioncliffs1_wvajz9.jpg",
                             imageable_id: 3,
                             imageable_type: "Spot"
                           },
                           {
                             name: "Mission Cliffs 2",
                             source: "http://res.cloudinary.com/stephlee/image/upload/v1450993613/missioncliffs2_hhfsy1.jpg",
                             imageable_id: 3,
                             imageable_type: "Spot"
                           },
                           {
                             name: "Mission Cliffs 3",
                             source: "http://res.cloudinary.com/stephlee/image/upload/v1450993612/missioncliffs3_dk4vbc.jpg",
                             imageable_id: 3,
                             imageable_type: "Spot"
                           },
                           {
                             name: "Fisherman's Wharf 1",
                             source: "http://res.cloudinary.com/stephlee/image/upload/v1450993588/FishermansWharf1_ge9ur3.jpg",
                             imageable_id: 4,
                             imageable_type: "Spot"
                           },
                           {
                             name: "Fisherman's Wharf 2",
                             source: "http://res.cloudinary.com/stephlee/image/upload/v1450993632/fishermanswharf2_leelw7.jpg",
                             imageable_id: 4,
                             imageable_type: "Spot"
                           },
                           {
                             name: "Fisherman's Wharf 3",
                             source: "http://res.cloudinary.com/stephlee/image/upload/v1450993616/fishermans-wharf3_pnqgew.jpg",
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
                    { name: "beach" },
                    { name: "fast food" }
                    ])

Tagging.create([
                         { spot_id: 1, tag_id: 1 },
                         { spot_id: 1, tag_id: 3 },
                         { spot_id: 2, tag_id: 3 },
                         { spot_id: 2, tag_id: 7 },
                         { spot_id: 2, tag_id: 1 },
                         { spot_id: 2, tag_id: 2 },
                         { spot_id: 3, tag_id: 5 },
                         { spot_id: 3, tag_id: 4 },
                         { spot_id: 3, tag_id: 5 },
                         { spot_id: 4, tag_id: 6 },
                         { spot_id: 4, tag_id: 7 },
                         { spot_id: 4, tag_id: 8 }
                         ])

50.times do
        User.create (
        {username: "username",
        password: "mystery"})
end

NYC_ZIPS = [10027]
CITIES = ["New York"]
