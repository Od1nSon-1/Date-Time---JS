//Function Declaration 
function getName3(name) {
	console.log("My name - " + name)
}

//Function Expression 
const getName2 = function (name) {
	return name
}


//Существуют 2 способа определения функции
// Первый способ дает вызвать функцию до ее определения
// Второй способ же такого не дает


//методы задания времени функции 
setTimeout(function () {
	getName("daniil")
}, 1500) //временной промежуток 1.5 секунды



//смысл заключается в постоянном вызыве функции через заданное время 
let counter = 0
const interval = setInterval(function () {
	if (counter === 5) {
		clearInterval(interval)
	} else {
		console.log(++counter)
	}
}, 1000)

//Arrow Functions 
function getName(name) {
	console.log("My name - " + name)
}

const arrow = (name) => console.log("My name - " + name)

arrow('daniOl')


const arrow2 = (name, age, size) => console.log("My name - " + name + ' ' + age + " " + size)
arrow2("oleg", 21, 234)

const pow2 = (num, exp) => Math.pow(num, exp)
console.log(pow2(2, 5))


//Default paramets


const yearPerson = (date = "январь", age = 18) => console.log(date, age)

yearPerson()


//ОПЕРАТОР РЕСТ используется когда значения которые должны прибыть вводятся сразу в массив 
function getSum(...numbers) {
	//простой способ записи
	// let k = 0
	// for (const num of numbers) {
	// 	k += num
	// }
	// return k

	// Продвинутый способ записи
	return numbers.reduce((acc, num) => acc + num, 0)
}

console.log(getSum(1, 2, 3, 4, 5, 6, 7, 8, 110))


// Замыкание

function getFirstName(name) {
	return function (lastname) {
		console.log(name + ' ' + lastname)
	}
}

const addLastName = getFirstName("Daniil")

addLastName('Karev')
addLastName('Kaev')