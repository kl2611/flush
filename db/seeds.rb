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

Review.create (  [spot_id: 1,
                            user_id: 1,
                            rating: 5,
                            comment: "This bathroom is AMAZING!"] )

Spot.create([{
                        name: "Lerner Hall",
                        description: "Easily accessible, on Columbia University campus",
                        lat: 37.74,
                        lng: -122.4
                     }
                     ])

SpotAddress.create([{
                                    spot_id: 1,
                                    street_address: "Broadway",
                                    zip: 10027,
                                    neighborhood: "Morningside Heights"
                                    }
                                    ])

Picture.create([{
                            name: "Lerner Hall 1",
                            source: "",
                            imageable_id: 1,
                            imageable_type: "Spot"
                            }
                            ])

Tag.create([{ name: "clean" },
                    {  name: "large" },
                    { name: "free" }
                    ])

Tagging.create([{ spot_id: 1, tag_id: 1 },
                         { spot_id: 1, tag_id: 3}
                        ])

NYC_ZIPS = []

NYC_NEIGHBORHOODS = ["Morningside Heights", "Upper West Side", "Upper East Side", "Harlem"]
