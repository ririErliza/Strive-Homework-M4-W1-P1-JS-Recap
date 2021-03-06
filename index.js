/* 1. Create a function to calculate the sum of the two given integers. If the two values are the same, return triple their sum.*/

const sumOfTwoIntegers = function (a,b){
    if (a===b){
        return (a+b)*3;
    }else{
        return a+b;
    }
    
}
// console.log(sumOfTwoIntegers(3,3));
// console.log(sumOfTwoIntegers(1,2));





/* 2. Create a function to check two given integers. Return true if one of them is 50 or if their sum is 50.*/

const checkTwoIntegers = function (g,h){
if (g === 50 || h=== 50 || g+h===50){
    return true;
} else{
    return false;
    }
}

//console.log(checkTwoIntegers (5,1));




/* 3. Create a function to remove a character at a specified position from a given string: 
pass the position and the string as parameters, return the new string.*/

const removeACharacter = function (str,x){
    let newStr = str.substr(x);
    return newStr;
}

//console.log (removeACharacter ("Mouse",1));


/* 4. Create a function to find and return the largest of three given integers.   */

const whichLargest = function (r,s,t){
    if (r>s && r>t){
        return r;
    } else if (s>r && s>t){
        return s;
    } else if (t>r && t>s){
        return t;
    }else{
        return "not a number";
    }
}

//console.log(whichLargest(1,3,2));





/*  5. Create a function to check if two numbers are in the range 40-60 or 70-100. 
Return true if they do, return false if one (or both) don't.  */

const areInRange = function (k,l){
    if (k>40 && k<60 || l>40 && l<60 || k>70 && k<100 || l>70 && l<100){
        return true;
    } else {
        return false;
    }
}

//console.log(areInRange(5,1));





/* 6. Create a function to create a new string composed of a specified number of copies of a given string. 
Pass the string and the number of copies as parameters.   */


const copyString = function (txt,int){
    let newStr1 = txt.repeat(int);
    return newStr1;
}

console.log(copyString("Why?",4));




/* 7. Create a function to display the city name if the string begins with "Los" or "New". 
Pass the city name as a parameter. 
Return false if they start with a different string.   */

const displayCity = function (city){
    if (city.startsWith("Los") || city.startsWith("New")){
        return true;
    }else{
        return false;
    }
}

//console.log (displayCity("Newyork"));
//console.log (displayCity("Jakarta"));



/* 8. Create a function to calculate and return the sum of all elements from an array with 3 elements. 
Pass the array as a parameter.   */

const sumOfArray = function (arr){
    let sum = 0;
    for (let i=0; i<arr.length; i++){
        sum += arr[i]; 
    }
    return sum 
}

//console.log (sumOfArray([1,2,2]));




/* 9. Create a function to test if an array of length 2 contains 1 OR 3. Return true is it does, false if it doesn't.   */


const containOneOrThree = function (arr){
    for (let i=0; i<arr.length; i++){
        if (arr[i] === 1 || arr[i] === 3 ){
            return true;
        }else{
            return false;
        }
    }
}


const arrAnything = [1,2];
//console.log(containOneOrThree(arrAnything));





/*  10. Create a function to test if an array of length 2 DOES NOT contain 1 or 3. 
Return true if it doesn't, false if it does.  */

const notContainOneOrThree = function (arr10){
    if (!arr10.includes(1) || !arr10.includes(3)){
        return true;
    }else{
        return false;
    }
}

const arrSomething = [1,3];
//console.log(notContainOneOrThree(arrSomething));




/* 11. Create a function to find the longest string from a given array of strings. 
Pass the array as parameter and return the longest string.   */

const whichLongest = function (arr11){
    let longestStr =""
    arr11.map(function(str){
        if (str.length > longestStr.length){
            longestStr = str;
            }
     })
     return longestStr
}

//console.log(whichLongest (["people", "I", "you", "them"]));




/*  12. Create a function to find the types of a given angle:
Acute angle ??? between 0 and 90 degrees. Return acute.
Right angle ??? 90 degree. Return right
Obtuse angle ??? between 90 and 180. Return obtuse
Straight angle ??? 180 degrees. Return straight  */

const typesOfAngle = function (int){
    if (int>0 && int<90){
        return "acute";
    } else if (int === 90){
        return "right";
    } else if (int >90 && int<180){
        return "obtuse";
    }else if (int === 180){
        return "straight";
    }
}

//console.log (typesOfAngle(90));
//console.log (typesOfAngle(135));




/* **13**. Create a function to find and return the index of the greatest element of a given array of 
integers that you passed as a parameter  */


const indexOfHighestNum = function (arr){

    let max =arr[0];
    for (let i = 0;i<= arr.length;i++) {
    if (arr[i] > max) {
    max = arr[i]
    }
    }
    return arr.indexOf(max);
    }
    
    let Arr = [5,1,1,3,4]
   // console.log(indexOfHighestNum(Arr));




/* 14. Create a function to find and return the largest even number from an array of integers 
that is passed a parameter.   */

const largestEvenNumber = function (arr){
    let even = arr.filter(onlyEvenNumber);
    function onlyEvenNumber(number){
        return number %2 === 0;
    }
    console.log(even);

    let max = 0;
    for (let i=0; i<even.length; i++){
        if (even[i]>max){
            max=even[i]
        }
    }
    return max
}

let arr14 = [1,1,16,4,6,2,10,6]
console.log(largestEvenNumber(arr14));


/*  15. Create a function to check from two given integers (passed as parameters) if one is positive and the other is negative. 
Return true if that's the case, return false if it's not.  */

const checkNumber = function (a,b){
    if(Math.sign(a) === 1 && Math.sign(b) === -1 
   || Math.sign(a)  === -1 && Math.sign(b) === 1) {
        return true
    }else{
        return false
    }
}

//console.log(checkNumber(1,3));




/*  16. Create a function to create and return a new string where the first 3 characters are in lower case and the others are in upper case. 
If the string's length is less than 3, convert the whole string into uppercase. 
Pass the original string as a parameter. */


const newString = function (str){
    if (str.length > 3){
        return ((str.substring(0,3)).toLowerCase() + str.substring(3,str.length));
        
    } else{
        return str.toUpperCase();
}
}

// console.log(newString("sun"));
// console.log(newString("SUNFLOWER"));

/*(str.substring(0,3)).toLowerCase()  --> to change the first 3 letter of a string. 
string.substring(start,end) = the start position, and the end position (end not included).
(0,3) =  slices out a portion of a string from position 0 to position 2 (3-1)*/

// str.substring(3,str.length) --> to get the last part of the string starting from the position 3



/*  17. Create a function to calculate the sum of two integers (passed as parameters). 
If the sum is in the 50-80 range, return 65, otherwise, return 80.  */

const calculateSum = function (int1, int2){
    let sum = int1 + int2;
    if (sum >50 && sum <80){
        return 65;
    }else{
        return 80;
    }
}
// console.log(calculateSum (30,30));


/*  18. Create a function to convert a number (passed as a parameter) into a string, basing yourself on this example: 
The number has 3 as a factor ??? return Diego 
The number has 5 as a factor ??? return Riccardo 
The number has 7 as a factor ??? return Stefano 
If the number does not have 3,5, or 7, return the original number. 
?????? The factor is an integer which evenly divides a number without leaving a remainder. 
One number can have more than one factor, in that case you should return both names. 
Ex: 15 has both 3 and 5 has factors: the function will return DiegoRiccardo  */

const convertNumber = function (num){
    if (num%3 === 0){
        return "Diego";
    } else if (num%5 === 0){
        return "Riccardo";
    } else if (num%7 === 0){
        return "Stefano";
    } else if (num%3 === 0 || num%5 === 0){
        return "DiegoRiccardo";
    } else if (num%3 === 0 && num%7 === 0){
        return "DiegoStefano";
    } else if (num%5 === 0 && num%7 === 0){
        return "RiccardoStefano";
    }else{
        return num;
    }
}

// console.log(convertNumber(7));




/*  19. Create a function that that takes a phrase as a parameter and returns its acronym. Ex. British Broadcasting Corporation returns BBC  */

const fistLetter = function (string){
    return string[0];
}

const makeAcronym = function (str){
    let words = str.split(" ");
    let acronym = words.map(fistLetter);
    return acronym.join("").toUpperCase();
}

// console.log(makeAcronym("British Broadcasting Corporation"));