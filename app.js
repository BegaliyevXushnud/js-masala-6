
// 9-masala

// function hosilQilish(soz) {
// let start = soz.indexOf("NAJOT");
// let end = soz.indexOf("best") + 4;
//
// if (start !== -1 && end !== -1 && start < end) {
//     let substring = soz.substring(start, end);
//     if (substring.includes("NAJOT") && substring.includes("best")) {
//         return "Najot ta'lim is the best";
//     }
// }
// return "Kiritilgan so'zda kerakli substring topilmadi";
// }
//
// let foydalanuvchiSozi = "djsta'limldjaiorwgmNAJOTasoijmomisoijdsaoidjthemoisasdoonionbest";
// let natija = hosilQilish(foydalanuvchiSozi);
// console.log(natija);







// 10-masala
// let arr = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
// let target = 3;
// let result = false;
// arr.forEach((item) => {
//     if(item.includes(target)){
//         result = true;
//     }
// })
// console.log(result)




// 11-masala
// let matrix1 = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
// let matrix2 = [[1,2,3],[4,5,6],[7,8,9]];
// function rotate(matrix) {
//     let n = matrix.length;
//     let result = [];
//
//     for (let i = 0; i < n; i++) {
//         result.push([]);
//     }
//
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             result[j][n - 1 - i] = matrix[i][j];
//         }
//     }
//
//     return result;
// }
//
// let resul1 =  rotate(matrix1);
// let resul2 = rotate(matrix2);
// console.log(resul1);
// console.log(resul2)






// 12-masala
// let string =  "Hello world";
// const Letter = () => {
//     let arr  = string.split( " ");
//     console.log(arr[arr.length - 1].length);
// }
// Letter()



// 13-masala
// let arr = {a: 2, b: 5, c: 7};
// let arr2 = []
// for (let key in arr) {
//     arr2.push(`${key}${arr[key]}`);
//
// }
// console.log(arr2)


// 13-masalani 2-usuli
// let arr = {a: 2, b: 5, c: 7};
// for (let key in arr) {
//     let result = `${key}${arr[key]}`; // Concatenate key and arr[key] into a single string
//     let parts = result.split(' ');
//     console.log(parts);
// }


// 14-masala
// let nums1 = [1, 2];
// let nums2 = [3, 4];
// const  find  = function (nums1,nums2){
// let spread = [...nums1,...nums2];
// spread.sort((a, b) => a - b);
// let n  = spread.length;
// let median;
// if(n % 2 === 0){
//     median = (spread[n / 2 - 1] + spread[n /  2]) / 2;
// }else {
//     median = spread[Math.floor(n / 2)];
// }
// return median;
// }
// console.log(find(nums1,nums2))



// 15-masala
// let arr = [1,2,3,4,5,1,3];
// function get(arr){
//     const counmap = {};
//     arr.forEach((item) => {
//         counmap[item] = (counmap[item] || 0) + 1;
//     });
// return arr.filter((item,index) => counmap[item] > 1 && arr.indexOf(item) === index);
// }
// let result = get(arr);
// console.log(`${arr} da ${result} takrorlanayapti`)


// 16-masala
// let products = [
//     {id: 6, name: "Smarthpone", price: 12000, rating: 4.5, discount: 20},
//     {id: 2, name: "Acer", price: 12000, rating: 4.3, discount: 10},
//     {id: 1, name: "Mac book", price: 17000, rating: 4.7, discount: 40},
//     {id: 4, name: "HP", price: 21000, rating: 4.1, discount: 16},
// ];
//
// function solve(n) {
//     return n.filter(item => item.id !== 4);
// }
//
// let result = solve(products);
// console.log(result);



// 17-masala
// const people = [
//     { name: 'John', age: 13 },
//     { name: 'Mark', age: 56 },
//     { name: 'Rachel', age: 45 },
//     { name: 'Nate', age: 67 },
//     { name: 'Jeniffer', age: 65 }
// ];
//
// function ageDifference(people) {
//     if (people.length === 0) return 0;
//     let yosh = people[0].age;
//     let qari = people[0].age;
//     people.forEach(person => {
//         if (person.age < yosh) {
//             youngest = person.age;
//         }
//         if (person.age > qari) {
//             qari = person.age;
//         }
//     });
//     const difference = qari - yosh;
//     return difference;
// }
// const difference = ageDifference(people);
// console.log(`result ${difference}`);