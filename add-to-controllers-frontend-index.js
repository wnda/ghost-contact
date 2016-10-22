// var 
// ...
    mailer              = require('../../mail'),
    htmlToText          = require('html-to-text'),
    
//  ...

frontendControllers = {

//  ...

  submitContactForm: function (req, res) {
      var formHoneypot = req.body.confirm, // this will be from a hidden input field in your contact form markup
          formName     = req.body.name,    // the sender's name
          formEmail    = req.body.email,   // sender's email address
          formBody     = htmlToText.fromString( req.body.text, { wordwrap: 120 } ), // sanitize/parse input
          emailPattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
          bodyPattern  = /.{5,500}/g,
          namePattern  = /.{1,40}/g,
          valEmail     = emailPattern.test( formEmail ),
          valBody      = bodyPattern.test( formBody ),
          valName      = namePattern.test( formName );

      if (!valEmail || !valBody || !valName || formHoneypot.length > 0 || formHoneypot != "") {
          
          res.redirect('/contact-error');
          
      } else {

          var mailOptions = {
              from: formEmail,
              to: 'someone@somewhere.com', // your email address goes here
              subject: 'New submission from: ' + formName,
              html: formBody + '<br /> From: <b>' + formName + '</b> (' + formEmail + ')'
          };

          mailer.send(mailOptions).then(function(data) {
          
              res.redirect('/contact-success/');
              
          }).error(function(error){
              
              res.redirect('/contact-error/');
          
          });
      }
  },
  
//  ...

};
