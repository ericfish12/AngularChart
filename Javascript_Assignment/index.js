// 1. Write a JavaScript function that reverse a number. Example x = 32243;Expected Output : 34223 
const reverse_number = n=>{

  let temp =   n.toString().split('').reverse().join('')
 return parseInt(temp,10)
}
console.log("1: ",reverse_number(2234311))

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,madam or nurses run.
const isPalinfrome = str=>{
    str = str.replace(/\s+/g, '')
let array = str.split('')
let left = array.join('')
let right = array.reverse().join('');
return right===left
}
console.log('2: ',isPalinfrome('nurses run'))

// 3. Write a JavaScript function that generates all combinations of a string. Example string : 'dog' Expected Output : d,do,dog,o,og,g 
const cutting_string = str=>{
let target = [];
for(let i=0;i<str.length;i++)
for(let j=i+1;j<str.length+1;j++)
target.push(str.slice(i,j))
return target
}
console.log('3: ',cutting_string('dog'))

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. Example string : 'webmaster' Expected Output : 'abeemrstw'Assume punctuation and numbers symbols are not included in the passed string.
const alph_order = str=>{
return str.split('').sort().join('')
}
console.log('4: ',alph_order('webmaster'))

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter ofeach word of the string in upper case. Example string : 'the quick brown fox' Expected Output : 'The Quick Brown Fox '
const captalize= str=>{
let array = str.split(' ')
array = array.map((element)=>{
    let first = element.charAt(0)
   let rest=  element.slice(1)
  return  first.toUpperCase()+rest
  })
return array.join(' ')
}

console.log('5: ',captalize('the quick brown fox'))


// 6. Write a JavaScript function that accepts a string as a parameter and find the longest wordwithin the string. Example string : 'Web Development Tutorial' Expected Output : 'Development'
const longest_string = str =>{
return str.split(' ').sort((a,b)=>{return b.length-a.length})[0]
}
console.log("6: ",longest_string('Web Development Tutorial'))



// 7. Write a JavaScript function that accepts a string as a parameter and counts the number ofvowels within the string. Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' asvowel here. Example string : 'The quick brown fox' Expected Output : 5
const count_aeiou = str=>{
let aeiou = ['a','e','i','o','u']
let count = 0
for(let i=0;i<str.length;i++)
if(aeiou.includes(str.charAt(i)))
count++
return count;
}
console.log('7: ',count_aeiou('The quick brown fox'))

// 8. Write a JavaScript function that accepts a number as a parameter and check the number isprime or not. Note : A prime number (or a prime) is a natural number greater than 1 that has no positivedivisors other than 1 and itself.
const isPrime=n=>{
if (n<=1)
return false;
else{
for(let i =2 ;i<=n/2 ;i++){
if(n%i==0)
return false;
}
return true
}

}
console.log('8: ',isPrime(2),isPrime(3),isPrime(4),isPrime(5),isPrime(6),isPrime(7))



// 9. Write a JavaScript function which accepts an argument and returns the type. Note : There are six possible values that typeof returns: object, boolean, function, number,string, and undefined.
const return_type = x => {
    return typeof(x);
}
let x;
console.log('9: ',return_type({}),return_type(true),return_type(()=>{}),return_type(2),return_type('weag'),return_type(x))


// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. 
const build_matrix = n=>{
    let matrix = []
for (let i =0;i<n;i++){
    matrix[i]=[]
for (let j =0;j<n;j++)
matrix[i][j]=0
}
return matrix;
}

console.log('10: ',build_matrix(4))

// 11. Write a JavaScript function which will take an array of numbers stored and find the secondlowest and second greatest numbers, respectively. Sample array : [1,2,3,4,5]Expected Output : 2,4 
const second_two = array=>{
    array.sort()
    return [array[1],array[array.length-2]]
}
console.log('11: ',second_two([3,2,1,5,4]))




// 12. Write a JavaScript function which says whether a number is perfect. According to Wikipedia : In number theory, a perfect number is a positive integer that is equal tothe sum of its proper positive divisors, that is, the sum of its positive divisors excluding thenumber itself (also known as its aliquot sum). Equivalently, a perfect number is a number that ishalf the sum of all of its positive divisors (including itself).Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1+ 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed bythe perfect numbers 496 and 8128.
const isPerfectNumber=n=>{
    let divisors = []
for(let i =0;i<n;i++)
if (n%i==0)
divisors.push(i)
if(divisors.reduce((ac,n)=>ac+n) ===n)
return true
return false

}
console.log("12: ",isPerfectNumber(496))

// 13. Write a JavaScript function to compute the factors of a positive integer. 
const factors_of_integer = n=>{
    let factors = []
    for(let i =0;i<n;i++)
    if (n%i==0)
    factors.push(i)
return factors
}
console.log('13: ',factors_of_integer(28))

// 14. Write a JavaScript function to convert an amount to coins. Sample function : amountTocoins(46, [25, 10, 5, 2, 1])Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. Output : 25, 10, 10, 1
const amountTocoins = (amount,coins)=>{
    let output=[]
for(let coin of coins){
let times = Math.floor(amount/coin)
if(times>0)
for(let i=0;i<times;i++)
output.push(coin)
amount = amount%coin
}
return output
}
console.log('14: ',amountTocoins(46,[25,10,5,2,1]))

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is thebases. Accept b and n from the user and display the result. 
const cal_exponent= (b,n)=>{
    if(n===0)
    return 1
    else{
let result = b
    for(let i =1;i<n;i++)
result*=b;
return result
    }
}
console.log('15: ',cal_exponent(2,10))


// 16. Write a JavaScript function to extract unique characters from a string. Example string : "thequickbrownfoxjumpsoverthelazydog"Expected Output : "thequickbrownfxjmpsvlazydg"
const extractUnique = str=>{
    let newStr = ''
let seen = [];
for(let i=0;i<str.length;i++){
if(!seen.includes(str[i])){


    seen.push(str[i])
    newStr+=str[i]


}
}
return newStr;
}




console.log('16: ',extractUnique("thequickbrownfoxjumpsoverthelazydog"))


// 17. Write a JavaScript function to  get the number of occurrences of each letter in specifiedstring. 
const numberOfOccurrences = str=>{
let occurrences={}
for(let i=0;i<str.length;i++){
if(occurrences[str[i]]==undefined)
occurrences[str[i]]=1
else
occurrences[str[i]]++

}
return occurrences;
}
console.log('17: ',numberOfOccurrences("aegsrahsrjerfsrhjwehewerherthesrg"))

// 18. Write a function for searching JavaScript arrays with a binary search. Note : A binary search searches by splitting an array into smaller and smaller chunks until it findsthe desired value.
const binarySearchArray = (value,array,left,right)=>{
if(value === array[Math.floor(left+right)/2])
return Math.floor(left+right)/2
else if(left>=right)
return -1
else if (value>array[Math.floor(left+right)/2])
return binarySearchArray(value,array,Math.floor(left+right)/2+1,right)
else return binarySearchArray(value,array,left,Math.floor(left+right)/2-1)

}
console.log('18: ',binarySearchArray(5,[1,3,5,7,9,10,22],0,6))



// 19. Write a JavaScript function that returns array elements larger than a number. 
const largerThanIt=(array,it)=>{
    return array.filter((element)=>{return element>it})
}
console.log('19: ',largerThanIt([2,43,645,57,3,57,67,4,22],11))


// 20. Write a JavaScript function that generates a string id (specified length) of random characters.Samplecharacterlist:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
const randomString = n=>{
let str = ''
let Samplecharacterlist="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
for(let i=0;i<n;i++)
str+= Samplecharacterlist[Math.floor(Math.random()*62)]
return str
}



console.log('20: ',randomString(22))


// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2)combinations in an array. Sample array : [1, 2, 3] and subset length is 2 Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]



/*
[1]--[1]          [1,2]--[1]+  [1,+2]+[2]           [1,2,3]---  [1] [2] [1,2] +   [1,+3] [2,+3] [1,2,+3]+[3]     
[1,2,3.....n]---function([1,2,3...n-1])  concat  (every element in function([1,2,3...n-1]) +[n]) concat [n]
*/
const allPossibleSubset=(array,target=[])=>{
if(array.length==1){
target.push([array[0]])
 return target
}
else{
  
let temp = array.pop()
let tempArray = allPossibleSubset(array,target)
/*
In .map it changed the structure of the array. So I need make a deep copy of the array, then concat them together.
**/
return   (JSON.parse(JSON.stringify(tempArray)).map((element)=>{ element.push(temp); return element})).concat([[temp]]).concat(tempArray)
}
}
const nPossibleSubset = (array,n)=>{
   return  allPossibleSubset(array).filter((e)=>{return e.length>=n})
}





console.log('21: ',nPossibleSubset([1,2,3],2))

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the functionwill count the number of occurrences of the specified letter within the string. 
// Sample arguments : 'microsoft.com', 'o' Expected output : 3 
const countOccurrences = (str,s)=>{
    let count = 0;
for(let i=0;i<str.length;i++)
if(str[i]===s)
count ++;
return count
}
console.log('22: ',countOccurrences('microsoft.com', 'o'))


// 23. Write a JavaScript function to find the first not repeated character. Sample arguments : 'abacddbec' Expected output : 'e' 
const firstNotRepeat= (str)=>{
let seen = {};
for(let i = 0;i<str.length;i++){
if(seen[str[i]]===undefined){

    if(str.slice(i+1).split('').includes(str[i]))
    seen[str[i]]=true;
else return str[i]


}
else
continue;
}

return -1;

}

console.log('23: ',firstNotRepeat('abacddbec'))


// 24. Write a JavaScript function to apply Bubble Sort algorithm. Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simplesorting algorithm that works by repeatedly stepping through the list to be sorted, comparingeach pair of adjacent items and swapping them if they are in the wrong order". Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

const swap = (array,a,b)=>{
let temp = array[a]
array[a] = array[b]
array[b]=temp;
}
const bubbleSort = (array)=>{
for(let i = 0; i< array.length; i++)
for(let j =0 ;j < array.length-i-1;j++){
if(array[j]<array[j+1])
swap(array,j,j+1)
}

return array;
}






console.log('24: ',bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]))


// 25. Write a JavaScript function that accept a list of country names as input and returns thelongest country name as output. Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])Expected output : "United States of America"
const longestCountryName = array=>{
    array.sort((a,b)=>{return b.length - a.length})
    return array[0]

}
console.log('25: ',longestCountryName(["Australia", "Germany", "United States of America"]))



// 26. Write a JavaScript function to find longest substring in a given a string without repeatingcharacters. 
const findLongestSubstring=(str)=>{
let target = [];
for(let i =0;i< str.length;i++){

for(let j =i; j< str.length; j++){
if(str.substring(i,j+1).includes(str[j+1])||j===str.length-1){
target.push(str.substring(i,j+1))

break;
}
}
}
target.sort((a,b)=>{return b.length-a.length})
console.log(target)
return target[0]
}

console.log('26: ',findLongestSubstring('abcadefbe'))



// 27. Write a JavaScript function that returns the longest palindrome in a given string. Note: According to Wikipedia "In computer science, the longest palindromic substring or longestsymmetric factor problem is the problem of finding a maximum-length contiguous substring of agiven string that is also a palindrome. For example, the longest palindromic substring of"bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; forexample, in the string "abracadabra", there is no palindromic substring with length greater thanthree, but there are two palindromic substrings with length three, namely, "aca" and "ada".In some applications it may be necessary to return all maximal palindromic substrings (that is, allsubstrings that are themselves palindromes and cannot be extended to larger palindromicsubstrings) rather than returning only one substring or returning the maximum length of apalindromic substring.




// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 



// 29. Write a JavaScript function to get the function name. 