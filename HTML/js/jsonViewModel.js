var myViewModel = {
    firstName : ko.observable('Bob'),
    lastName : ko.observable('Smith')
}

	jQuery(function($) {
		ko.applyBindings(myViewModel);
 	 });