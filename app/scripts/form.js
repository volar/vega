function ContactCtrl($scope, $http) {
  $scope.success = false;
  $scope.httpError = false;
  
  $scope.send = function() {
    var job = { job: { klass: 'msg', args: [$scope.msg]}};
    $http.post('/contact',job).
      success(function(data){
        $scope.success = true;
        $scope.msg = {};
      }).
      error(function(data){
        $scope.httpError = true;
      });
  }
}


div('.span6.offset1', {'
  ng-controller': 'ContactCtrl'
}, function() {
  div('.alert.alert-error', {
    'ng-show': 'httpError'
  }, function() {
    button('.close', {
      'data-dismiss': 'alert'
    }, 'x');
    strong('Error! ');
    return text('An Error occured trying to send message, please contact administrator at admin@charlestoncodes.com');
  });
  div('.alert.alert-success', {
    'ng-show': 'success'
  }, function() {
    button('.close', {
      'data-dismiss': 'alert'
    }, 'x');
    strong('Success! ');
    return text('Thank you for sending your message, we will contact you shortly!');
  });
  return form({
    name: 'contactForm'
  }, function() {
    div('.control-group', {
      'ng-class': "{error: contactForm.name.$invalid}"
    }, function() {
      label('Full Name');
      input('.span4', {
        type: 'text',
        name: 'name',
        'ng-model': 'msg.name',
        required: true,
        placeholder: 'Your Name'
      });
      return span('.help-inline', {
        'ng-show': 'contactForm.name.$error.required'
      }, 'Required');
    });
    div('.control-group', {
      'ng-class': "{error: contactForm.email.$invalid}"
    }, function() {
      label('Email');
      input('.span4', {
        type: 'email',
        name: 'email',
        'ng-model': 'msg.email',
        required: true,
        placeholder: 'you@email.com'
      });
      span('.help-inline', {
        'ng-show': 'contactForm.email.$error.required'
      }, 'Required');
      return span('.help-inline', {
        'ng-show': 'contactForm.email.$error.email'
      }, 'Not a Email');
    });
    div('.control-group', {
      'ng-class': '{error: contactForm.message.$invalid}'
    }, function() {
      label('Message');
      textarea('.span4', {
        rows: 5,
        name: 'message',
        'ng-model': 'msg.body',
        required: true
      });
      return span('.help-inline', {
        'ng-show': 'contactForm.message.$error.required'
      }, 'Required');
    });
    return button('.btn.btn-primary.btn-large', {
      'ng-click': "send()",
      'ng-disabled': 'contactForm.$invalid'
    }, 'Send');
  });
});
RunLink