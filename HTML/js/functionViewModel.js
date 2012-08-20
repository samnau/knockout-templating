function myViewModel() {
    this.firstName = ko.observable('Bob');
    this.lastName = ko.observable('Smith');
}

ko.applyBindings(myViewModel);