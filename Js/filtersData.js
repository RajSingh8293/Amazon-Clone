// const data = [
// 	{


// 	}

// ]

const category = [

	{ value: "Jeans", lable: "Jenas" },
	{ value: "Shirt", lable: "Shirt" },
	{ value: "T-Shirt", lable: "Jacket" },
	{ value: "Jacket", lable: "Jacket" },
	{ value: "Top", lable: "Top" },
	{ value: "Hoody", lable: "Hoody" }
]

const colors = [

	{ value: "red", lable: "Red" },
	{ value: "yellow", lable: "Yellow" },
	{ value: "green", lable: "Green" },
	{ value: "white", lable: "White" },
	{ value: "black", lable: "Black" },
	{ value: "orange", lable: "Orange" }
]
const prices = [

	{ value: "100-500", lable: "$100 To $500" },
	{ value: "500-1000", lable: "$500 To $1000" },
	{ value: "1000-1500", lable: "$1000 To $1500" },
	{ value: "1500-2000", lable: "$1500 To $2000" },
	{ value: "2000-2500", lable: "$2000 To $2500" },
	{ value: "2500-3000", lable: "$2500 To $3000" },
	{ value: "3000-4000", lable: "$3000 To $4000" }
]

let getCategory = ''
category.forEach((value) => {
	getCategory += `<div class='filtersDiv'><input type='checkbox' value=${value.value} ><p class='filtersValues'> ${value.lable}</p></div>`
	// console.log(getCategory);
	return document.getElementById('filtersCategory').innerHTML = getCategory
})

let getColors = ''
colors.map((value) => {
	getColors += `<div class='filtersDiv'><input type='checkbox' value=${value.value} ><p class='filtersValues' > ${value.lable}</p></div>`
	// console.log(getCategory);
	return document.getElementById('filtersColors').innerHTML = getColors
})

let getPrices = ''
prices.map((value) => {
	getPrices += `<div class='filtersDiv'><input type='checkbox' value=${value.value} ><p class='filtersValues' > ${value.lable}</p></div>`
	return document.getElementById('filtersPrice').innerHTML = getPrices
})