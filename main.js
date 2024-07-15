// 1-masala 

// function multiplyValues(obj, n) {
//     const res = {};
//     for (const key in obj) {
//       if (obj.hasOwnProperty(key)) {
//         res[key] = obj[key] * n;
//       }
//     }
//     return res;
//   }
  
//   const obj = {a: 2, b: 3, c: 4};
//   const n = 3;
//   const res = multiplyValues(obj, n);
//   console.log(res); // {a: 6, b: 9, c: 12}
  

// 2-masala 

// function countWordsWithA(str) {
//     const words = str.split(' ');
//     let count = 0;
//     for (const word of words) {
//       if (word.includes('a') || word.includes('A')) {
//         count++;
//       }
//     }
  
//     return count;
//   }
  
//   const text = "Salom, bu yerda ko'p so'zlar bor va ba'zilarida 'a' harfi mavjud";
//   const result = countWordsWithA(text);
//   console.log(result); 
  



// 3-masala 

// function displayBookStatus(books) {
//     books.forEach((book, index) => {
//       const status = book.read ? "o’qilgan" : "o’qilmagan";
//       console.log(`${index + 1}. ${book.author} ning ${book.title} kitobi ${status}`);
//     });
//   }
  
//   const books = [
//     {
//       title: "Halqa",
//       author: "Akrom Malik",
//       read: false
//     },
//     {
//       title: "Dunyoning ishlari",
//       author: "O’tkir Hoshimov",
//       read: true
//     },
//     {
//       title: "Iymon",
//       author: "Shayx Muhammad Sodiq Muhammad Yusuf",
//       read: true
//     },
//   ];
  
//   displayBookStatus(books);
  


// 4-masala 


// function createObjectFromStrings(arr) {
//     const result = {};
//     arr.forEach(str => {
//       result[str] = str.length;
//     });
//     return result;
//   }
  
//   const stringsArray = ["text", "world", "laptop"];
//   const output = createObjectFromStrings(stringsArray);
//   console.log(output); // {"text": 4, "world": 4, "laptop": 6}
  


// 5-masala 

// function countWords(arr) {
//     const result = {};
//     arr.forEach(word => {
//       if (result[word]) {
//         result[word]++;
//       } else {
//         result[word] = 1;
//       }
//     });
//     return result;
//   }
  
//   const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
//   const output = countWords(animals);
//   console.log(output); // {dog: 2, chicken: 3, cat: 1, rabbit: 1}
  


// 6-masala 

// function ageDifference(arr) {
//     if (arr.length === 0) return 0; // Agar array bo'sh bo'lsa, 0 qaytarish
  
//     // Yoshlarga ko'ra arrayni saralash
//     arr.sort((a, b) => a.age - b.age);
  
//     // Eng yosh va eng qari odamlarni topish
//     const youngest = arr[0].age;
//     const oldest = arr[arr.length - 1].age;
  
//     // Yoshlari orasidagi farqni hisoblash
//     return oldest - youngest;
//   }
  
//   const people = [
//     {name: 'John', age: 13},
//     {name: 'Mark', age: 56},
//     {name: 'Rachel', age: 45},
//     {name: 'Nate', age: 67},
//     {name: 'Jeniffer', age: 65}
//   ];
  
//   const output = ageDifference(people);
//   console.log(output); // 54
  

// 7-masala.


// function getTruthyFalsy(arr) {
//     const truthy = arr.filter(item => Boolean(item));
//     const falsy = arr.filter(item => !Boolean(item));
  
//     return { truthy, falsy };
//   }
  
//   const input = [false, 1, 10, "", null, "sultonqul", 1.13, 0];
//   const output = getTruthyFalsy(input);
//   console.log(output); // {truthy: [1, 10, "sultonqul", 1.13], falsy: [false, "", null, 0]}
  

// 8-masala.

// function minMaxWord(sentence) {
//     const words = sentence.split(' ');
//     let minWord = words[0];
//     let maxWord = words[0];
//     words.forEach(word => {
//       if (word.length < minWord.length) {
//         minWord = word;
//       }
//       if (word.length > maxWord.length) {
//         maxWord = word;
//       }
//     });
  
//     return { minWord, maxWord };
//   }
  
//   const input = "Men dasturlash kursida o’qiyman";
//   const output = minMaxWord(input);
//   console.log(output); // {minWord: "Men", maxWord: "dasturlash"}
  


// 9-masala 

// const complexString = "djsta'limldjaiorwgmNAJOTasoijmomisoijdsaoidjthemoisasdoonionbest";

// const result = complexString.slice(21, 26) + ' ' +
//                complexString.slice(2, 10) + ' ' +
//                complexString.slice(34, 36) + ' ' +
//                complexString.slice(36, 38) + ' ' +
//                complexString.slice(50, 54);

// console.log(result); // Najot ta'lim is the best


// 10-masala

// var searchMatrix = function(matrix, target) {
//     for (let i = 0; i < matrix.length; i++) {
//       for (let j = 0; j < matrix[i].length; j++) {
//         if (matrix[i][j] === target) {
//           return true;
//         }
//       }
//     }
//     return false;
//   };
  
//   // Test qilish
//   const matrix1 = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];
//   const target1 = 3;
//   console.log(searchMatrix(matrix1, target1)); // true
  
//   const matrix2 = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];
//   const target2 = 13;
//   console.log(searchMatrix(matrix2, target2)); // false


// 11-masala.

// function rotate(matrix) {
//     let n = matrix.length;
    
//     // Create a new matrix for rotated result
//     let rotatedMatrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
    
//     // Perform rotation
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             rotatedMatrix[j][n - 1 - i] = matrix[i][j];
//         }
//     }
    
//     return rotatedMatrix;
// }

// // Example usage:
// let matrix1 = [
//     [5, 1, 9, 11],
//     [2, 4, 8, 10],
//     [13, 3, 6, 7],
//     [15, 14, 12, 16]
// ];

// let matrix2 = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// console.log(rotate(matrix1));
// console.log(rotate(matrix2));


// 12-masala 


// function findLastWordLength(str) {
//     // Trim the string to remove any leading or trailing whitespace
//     str = str.trim();
    
//     // Find the last space index
//     let lastSpaceIndex = str.lastIndexOf(' ');
    
//     // Calculate the length of the last word
//     let lastWordLength = str.length - lastSpaceIndex - 1;
    
//     return lastWordLength;
// }

// // Example usage:
// let sentence = "Hello world, how are you?";
// let lastWordLength = findLastWordLength(sentence);
// console.log("Length of the last word:", lastWordLength);



// 13-masala 

// function objectToArray(obj) {
//     return Object.entries(obj).map(([key, value]) => `${key}${value}`);
// }

// // Example usage:
// let obj = {a: 2, b: 5, c: 7};
// let result = objectToArray(obj);
// console.log(result); // ['a2', 'b5', 'c7']



// 14-masala 


// var findMedianSortedArrays = function(nums1, nums2) {
//     // Combine arrays
//     let mergedArray = nums1.concat(nums2);
    
//     // Sort the merged array
//     mergedArray.sort((a, b) => a - b);
    
//     // Find median
//     let length = mergedArray.length;
//     if (length % 2 === 0) {
//         // If even number of elements, find average of middle two elements
//         return (mergedArray[length / 2 - 1] + mergedArray[length / 2]) / 2;
//     } else {
//         // If odd number of elements, return the middle element
//         return mergedArray[Math.floor(length / 2)];
//     }
// };

// // Example usage:
// let nums1 = [1, 2];
// let nums2 = [3, 4];
// let result = findMedianSortedArrays(nums1, nums2);
// console.log(result); // Output: 2.5

  

// 15-masala 


// function moveUniqueItems(arr) {
//     let seen = new Set(); 
//     let result = []; 
//         if (!seen.has(item)) {
//             seen.add(item); 
//             result.push(item); 
//         }
//     }
    
//     return result;
// }
// let array = [1, 2, 2, 3, 4, 4, 5, 5, 6];
// let uniqueItems = moveUniqueItems(array);
// console.log(uniqueItems); // Output: [1, 2, 3, 4, 5, 6]



// 16-masala 


// let products = [
//     {id: 6, name: "Smarthpone", price: 12000, rating: 4.5, discount: 20},
//     {id: 2, name: "Acer", price: 12000, rating: 4.3, discount: 10},
//     {id: 1, name: "Mac book", price: 17000, rating: 4.7, discount: 40},
//     {id: 4, name: "HP", price: 21000, rating: 4.1, discount: 16},
// ];

// // Filter out the product with id 4
// let filteredProducts = products.filter(product => product.id !== 4);

// console.log(filteredProducts);



// 17-masala  

// let people = [
//     {name: 'John', age: 13},
//     {name: 'Mark', age: 56},
//     {name: 'Rachel', age: 45},
//     {name: 'Nate', age: 67},
//     {name: 'Jeniffer', age: 65}
// ];

// // Sort people by age in ascending order
// people.sort((a, b) => a.age - b.age);

// // Find the difference between the age of the oldest and youngest
// let youngest = people[0].age;
// let oldest = people[people.length - 1].age;
// let ageDifference = oldest - youngest;

// console.log(ageDifference); // Output: 54
