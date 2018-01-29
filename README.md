# ghost-contact
Add a contact form to the Ghost CMS

ATTENTION: this is super, super old and was tested with Ghost 0.7, I think. This will probably not work with newer versions of Ghost without tweaking.

## Use
Add the controller and route to the appropriate files (`ghost/core/server/controllers/frontend/index.js` and `ghost/core/server/routes/frontend.js`)
This sets up a controller to handle `application/x-www-form-urlencoded` data sent to the server, and the route to listen on.

All you need then is the appropriate markup and, optionally, some Javascript code on the frontend to handle the form submission by ajax.
