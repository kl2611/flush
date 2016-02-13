#Proposal
<a href="http://www.flushr.info" target="_blank">http://flushr.info</a>

##Minimum Viable Product
Flushr is a web application inspired by Yelp, built with Ruby on Rails and React.js
<p />
Features include:
- [x] Create user accounts with secure authentication
- [x] Sign in/Sign out
- [x] Search for restrooms in current Google Maps window
- [x] Tags and pictures of locations in search results list
- [x] View location details and reviews written by other users
- [x] Write your own reviews and submit a rating
- [x] Add new restroom location to map (crowdsourced)

##Design
<a href="https://github.com/kl2611/flushr/blob/master/docs/schema.md">Database Schema</a>

##Implementation Timeline
###Phase 1: User Authentication and JSON API (1 day)
In Phase 1, I will implement user signup and authentication (using BCrypt). There will be a basic landing page after signup that will hold application's root React component. Create basic seed data of reviews/locations for dev and testing.

###Phase 2: Flux Architecture and Reviews CRUD (1 day)
Set up Flux, React Router and React view structure for the main application. ReviewStore for CRUD AJAX request. Basic bootstrap styling for landing pages

###Phase 3: Tagging and Search Functions (3 days)
Create JSON API for locations. Implement tagging feature for each spot, with multiple tags allowed. Google Maps API to location. Locations in ``Index`` will automatically update when map is moved.

###Phase 4: Restroom Ratings and Reviews (2 days)
Detailed restroom location page to show reviews at that particular spot, as well as a location marker placed on a zoomed in Google Maps window

###Phase 5: Recent Reviews and Review of the Day (1 day)
Recent reviews and random restroom location with several reviews listed on side like Yelp's page design

###Phase 6: Landing Page and Navigation Bar (2 days)
Navigation bar stays constant and does not redirect users after logging in/out. Navbar shows user avatar as well as search bar. Landing page also features search bar that user can intially use but navbar search will always be at top of page.

###Phase 6: Styling Cleanup and Seed Data (2 days)
Create more seed data. Add stars to number ratings. Ensure consistency of layout and design logo and perfecting the UI.

##Bonus Features
- [ ] Add photos for restroom location
- [ ] Edit personal profile (profile picture and basic details)
- [ ] Sort restrooms based on distance, review ratings, and number of reviews
