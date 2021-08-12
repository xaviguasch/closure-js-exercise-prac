/*
Coding Challenge #2
This is more of a thinking challenge than a coding challenge 🤓 Your tasks:
1. TaketheIIFEbelowandattheendofthefunction,attachaneventlistenerthat changes the color of the selected h1 element ('header') to blue, each time the body element is clicked. Do not select the h1 element again!
2. Andnowexplaintoyourself(orsomeonearoundyou)whythisworked!Takeall the time you need. Think about when exactly the callback function is executed, and what that means for the variables involved in this example.
 

GOOD LUCK 😀


*/

;(function () {
  const header = document.querySelector('h1')
  header.style.color = 'red'

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue'
  })
})()

// This works thanks to closure, by the time the "blue" function is executed the IIFE is now gone, so there should be now way to access the header variable. But we can access it thanks to closure.
