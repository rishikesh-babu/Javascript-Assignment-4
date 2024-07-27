let s = 'hai hello hai world '
let r = 'good morning '
let n 

// 1. concat
console.log('1. concat')
n = s.concat(r)
console.log('s:', s)
console.log('r:', n)
console.log('')
 
// 2. includes
console.log('2. includes')
n = s.includes('hai')
console.log('n:', n) // true
console.log('')

// 3. indexOf -
console.log('3. indexOf')
n = s.indexOf('hai')
console.log('s:', s)
console.log('n:', n) // returns 0
console.log('')

// 4. lastIndexOf
console.log('4. lastIndexOf')
n = s.lastIndexOf('hai')
console.log('s:', s)
console.log('n:', n) // return 10
console.log('')

// 5. padEnd
console.log('5. padEnd')
c = 'h'
n = c.padEnd(3, "ai")
console.log('s:', c) //h
console.log('n:', n) // hai
console.log('')

// 6. padStart
console.log('6. padStart')
c = ' last'
n = c.padStart(10, 'first')
console.log('s:', c) // last
console.log('n:', n) // first last
console.log('')

// 7. repeat
console.log('7. repeat')
n = r.repeat(3) // repeat 3 times
console.log('s:', r) 
console.log('n:', n)
console.log('')

// 8. replace
console.log('8. replace')
n = s.replace('hai', 'replace') // replace "hai" to "replace"
console.log('s:', s) 
console.log('n:', n)
console.log('')

// 9. search - return the index if found. If not found -1
console.log('9. search')
n = s.search('hello')
console.log('s:', s)
console.log('n:', n) // 4
console.log('')

// 10. slice
console.log('10. slice')
n = s.slice(4, 13) // get the elements form index position 4 to 13
console.log('s:', s)
console.log('n:', n)
console.log('')

// 11. split
console.log('11. split')
n = s.split('') // split each letter into each string
console.log('s:', s)
console.log('n:', n)
console.log('') 