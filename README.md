# array-to-sentence
Vexanium test, turn array to sentence


first, according to arr1 index position, we need to reverse the position

then, use the smallest number in arr2 for indexing the letter array (arr1)

next, create a new array by using each letter that we got from indexing reversed letter array (arr1) with arr2 index value reduced by arr2 smallest value

finally, filter all undefined value and change it to <space> and then join the array to make it as a sentence.



PSUEDOCODE
1. make arr2 as array of index
2. use it to build a sentence by indexing arr1