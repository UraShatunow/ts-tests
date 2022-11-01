interface id {
	id: number
}

function sortId<T extends id>(data: T[], type: 'asc' | 'desc' = 'asc'): T[] {

	return data.sort((a, b) => {
		switch (type) {
			case 'asc':
				return a.id - b.id;
			case 'desc':
				return b.id - a.id;
		}
	});

}

const data = [
	{ id: 1, name: 'Вася' },
	{ id: 2, name: 'Петя' },
	{ id: 3, name: 'Надя' },
];

console.log(sortId(data, 'desc'));
console.log(sortId(data));