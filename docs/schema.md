# Schema

## users
| column name    | data type     | details                   |
| -------------  | ------------- | --------------------------|
| id             | integer       |  not null, primary key    |
| username       | string        |  not null, indexed, unique|
| password_digest| string        |  not null                 |
| session_token  | string        |  not null, indexed, unique|

## reviews
| column name   | data type     | details                                          |
| ------------- | ------------- | -------------------------------------------------|
| id            | integer       | not null, primary key                            |
| spot_id       | integer       | not null, foreign key (references spots), indexed|
| user_id       | integer       | not null, foreign key (references users), indexed|
| rating        | integer       | not null, inclusion validation (1-5)             |
| comment       | string        | not null                                         |

## spots
| column name   | data type     | details               |
| ------------- | ------------- | ----------------------|
| id            | integer       | not null, primary key |
| name          | string        | not null              |
| description   | text          |                       |
| lat           | integer       | not null              |
| lng           | integer       | not null              |

## pictures
| column name   | data type     | details                                |
| ------------- | ------------- | ---------------------------------------|
| id            | integer       | not null, primary key                  |
| name          | string        | not null                               |
| imageable_id  | integer       | not null, foreign key (references user)|
| imageable_type| string        | not null                               |

## tags
| column name   | data type     | details                                          |
| ------------- | ------------- | -------------------------------------------------|
| id            | integer       | not null, primary key                            |
| spot_id       | integer       | not null, foreign key (references spots), indexed|
