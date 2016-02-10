# Flush
<a href="https://shielded-meadow-90570.herokuapp.com/#/?_k=vbkalb" target="_onclick">Flush</a> is a web application for users to find and rate public restrooms. Built with Ruby, Rails, Flux, React.js, PostgreSQL, Google Maps API, Twitter Bootstrap, and jQuery.
<p>
Inspired by Yelp, Flush allows users to review and rate restrooms as well as submit requests for new restroom locations.

##Features
- [x] Create user accounts with secure authentication
- [x] Log in/Log out
- [x] Search for restrooms in current Google Maps window
- [x] View location details and reviews written by other users
- [x] Create your own reviews
- [x] Add new restroom location to map (crowdsourced)

##Design Docs
DB Schema

##Implementation Timeline
###Phase 1: User Authentication and JSON API (1 day)
In Phase 1, I will implement user signup and authentication (using BCrypt). There will be a basic landing page after signup that will hold application's root React component. Create basic seed data of reviews/locations for dev and testing.

###Phase 2: Flux Architecture and Reviews CRUD (1 day)
Set up Flux, React Router and React view structure for the main application. ReviewStore for CRUD AJAX request. Basic bootstrap styling for landing pages

###Phase 3: Tagging and Search Functions (2 days)
Create JSON API for locations. Implement tagging feature for each spot, with multiple tags allowed. Google Maps API to location. Locations in ``Index`` will automatically update when map is moved.

###Phase 4: Restroom Ratings and Reviews (2 days)

###Phase 5: Restroom Listings (2 days)

###Phase 6: Styling Cleanup and Seed Data (2 days)
Create more seed data. 
Ensure consistency of layout

##Code
###Backend
- Ruby on Rails with PostgreSQL
- Controllers handle data through JSON API upon AJAX requests

###Frontend
- Single page application powered by React/ReactRouter/Flux
- SessionStore to manage and track user login status
- Bootstrap for styling and positioning of components
- jQuery for AJAX requests

##Bonus Features (TBD)
- [ ] Add photos for bathrooms
- [ ] Edit personal profile (profile picture and basic details)
- [ ] Sort restrooms based on distance, review ratings, and number of reviews
