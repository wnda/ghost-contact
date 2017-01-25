# ghost-contact
Add a contact form to the Ghost CMS

## Use
Add the controller and route to the appropriate files (`ghost/core/server/controllers/frontend/index.js` and `ghost/core/server/routes/frontend.js`)
This sets up a controller to handle `application/x-www-form-urlencoded` data sent to the server, and the route to listen on.

All you need then is the appropriate markup and, optionally, some Javascript code on the frontend to handle the form submission by ajax.
