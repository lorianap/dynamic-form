
angular.module("myApp", ['ngMaterial', 'ngMessages'])

.controller("repeatController", function($scope) {
    $scope.loanPurpose = [
        {value:'debt_consolidation', id:'debt_consolidation', icon:'./Icons/debt_consolidation.svg', label:'DEBT CONSOLIDATION', link: '#Amount'},
        {value:'home_improvement', id:'home_improvement', icon:'./Icons/home_improvement.svg', label:'HOME IMPROVEMENT', link: '#Amount'},
        {value:'emergency_cash', id:'emergency_cash', icon:'./Icons/emergency_cash.svg', label:'EMERGENCY CASH', link: '#Amount'},
        {value:'vehicle', id:'vehicle', icon:'./Icons/vehicle.svg', label:'VEHICLE COSTS', link: '#Amount'},
        {value:'utility_bill', id:'utility_bill', icon:'./Icons/utility_bill.svg', label:'BILL or TAXES', link: '#Amount'},
        {value:'special_occasion', id:'special_occasion', icon:'./Icons/special_occasion.svg', label:'SPECIAL OCCASION', link: '#Amount'},
        {value:'household_goods', id:'household_goods', icon:'./Icons/household_goods.svg', label:'HOUSEHOLD EXPENSES', link: '#Amount'},
        {value:'rent_mortgage', id:'rent_mortgage', icon:'./Icons/rent_mortgage.svg', label:'COVER RENT or MORTAGE', link: '#Amount'},
        {value:'living_expense', id:'living_expense', icon:'./Icons/living_expense.svg', label:'LIVING EXPENSES', link: '#Amount'},
        {value:'other', id:'other', icon:'./Icons/other.svg', label:'OTHER', link: '#Amount'},
      ];
      $scope.loanAmount = [
        {value:100, icon:'', label:'100$', link: '#Duration'},
        {value:200, icon:'', label:'200$', link: '#Duration'},
        {value:400, icon:'', label:'400$', link: '#Duration'},
        {value:500, icon:'', label:'500$', link: '#Duration'},
        {value:700, icon:'', label:'700$', link: '#Duration'},
        {value:1000, icon:'', label:'1000$', link: '#Duration'},
        {value:1200, icon:'', label:'1200$', link: '#Duration'},
        {value:1400, icon:'', label:'1400$', link: '#Duration'},
        {value:1700, icon:'', label:'1700$', link: '#Duration'},
        {value:2000, icon:'', label:'2000$', link: '#Duration'},
      ];
      $scope.loanDurationMonths = [
        {value:1, icon:'', label:'1 Month', link: '#Personal'},
        {value:2, icon:'', label:'2 Months', link: '#Personal'},
        {value:3, icon:'', label:'3 Months', link: '#Personal'},
        {value:4, icon:'', label:'4 Months', link: '#Personal'},
        {value:5, icon:'', label:'5 Months', link: '#Personal'},
        {value:6, icon:'', label:'6 Months', link: '#Personal'},
        {value:10, icon:'', label:'10 Months', link: '#Personal'},
        {value:12, icon:'', label:'12 Months', link: '#Personal'},
        {value:18, icon:'', label:'18 Months', link: '#Personal'},
        {value:24, icon:'', label:'24 Months', link: '#Personal'},
      ];
      $scope.titles = ['Mr', 'Mrs', 'Miss', 'Ms'];
      $scope.selectedTitle = undefined;

      $scope.getSelectedText = function () {
          if ($scope.selectedTitle !== undefined) {
            return $scope.selectedTitle;
          } else {
            return "Please select an title";
          }
      };
      
      $scope.client = {
        firstName: '',
        lastName: '',
        numberofDependents: '',
        email: 'ipsum@lorem.com',
        homephone: '',
        mobilephonr:'',
        postalCode: 'Google',
        housenumber: '1234',
        street: '10 Mountain Drive',
        city: 'Manchester',
        county: 'UK'
      };
      

      $scope.Value = function(button) {
         /* alert(button.value); */
        $scope.list = button.value;
      };

    
})
.controller('AppCtrl', function() {
  this.dob = new Date();

  this.minDate = new Date(
    this.dob.getFullYear(),
    this.dob.getMonth() - 2,
    this.dob.getDate()
  );

  this.maxDate = new Date(
    this.dob.getFullYear(),
    this.dob.getMonth() + 2,
    this.dob.getDate()
  );
  
});



/* myApp.controller('FormController', function($scope) {
  it('should execute ng-click and change url when ng-href specified', function() {
  expect(element(by.id('debt_consolidation')).getAttribute('href')).toMatch(/\/personal-loans$/);

  element(by.id('debt_consolidation')).click();

  // At this point, we navigate away from an AngularJS page, so we need
  // to use browser.driver to get the base webdriver.

  browser.wait(function() {
    return browser.driver.getCurrentUrl().then(function(url) {
      return url.match(/\/link$/);
    });
  }, 5000, 'page should navigate to /123');
});

it('should execute ng-click but not reload when href empty string and name specified', function() {
  element(by.id('home_improvement')).click();
  expect(element(by.model('value')).getAttribute('value')).toEqual('home_improvement');
  expect(element(by.id('link-4')).getAttribute('href')).toBe('');
});

}); */