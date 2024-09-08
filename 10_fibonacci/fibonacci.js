const fibonacci = function(num) {
  
  if (+num < 0) { // + operator used so function works with strings
    return "OOPS"; // no negative values accepted
  } else if (+num == 0) { 
    return 0; // 0th fibonacci number is 0
  } else {

    let i = 1, n = 1, a = 1, b = 0; // explanation for these at the end
    // the i(th) fibonacci number n(i) = n(i-2) + n(i-1)
    // where a = n(i-2), b = n(i-1)
    while (i <= +num) {
      n = a + b;
      a = b; 
      b = n;            
      i++;
    }
    return n;
  }

};
/*

if the fibonacci sequence is 1, 1, 2, 3, 5....
with n(1) and n(2) being 1, with 'b' (previous number from n) being 0 
how is 'a' (2nd previous number from n) also = 1 ? 
because the fibonacci sequence extends in the opposite (-i) direction:
...5, -3, 2, -1, 1, 0, 1, 1, 2, 3, 5...
hence if the loop is started at i=1, a = n(i-2) = 1

*/

// Do not edit below this line
module.exports = fibonacci;
