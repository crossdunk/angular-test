var app = angular.module('angular_test', []);

app.controller('saveController', function (){
      this.emails = [];
      this.passwrods = [];
      this.email = '';
      this.passwrod = '';

      this.send = function(){
        console.log('cool');
        if(this.email=='' || !this.password=='') {
          alert('Something Is Not Exist');
        }else{
          this.emails.push(email);
          this.passwords.push(password);
        }
      }
      
});