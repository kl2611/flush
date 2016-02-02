# Flush
Flush is a web application for users to find and rate public restrooms. Built with Ruby, Rails and React.js.
<p>
Inspired by Yelp, Flush allows users to review and rate restrooms as well as submit requests for new restroom locations.

##Features
- [x] Create user accounts with secure authentication
- [x] Log in/Log out
- [ ] Sort restrooms based on distance, review ratings, and number of reviews
- [ ] Create, edit, delete your own reviews
- [x] Google Maps API
- [x] Add new bathroom location to map (crowdsourced)
- [ ] Add photos for bathrooms
- [x] Read reviews written by other users
- [ ] Edit personal profile (profile picture and basic details)

##Design Docs
DB Schema

##Implementation Timeline
###Phase 1: User Authentication and JSON API (1 day)
In Phase 1, I will implement user signup and authentication (using BCrypt). There will be a basic landing page after signup that will hold application's root React component. Create basic seed data of reviews/locations for dev and testing.

###Phase 2: Flux Architecture and Reviews CRUD (1 day)
Set up Flux, React Router and React view structure for the main application. ReviewStore for CRUD AJAX request. Basic bootstrap styling for landing pages

###Phase 3: Tagging and Search Functions (2 days)
Create JSON API for locations. Implement tagging feature for each spot, with multiple tags allowed. Google Maps API to location. Locations in ``Index`` will automatically update when map is moved.
