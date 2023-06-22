type Chore = {
	time: number;
	frequency: Frequency;
	weight: number;
}

enum Frequency {
	Daily,
	Weekly,
	Monthly,
	Yearly,
}

const chore:Chore = {
	time: 30,
	frequency: 2,
	weight: 10,
}

console.log(chore)
