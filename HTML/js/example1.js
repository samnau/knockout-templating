myViewModel = {
		type : ko.observable('man'),
		mood : ko.observable('happy'),
		getMoody: ko.observable(false),
		multiType : ko.observable('0'),
		templateTypes: ['man','monkey','monster','mushroom'],
		moodTypes : ['happy','sad','angry','jealous','sleepy','hungry', 'eeeeeevil!!'],
		members : [
			{
				name: 'Harvey',
				type: ko.observable('man'),
				mood : ko.observable('happy')
			},
			{
				name: 'Simon',
				type: ko.observable('monkey'),
				mood : ko.observable('eeeeeevil!!')
			},
			{
				name: 'Jarvis',
				type: ko.observable('monster'),
				mood : ko.observable('hungry')
			},
			{
				name: 'Alvin',
				type: ko.observable('man'),
				mood : ko.observable('jealous')
			}
		]
	}
	
	jQuery(function($) {
		ko.applyBindings(myViewModel);
 	 });