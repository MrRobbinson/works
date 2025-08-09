const users = [
	{
		name: 'Alex',
		age: 20,
		isAdmin: false
	},
	{
		name: 'Oleg',
		age: 32,
		isAdmin: true
	},
	{
		name: 'Danil',
		age: 29,
		isAdmin: true
	},
	{
		name: 'Vito',
		age: 27,
		isAdmin: false
	},
	{
		name: 'Misha',
		age: 23,
		isAdmin: true
	}
]

let ordinaryUsersCount = 0;

for (let i = 0; i < users.length; i++) {
	if (users[i].isAdmin === false) {
		ordinaryUsersCount = ordinaryUsersCount + 1;
	}
}
console.log('обычные пользователели: ' + ordinaryUsersCount);