// const now = new Date()

//Данныйй объект дает нам возможность работы с временем изменяя его, а также получая из него значения

// console.log(now.getTime())
// console.log(now.getFullYear())
// console.log(now.getDate())
// console.log(now.getMonth())
// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(now.getMilliseconds())

// также можно задавать занчения с помощью функции setTime setDate

//Конкретное обращение к дате и времени

// console.log(now.toDateString())//ОБЫЧНАЯ ДАТА
// console.log(now.toLocaleDateString())// СОКРАЩЕННАЯ
// console.log(now.toTimeString())// ОБЫЧНОЕ ВРЕМЯ
// console.log(now.toLocaleTimeString())// СОКРАЩЕННОЕ ВРЕМЯ  С КОТОРЫМ УДОБНЕЕ РАБОТАТЬ


let mode = 'time'
const input = document.getElementById("output")
const fullDateBtn = document.getElementById("full")
const dateBtn = document.getElementById('date')
const timeBtn = document.getElementById('time')
const nowTime = new Date()

//Использование замыкания
function bindMode(nameMod) {
	return function () {
		mode = nameMod
		update()
	}
}

fullDateBtn.onclick = bindMode('full')
dateBtn.onclick = bindMode('date')
timeBtn.onclick = bindMode('time')

setInterval(update, 1000)
update()

function update() {
	input.textContent = format(mode)
}

//Работа со swich case 
function format(formatName) {
	const now = new Date()
	switch (formatName) {
		case 'time': return now.toLocaleTimeString()
		case 'date': return now.toLocaleDateString()
		case 'full': return now.toLocaleDateString() + ' ' + now.toLocaleTimeString()
		default:
			return now.toLocaleTimeString()
	}
}
