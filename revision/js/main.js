var user = {
	firstName: 'John',
	lastName: 'Doe',
	age: 41,
	isMissingRightArmDueToFrostBite: true,
	song: {
		title: 'Some country song about a dead dog',
		artist: 'A guy with a sister that is his mother'
	},
	children: [{
		firstName: 'Ray',
		lastName: 'Doe',
		age: 2
	}, {
		firstName: 'Me',
		lastName: 'Doe',
		age: 17
	}]
}

console.log(user);
console.log( name(user) );
console.log(user.children);
console.log(user.children[0]);
console.log( name(user.children[0]) );

function name(person) {
	return person.firstName + ' ' + person.lastName
}