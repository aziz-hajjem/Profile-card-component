
function digitize(n) {
    let arr=n.toString().split('');

    return arr.reverse();
  }

console.log(digitize(Math.floor((Math.random() * 10000) + 1)));

