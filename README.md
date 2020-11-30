# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @lucaskitteridge/lotide`

**Require it:**

`const _ = require('@lucaskitteridge/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: logs weather two arrays are the same
* `assertEqual(actual, expected)`: logs weather the desired input matches with the expected one
* `assertObjectsEqual(object1, object2)`: logs weather two objects are the same
* `countLetters(string)`: counts the amount of each letter in a string without spaces
* `countOnly(allitems, itemsToCount)`: countOnly will be given an array and an object and return a count of everything in the array that appears in the object
* `eqArrays(array1, array2)`: Takes two arrays and makes sure they are the same length and have the same content
* `eqObjects(object1, object2)`: Takes two objects and makes sure that they are the same thing
* `findKey(object, callback)`: takes a object and a call back, then checks the object for the frist instance in which the callback is truthy and returns the key, otherwise it returns undefined
* `findKeyByValue(object, value)`: takes a object and a value from that object and returns the coresponding key
* `head(array)`: returns the first index in an array
* `letterPositions(sentace)`: returns the indexes of every letters placement in a string
* `map(array, callback)`: returns a new array based on the conditions of the callback funtion
* `middle(array)`: logs the middle of an array that is longer that 2. If length is odd returns the middle, if even returns the middle two
* `tail(array)`: logs everything except for te first index in the array
* `takeUntil(array, callback)`: takes an array and stops when the callback is true
* `without(array, removing)`: takes an array and removes all removing from the array