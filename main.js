// // khai báo biến
// var fullName = 'Tran Manh Cuong';
// var age = '20';

// // goi ham thong bao
// alert(fullName);
// alert(age);
// console.warn(fullName)
// confirm('Xac nhan ban du tuoi')
// prompt('So dien thoai')
// setTimeout(function () {
//     alert('Thong bao')
// }, 1000)



// var a = 1 + 2;
// console.log(a)
// var fullName = 'Tran Manh Cuong';
// var a = 1;
// var b = 2;

// if (a == b) {
//     console.log('Dung')
// }


// var a = 1;
// var b = 2;
// var c = a + b;
// var d = a - b;
// var e = a ** b;
// var f = a / b;
// var g = a % b;
// ++a;
// alert(a);

// var a = 1;
// var b = 2;
// console.log(a-=b);
// var number = 6;
// var output = number++ * 2 - --number * 2;
// console.log("output: ",output)

// var firstName = 'Cuong';

// var lasrName = 'Tran';
// console.log(firstName + ' ' + lasrName)


// var a = 1;
// var b = 2;
// if (a < b) {
//     console.log('Dieu kien dung!')
// } else {
//     console.log('Dieu kien sai!')
// }

// var isSuccess = true;
// console.log(isSuccess)
// var isSuccess = 1 < 2;
// if(isSuccess) {
//     alert("Dung")
// } else {
//     alert("Sai")
// }

// var a = 1;
// var b = 2;
// var c = 3;
// if (a > 0 && b < 0 ) {
//     alert("Dung")
// }


/**
 * ===
 * !==
 */

// var a = 1;
// var b = '1';
// console.log(a==b)
// function writeLog() {
//     var myString = '';
//     for(var param of arguments) {
//         myString += `${param} -`
//     }
//     console.log(myString)
// }
// writeLog('log1','log2','log3')
// function cong(a, b) {
//     return a + b;
// }

// var result = cong(2,8)
// console.log(result)

// showMessage();
// function showMessage() {
//     console.log('Hello')
// }

// var showMessage2 = function() {
//     console.log('hi')
// } 
// showMessage2();

// var fullName = 'Tran Manh Cuong';
// var fullName = 'Tran Cuong la \'sieu nhan\''
// console.log(fullName.length)
// var firstName = 'Tran';
// var lasrName = 'Cuong';
// console.log('Toi la:' + ' ' + firstName + ' ' + lasrName)
// console.log(`Toi la: ${firstName} ${lasrName}`)

// var myString = '  Truong dai hoc mo dia chat   '
// console.log(myString.length);
// console.log(myString.indexOf('ccc'))
// console.log(myString.slice(7))
// console.log(myString.replace('Truong', 'TRUONG'))
// console.log(myString.toLocaleUpperCase());
// console.log(myString.toLocaleLowerCase())
// console.log(myString.trim().length)
// var languages = 'js, html, css'
// console.log(languages.split(', '))
// console.log(myString.charAt(7))

// var languages = [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ]

// console.log(languages)
// var languages = [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ]
// // console.log(languages.toString());
// // console.log(languages.join(', '))
// // console.log(languages.pop())
// console.log(languages.push('Dart'))
// console.log(languages.shift())
// languages.splice(1,1)
// console.log(languages)

// var date = 8;
// // if (date === 2) {
// //     console.log("hom nay la thu 2");
// // } 
// // if (date === 3) {
// //     console.log("hom nay la thu 3");
// // } 
// // if (date === 4) {
// //     console.log("hom nay la thu 4");
// // } 

// switch(date) {
//     case 2:
//         console.log("Hom nay la thu 2");
//         break;
//     case 3:
//         console.log("Hom nay la thu 3");
//         break;
//     case 4:
//         console.log("Hom nay la thu 4");
//         break;
//     case 5:
//         console.log("Hom nay la thu 5");
//         break;
//     default:
//         console.log("Khong biet");
// }

// function getRandNumbers(min,max,length) {
//     var array = [];
//     for(var i = 0;i < length; i++) {
//         array[i] = Math.random() * (max - min) + min; 
//     }
//     return array;
// }

// var result = getRandNumbers(5,10,3);
// console.log(result);

// var myArray = [
//     'Javascript',
//     'php',
//     'Ruby',
//     'Java',
//     'Python'
// ]
// var arrayLength = myArray.length;
// for (var i = 0; i < arrayLength; i++) {
//     console.log(myArray[i])
// }

// var myInfo = {
//     name: 'Son Dang',
//     age: 18,
//     address: 'Ha noi, HN'
// }
// for(var key in myInfo) {
//     console.log(key)
// }
// console.log(Object.keys(myInfo))
// var i = 0;
// while(i < 100) {
//     i++;
//     console.log(i)
// }
// var myArray = [
//     'java',
//     'php'
// ]
// var i = 0;
// while (i < myArray.length) {
//     console.log(myArray[i])
//     i++
// }
// var isSuccess = false;
// var i = 0;
// do {
//     i++;
//     console.log("Nap the lan " + i);
//     if (false) {
//         isSuccess = true;
//     }
// } while (!isSuccess && i <= 3);
// var myArray = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ]
// for(var i = 0; i < myArray.length; i++) {
//     for(var j = 0;j < myArray[i].length;j++){
//         console.log(myArray[i][j])
//     }
// }

// for(var i = 100; i > 0; i--) {
//     console.log(i)
// }
// for (i = 0; i <= 100;i += 5) {
//     console.log(i)
// }
// for(var i = 1; i <= 100; i++) {
//     console.log(i)
// }
// for(var i = 100; i > 0; i -= 5) {
//     console.log(i)
// }

var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'Html, Css',
        coin: 0
    },
    {
        id: 3,
        name: 'PHP',
        coin: 0
    },
    {
        id: 4,
        name: 'Ruby',
        coin: 250
    },
    {
        id: 5,
        name: 'Java',
        coin: 500
    }
];
// var isFree = courses.some(function (course, index) {
//     console.log(index)
//     return course.coin == 0;
// });
// console.log(isFree)

// var newCouress = courses.map(function coreHandler(course, index, originArray) {
//     // console.log(course)
//     return `<h2>${course.name}</h2>`
// })
// console.log(newCouress.join(' '))
// var totalCoin = 0;
// for(var course of courses) {
//     totalCoin += course.coin;

// }
// console.log(totalCoin)

// function coinHandler (accumulator, currentValue) {
   
//     // console.table({
//     //     'Luot chay: ': i,
//     //     'Bien tich tru: ': accumulator,
//     // })
//     // console.log(currentValue)
//     // console.log(currentIndex)
//     // console.log(originArray)
//     return accumulator + currentValue.coin
// }
// var totalCoin = courses.reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue.coin
// }, 0) 
// console.log(totalCoin)
// var totalCoin = courses.reduce(function(total, course) {
//     return total + course.coin
// }, 0)
// console.log(totalCoin)
// var numbers = [100, 200, 0, 0, 500]
// var totalCoin = numbers.reduce(function (total, number) {
//     return total + number
// })
// console.log(totalCoin)

// var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

// var flatArray = depthArray.reduce(function(flatOutput, depItem) {
//     return flatOutput.concat(depItem)
// }, [])
// console.log(flatArray)

// var watchList = [
//     {
//       "Title": "Inception",
//       "Year": "2010",
//       "Rated": "PG-13",
//       "Released": "16 Jul 2010",
//       "Runtime": "148 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Christopher Nolan",
//       "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//       "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//       "Language": "English, Japanese, French",
//       "Country": "USA, UK",
//       "imdbRating": "8.8",
//       "imdbVotes": "1,446,708",
//       "imdbID": "tt1375666",
//       "Type": "movie",
//     },
//     {
//       "Title": "Interstellar",
//       "Year": "2014",
//       "Rated": "PG-13",
//       "Released": "07 Nov 2014",
//       "Runtime": "169 min",
//       "Genre": "Adventure, Drama, Sci-Fi",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan, Christopher Nolan",
//       "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//       "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//       "Language": "English",
//       "Country": "USA, UK",
//       "imdbRating": "8.6",
//       "imdbVotes": "910,366",
//       "imdbID": "tt0816692",
//       "Type": "movie",
//     },
//     {
//       "Title": "The Dark Knight",
//       "Year": "2008",
//       "Rated": "PG-13",
//       "Released": "18 Jul 2008",
//       "Runtime": "152 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//       "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//       "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//       "Language": "English, Mandarin",
//       "Country": "USA, UK",
//       "imdbRating": "9.0",
//       "imdbVotes": "1,652,832",
//       "imdbID": "tt0468569",
//       "Type": "movie",
//     },
//     {
//       "Title": "Batman Begins",
//       "Year": "2005",
//       "Rated": "PG-13",
//       "Released": "15 Jun 2005",
//       "Runtime": "140 min",
//       "Genre": "Action, Adventure",
//       "Director": "Christopher Nolan",
//       "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//       "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//       "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//       "Language": "English, Urdu, Mandarin",
//       "Country": "USA, UK",
//       "imdbRating": "8.3",
//       "imdbVotes": "972,584",
//       "imdbID": "tt0372784",
//       "Type": "movie",
//     },
//     {
//       "Title": "Avatar",
//       "Year": "2009",
//       "Rated": "PG-13",
//       "Released": "18 Dec 2009",
//       "Runtime": "162 min",
//       "Genre": "Action, Adventure, Fantasy",
//       "Director": "James Cameron",
//       "Writer": "James Cameron",
//       "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//       "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//       "Language": "English, Spanish",
//       "Country": "USA, UK",
//       "imdbRating": "7.9",
//       "imdbVotes": "876,575",
//       "imdbID": "tt0499549",
//       "Type": "movie",
//     }
//   ];
//   function calculateRating(watchList) {
//     var list = watchList.filter(function (arry) {
//       return arry.Director == 'Christopher Nolan'
//     } )
//     console.log(list)
//     var soucre = list.reduce(function(a, b) {
//       return a + parseFloat(b.imdbRating)
//     }, 0)
//     return soucre / list.length
//   }
  
  
  
//   // Expected results
//   console.log(calculateRating(watchList)); // Output: 8.675
// const number = [1, 2, 3, 4, 5]
// const result = number.reduce(function (total, number) {
//   return total + number;
// }, 0)
// console.log(result) 

// function myFunction(param) {
//     if (typeof param === 'function') {
//         param('hoc lap trinh')

//     }
// }
// myFunction(123)
// function myCallback (value) {
//     console.log('value:', value)
// }
// myFunction(myCallback)
// Array.prototype.map2 = function(callback) {
//     var output= []
//     var arrayLength = this.length;
//     for(var i = 0; i  < arrayLength; i++) {
//      var result =   callback(this[i],i)
//      output.push(result)
//     }
//     return output
// }


// var courses = [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ]

// var htmls = courses.map2(function (course, index) {
//     return `<h2>${course}<h2>`
// })

// console.log(htmls.join(' '))

// var htmls = courses.map2(function(course) {
//     return `<h2>${course}<h2>`
// });
// console.log(htmls.join(' '))

// var courses = [
//     'Javascript', 
//     'PHP'
// ];

// courses.length = 10;
// for (var index in courses) {
//     console.log(courses[index])
// }
// Array.prototype.forEach2 = function(callback) {
//     for(var index in this) {
//         console.log('index: ', index)
//     }
// }


// var courses = [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ]

// courses.forEach2(function(course, index, array) {
//     console.log(course, index, array)
// })

// Array.prototype.some2 = function(callback) {
//     var output = [];
//     for(var index in this) {
//         if(this.hasOwnProperty(index)) {
//             if(callback(this[index], index, this)) {
//                 output = true;
//                 break;
//             }
//         }
//     }
//     return output
// }
// console.log(document)
// document.write("Hello girl")
// var h1Element = document.querySelector("h1")
// var h2Element = document.querySelector("h2")
// var h3Element = document.querySelector("h3")
// console.log(h1Element)
// console.log(h2Element)
// console.log(h3Element)
// console.log(document.forms[1])
// var headingElement = document.querySelector('.heading')
// headingElement.textContent = "New Heading"
var boxHeading = document.querySelector('#heading-1')
boxHeading.innerHTML('hello','hi')