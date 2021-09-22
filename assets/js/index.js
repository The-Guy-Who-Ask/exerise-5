//Declare an empty array
let empty_array = Array()

// Declare an array with more than 5 number of elements 
let five_elemented_array = [1, false, "",9,8,7]

// Find the length of your array 
let lengthed_array = ["length","length1","length2","length3","length4","length5","length6"]
lengthed_array.length // 7

// Get the first item, the middle item and the last item of the array
let array = ["1stitem", "2nditem", "3rditem", "4thitem", "5thitem"]
let length = array.length
array[0]// 0 is always initial value
let lengthed_arr = (length + 1)/2 //for middle value
array[lengthed_arr] // here is middle value '4thitem'
let last_value = array.length
array[last_value-1]// for last value

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let datatyped_array = [1, '2', false, 'hello', 'bye', 'he']
datatyped_array.length // 6

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon 
let companies =  ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'] 

//Print the array using console.log()
console.log(companies)

//Print the number of companies in the array
console.log(companies.length)

//Print the first company, middle and last company
console.log(companies[0]) //initial value
let Lenght = companies.length
let Lengthed_arr = (Lenght+1)/2
console.log(companies[Lengthed_arr]) //for middle value value given upper
let Last_Value = companies.length
console.log(companies[last_value-1]) 

//Print out each company
console.log(companies[0])
console.log(companies[1])
console.log(companies[2])
console.log(companies[3])
console.log(companies[4])
console.log(companies[5])
console.log(companies[6])

//Change each company name to uppercase one by one and print them out
let upper = (companies[0])
let upper1 = (companies[1])
let upper2 = (companies[2])
let upper3 = (companies[3])
let upper4 = (companies[4])
let upper5 = (companies[5])
let upper6 = (companies[6])
console.log(upper.toUpperCase())
console.log(upper1.toUpperCase())
console.log(upper2.toUpperCase())
console.log(upper3.toUpperCase())
console.log(upper4.toUpperCase())
console.log(upper5.toUpperCase())
console.log(upper6.toUpperCase())

//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies. 
let sentence = companies.push('are big it companies')
console.log(companies.toString())
9
//The following is an array of 10 students ages:
//const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//Sort the array and find the min and max age
//Find the median age(one middle item or two middle items divided by two)
//Find the average age(all items divided by number of items)
//Find the range of the ages(max minus min)
//Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
let ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
ages[0]// minimum value which is shortest acc. to sort
ages[ages.length-1] //maximum value is it's last value
let median = ages.length/2
ages[median]// 24 sorted value
let average = (ages[0] + ages[1] + ages[2]+ ages[3] + ages[4] + ages[5] + ages[6] + ages[7] + ages[8] + ages[9])/ages.length-1//21.8
let range = (ages[ages.length-1]) - ages[0] // 7
let avg_min_avg_max = 0-average < ages[ages.length-1]-average //true