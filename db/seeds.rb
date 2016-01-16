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

User.create (  [username: "Guest",
                        password: "password"] )

Review.create ([ {spot_id: 1,
                            user_id: 1,
                            rating: 5,
                            comment: "This bathroom is AMAZING!"},

                            {spot_id: 2,
                            user_id: 1,
                            rating: 2,
                            comment: "Meh"
                            }
                        ])

Spot.create([{
                        name: "Lerner Hall",
                        description: "Easily accessible, on Columbia University campus",
                        lat: 40.8068,
                        lng: 73.9639
                     },

                     {
                        name: "Low Library",
                        description: "Located downstairs, on Columbia campus",
                        lat: 40.8081,
                        lng: 73.9621
                     }
                     ])

SpotAddress.create([{
                                    spot_id: 1,
                                    street_address: "Broadway",
                                    zip: 10027,
                                    neighborhood: "Morningside Heights"
                                    },

                                    {
                                    spot_id: 2,
                                    street_address: "116th Street",
                                    zip: 10027,
                                    neighborhood: "Morningside Heights"
                                    }
                                    ])

Picture.create([{
                            name: "Lerner Hall 1",
                            source: "",
                            imageable_id: 1,
                            imageable_type: "Spot"
                            },

                            {
                            name: "Low Library 1",
                            source: "",
                            imageable_id: 2,
                            imageable_type: "Spot"
                            }

                            ])

Tag.create([
                    { name: "clean" },
                    {  name: "large" },
                    { name: "free" }
                    ])

Tagging.create([{ spot_id: 1, tag_id: 1 },
                         { spot_id: 1, tag_id: 3},
                         { spot_id: 2, tag_id: 3}
                        ])

NYC_ZIPS = [10027]

NYC_NEIGHBORHOODS = ["Morningside Heights", "Upper West Side", "Upper East Side", "Harlem"]
