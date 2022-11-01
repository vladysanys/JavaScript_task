
// Массив
const array = [2,6,15,8,31,9,0,5,1,0]
// Math.min математический метод перебора массива который находит наименьшее число
const minValue = Math.min(...array)
// Счетчик минимальных чисел в массиве
let sum = 0
// Индекс минимального первого числа
let index = array.indexOf(minValue)
// массив куда добавляются индексы минимальных чисел
let indexMinValue = []
// Цикл и сравнение которое вычисляет кол-во минимальных чисел
for (let i = 0; i < array.length;i++) {
    if(minValue === array[i]) {
        sum += 1
    }
}
// цикл для нахождения индексов минимальных чисел
while (index != -1) {
    indexMinValue.push(index)
    index = array.indexOf(minValue, index + 1)
}
console.log(`Минимальное число в данном массиве ${minValue}`)
console.log(`Кол-во минимальных чисел в массиве ${sum}`)
console.log(`Индексы наименьших чисел равны: ${indexMinValue}`)


// // Массив
const array = [2,6,15,8,31,9,0,31,1,0]
console.log(`Необработанный массив: ${array}`)
// Нахождение максимального числа
const maxValue = Math.max(...array)
// Перебор масива методом forEach и замены с помощью сравнения максимальных чисел на ноль
array.forEach(function(item,i,arr) {
    if(array[i] === maxValue) {
        array[i] = 0
    }
})
//  Вывод обработанного массива
console.log(`Обработанный массив: ${array}`)


// // Массив
const array = [2,6,15,8,31,9,1,31,1,7]
// Нахождения минимальных чисел
const minValue = Math.min(...array)
//  Перебор массива и замена чисел на противоположные
array.forEach(function(item,i,arr){
    if(minValue === array[i]) {
        array[i] = array[i] * -1
    }
})
// Отработанный массив
console.log(array)

// // Массив
const array = [2,6,15,8,31,9,1,1,1,7]
// Нахождение максимального числа
let maxValue = Math.max(...array)
// Нахождение индекса максимального числа
let indexMax = array.indexOf(maxValue)
// Функция меняющая местами нужные мне числа по индексу
function swap(arr, a, b) {
    arr[a] = arr.splice(b, 1, arr[a])[0];
  }
// Изменение мест
swap(array, indexMax, 0)
// Итог
console.log(array)


// Массив
const array = [2,6,15,8,31,9,0,5,1,0]
// Новый массив без максимального числа
const newArray = []
// Нахождение максимального числа
const maxValue = Math.max(...array)
// Перебор массива для наполнения нового массива, без максимального числа
array.forEach(function(item,i,arr) {
    if(maxValue === array[i]) {
    } else {
        newArray.push(array[i])
    }
})
// Итог
console.log(newArray)



// Массив
const array = [2,6,15,8,31,9,1,5,1,0]
// Нахождение минимального числа
const minValue = Math.min(...array)
// Нахождение индекса минимального числа
const index = array.indexOf(minValue)
// Вывод индекса в консоль
console.log(`индекс первого минимального числа: ${index}`)


// Массив
const array = [2,6,15,8,31,9,1,5,31,0]
// Нахождение максимального числа
const maxValue = Math.max(...array)
// Индекс максимального числа
let index = array.indexOf(maxValue)
// Пустой массив для содержания в нем индекса
let indexMinValue = []
// Цикл по нахождению индексов максимальных чисел
while (index != -1) {
        indexMinValue.push(index)
        index = array.indexOf(maxValue, index + 1)
    }
// Нахождения индекса последнего числа
let mainIndex = indexMinValue.pop()
// Вывод
console.log(`Вывод последнего максимального числа: ${mainIndex}`)

// Массив
const array = [20,0,15,8,31,90,2,5,9,0]
// Минимальное число
const minValue = Math.min(...array)
// Индекс минимального числа
const indexMin = array.indexOf(minValue)
// максимальное число
const maxValue = Math.max(...array)
// Индекс максимального числа
const indexMax = array.indexOf(maxValue)
let sum = indexMax - indexMin - 1
let sumOfArray = array.splice(indexMin + 1,sum)
let sumMain = 0

if(sum < 0) {
    console.log('К сожалению мы не можем посчитать такую сумму так как максимальное число раньше минимального:(')
} else {
    for(let i = 0;i<sumOfArray.length;i++) {
        sumMain += sumOfArray[i]
    }
    console.log(sumMain)
}


// Массив
const array = [2,6,15,8,31,9,1,5,31,0]
// Нахождение максимального числа
const maxValue = Math.max(...array)
// Индекс максимального числа
let index = array.indexOf(maxValue)
// Пустой массив для содержания в нем индекса
let indexMinValue = []
// Цикл по нахождению индексов максимальных чисел
while (index != -1) {
        indexMinValue.push(index)
        index = array.indexOf(maxValue, index + 1)
    }
// Нахождения индекса последнего числа
let mainIndex = indexMinValue.pop()
// Вывод
console.log(`Вывод последнего максимального числа: ${mainIndex}`)


// Массив
const array = [2,6,15,8,31,9,1,5,1,0]
// Нахождение мамксимального числа
const maxValue = Math.max(...array)
// Нахождение индекса максимального числа
const index = array.indexOf(maxValue)
// Вывод индекса в консоль
console.log(`Индекс первого максимального числа: ${index}`)

// Массив
const array = [2,6,15,8,31,9,1,5,31,0]
// Нахождение минимального числа
const minValue = Math.min(...array)
// Индекс минимального числа
let index = array.indexOf(minValue)
// Пустой массив для содержания в нем индекса
let indexMinValue = []
// Цикл по нахождению индексов минимальных чисел
while (index != -1) {
        indexMinValue.push(index)
        index = array.indexOf(minValue, index + 1)
    }
// Нахождения индекса последнего числа
let mainIndex = indexMinValue.pop()
// Вывод
console.log(`Вывод последнего минимального числа: ${mainIndex}`)
