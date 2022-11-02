APPROCAH 1 - LOOP

-> Check if the given value is of type string and check the length.
-> If not string or empty string then throw INVALID INPUT ERROR.

IF THE GIVEN ARGUMENT IS VALID. THEN:
-> Lowercase the string.
-> Create an empty object.
-> Iterate through string.
-> If the character is not present in object create a key 
(key is the character and value now is 1)
-> If the character is present, then increment the value of that key.
-> Return the object.

APPROACH 2 - ARRAY ITERATION

-> Handle edge cases like the previous approach.

IF VALID:
-> Lowercase string.
-> Split the string and store it in an array.
-> Use Array reduce. The second parameter is empty object (accumulator);
-> For every current value of the array check if accumulator has the key (as accumulator is an object)
-> if present increment the count of accumulator key (which is the current array value)
-> Else create the key in accumulator with value 1
-> Return the accumulator
-> Return the resultant object to which the array reduce has been assigned.