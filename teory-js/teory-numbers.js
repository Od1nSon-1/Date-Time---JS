const num = 42 //number 
const float = 3.1 //number 
const pow = 10e3 // добавляет к числу количество нулей указанное

console.log(Number.MAX_SAFE_INTEGER) // МАКСИМАЛЬНОЕ БЕЗОПАСНОЕ ЧИСЛО ДЛЯ РАБОТЫ 
console.log(Number.MIN_SAFE_INTEGER) // Минимальнгое безопавсное число для работы 
console.log(Math.pow(2, 4))//Возведение в степень 
console.log(Number.MAX_VALUE) // Максимальное число бытия 
console.log(Number.POSITIVE_INFINITY) //Положительная бесконечность 
console.log(Number.NEGATIVE_INFINITY)// Негативная бесконечность 
console.log(1 / 0)
console.log(Number.isFinite(1 / 0)) // проверка на бесконечность 
console.log(Number.isNaN(1 / undefined)) // проверка на NaN


//Парсинг чисел способы

const strInt = 21
const srtFloat = 21.21
//1 Cпособ : 
console.log("Number", Number(strInt))
console.log("Number", Number(srtFloat))
//2 Cпособ :
console.log("parseInt", parseInt(strInt))
console.log("parseFloat", parseFloat(srtFloat))
//3 Cпособ : 
console.log("+", +strInt, +srtFloat)

console.log(+(0.1 + 0.2).toFixed(1)) //Метод toFixed убирает значения после запятой

//BigInt
//Используется при работе с большими числами не имеет плавающей точки это отдельные тип данных bigint

// console.log(Number.MAX_SAFE_INTEGER + 1231232134) // не имеет смысла без бигинта потому что это самое максимальное безопасное число 
console.log(BigInt(Number.MAX_SAFE_INTEGER) + 1231232134n)
console.log(parseInt(10n) - 5)
console.log(10n - BigInt(4))
console.log(5n / 2n) // будет 2n так как bigint не распознает числа с плавающей точкой
const a = [1, 2, 3, 2, 3, 23, 2]

// Реализация объекта Math 
console.log(Math.pow(2, 8))
console.log(Math.sqrt(144))
console.log(Math.PI)
console.log(Math.E)
console.log(Math.abs(-34))
console.log(Math.max.apply(null, a))
console.log(Math.min.apply(null, a))

let numFloat = 6.7
console.log(Math.floor(numFloat))//Округляет в Меньшую сторону
console.log(Math.ceil(numFloat))//Округляет в Большую сторону
console.log(Math.round(numFloat))//Округляет в сторону дробной части если 5 то в большую если нет то в меньшую 
console.log(Math.trunc(numFloat))// Округляет отбарсыванием части после запятой

console.log(Math.round(Math.random() * 10000))


// Если нужен диапазон рандомных чисел изпользуем вот такой способ

function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log(getRandomNumber(10, 100))