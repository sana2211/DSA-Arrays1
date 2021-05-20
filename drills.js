const Array = require('./array.js');
const mem = require('./memory.js');

/*function main(){
    Array.SIZE_RATIO = 3;
    // Create an instance of the Array class
    let arr = new Array();
    // Add an item to the array
    arr.push(3);
    console.log(arr);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
   // console.log(arr);
    arr.pop();
    arr.pop();
    arr.pop()
   // console.log(arr);
    console.log(arr.get(0));
    arr.pop();  //Q4
    arr.pop();
    arr.pop();
    arr.push('tahuida');
    console.log(arr.get(0));
    console.log(arr);
}*/

//main(); //after first push--> Array { length: 1, _capacity: 3, ptr: 0 }
        //after 5 additional push()--> Array { length: 6, _capacity: 12, ptr: 3 } 
        //The array had to resize for the 4th (arr.push(19)) call and before adding the new value, bringing the capacity up to 12 and setting the ptr equal to the size of 3, then there were 3 more calls bringing the length to 6. Since the length was less than the capacity at this point, no further resizing needed to occur leaving the length at 6, capacity at 12, and ptr at 3
    
//Q3 //Array { length: 3, _capacity: 12, ptr: 3 }  3 elements were removed from the array, so the length changed to 3, the capacity and ptr remained their values.

//Q4 
//print first item console.log(arr.get(0)) //3
//arr.push('tauhida')
//the purpose of the resize function is to change the capacity of the array so that performance can be higher

//5. A common mistake users make when they type in an URL is to put spaces between words or letters. A solution that developers can use to solve this problem is to replace any spaces with a %20. Write a method that takes in a string and replaces all its empty spaces with a %20. Your algorithm can only make 1 pass through the string. Examples of input and output for this problem can be

//Input: tauhida parveen

//Output: tauhida%20parveen

//Input: www.thinkful.com /tauh ida parv een

//Output: www.thinkful.com%20/tauh%20ida%20parv%20een

function removeSpaces(string){
    let array = string.split('');
    //console.log(array)
    let newArray=[];
    for (let i=0; i < array.length; i++){
        if(array[i]=== ' ')
        { newArray.push('%20')}
        else 
        {newArray.push(array[i])}
    }
    return newArray.join('');
}
//console.log(removeSpaces('www.thinkful.com /tauh ida parv een'));

//6. filtering an array
function arrayFilter(arr, value) {
    let filteredArr = []
    arr.forEach(item => {
        if (item < value) {
            filteredArr.push(item)
        }
    })
    return filteredArr
}

arrayFilter([1, 2, 6, 7], 5)

//7. Max sum in the array
function largestSum(arr){
    let currentMax = 0;
    let maxSoFar = 0;
  
    for(let i = 0; i < arr.length; i++){
      currentMax += arr[i];
      if(currentMax < 0){
        currentMax = 0;
      }  
      if(currentMax > maxSoFar){
        maxSoFar = currentMax;
      }
    }
    return maxSoFar;
  };
  
  //let arr = [-1, -2, 3, 4, 5, -6];  
  //console.log(largestSum(arr));

  //8. Merge arrays
  function mergeArray(arr1, arr2) {
    const newArr = Array.from(arr1);
    arr2.forEach((num) => {
        let i = 0
        while(i < newArr.length) {
            if(num <= newArr[i]) {
                newArr.splice(i, 0, num)
                break
            }
            i++;
        }
    })
    return newArr;
}

mergeArray([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]);

//9. Remove characters
function removeChar(string, letters) {
    const letterArr = [];
    const stringArr = [];

    for(let i=0; i<letters.length; i++) {
        letterArr.push(letters.charAt(i))
    }
    for(let i=0; i<string.length; i++) {
        stringArr.push(string.charAt(i))
    }

    letterArr.forEach(letter => {
        stringArr.forEach((strLtr, index) => {
            if (letter === strLtr) {
                stringArr.splice(index, 1)
            }
        })
    })

    const concatString = stringArr.reduce((acc, curr) => {
        return acc + curr;
    })

    return concatString;
}
removeChar('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou');

//10. Products
function arrayProduct(arr) {
    const product = arr.map((num, i) => {
        const otherNums = arr.slice(0, i).concat(arr.slice((i + 1), (arr.length)));
        return otherNums.reduce((acc, cur) => acc * cur);
    })
    return product;
}
arrayProduct([1, 3, 9, 4]);

//11. 2D array

//12. String rotation

