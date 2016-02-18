 div '.span6.offset1', 'ng-controller': 'ContactCtrl', ->
    div '.alert.alert-error', 'ng-show': 'httpError', ->
      button '.close', 'data-dismiss': 'alert', 'x'
      strong 'Error! '
      text 'An Error occured trying to send message, please contact administrator at admin@charlestoncodes.com'
    div '.alert.alert-success', 'ng-show': 'success', ->
      button '.close', 'data-dismiss': 'alert', 'x'
      strong 'Success! '
      text 'Thank you for sending your message, we will contact you shortly!'
    form name: 'contactForm', ->
      div '.control-group', 'ng-class': "{error: contactForm.name.$invalid}", ->
        label 'Full Name'
        input '.span4', type: 'text', name: 'name', 'ng-model': 'msg.name', required: true, placeholder: 'Your Name'
        span '.help-inline', 'ng-show': 'contactForm.name.$error.required', 'Required'
      div '.control-group', 'ng-class': "{error: contactForm.email.$invalid}", ->
        label 'Email'
        input '.span4', type: 'email', name: 'email', 'ng-model': 'msg.email', required: true, placeholder: 'you@email.com'
        span '.help-inline', 'ng-show': 'contactForm.email.$error.required', 'Required'
        span '.help-inline', 'ng-show': 'contactForm.email.$error.email', 'Not a Email'
      div '.control-group', 'ng-class': '{error: contactForm.message.$invalid}', ->
        label 'Message'
        textarea '.span4', rows: 5, name: 'message', 'ng-model': 'msg.body', required: true
        span '.help-inline', 'ng-show': 'contactForm.message.$error.required', 'Required'
      button '.btn.btn-primary.btn-large', 'ng-click': "send()", 'ng-disabled': 'contactForm.$invalid', 'Send'