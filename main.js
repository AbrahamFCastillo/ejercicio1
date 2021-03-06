var propertys =  [];
var namPropertys = [];
function deepEqual(a, b) {
  if (a !== b) 
    return false;
  if ((typeof(a) == 'object') && (typeof(b) == 'object')) {
    var keysa = Object.keys(a);
    console.log(keysa);

    for (var i = 0; i < keysa.length; i++) {
      console.log(a[keysa[i]]);
    }

    var keysb = Object.keys(b);
    console.log(keysb);

    for (var i = 0; i < keysa.length; i++) {
      console.log(b[keysb[i]]);
    }

    if(keysa.length != keysb.length)
      return false;
    for (var i = 0; i < keysa.length; i++) {
      propertys.push(String(deepEqual(keysa[i], keysb[i])));
    }

    console.log(propertys);

    if (propertys.includes('false')) 
      return false;
    for (var i = 0; i < keysa.length; i++) {
      namPropertys.push(String(deepEqual(a[keysa[i]], b[keysb[i]])));
    }

    console.log(namPropertys);

    if (namPropertys.includes('false')) 
      return false;
    return true;
  }
  return true;
}

var john = {
  firstName: 'John',
  lastName: 'Doe'
}

console.log('Test 1:', deepEqual(1, 1)) // true
console.log('Test 2:', deepEqual(1, '1')) // false
console.log('Test 3:', deepEqual(john, john)) // true
console.log('Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })) // true(da false)
console.log('Test 5:', deepEqual(john, { firstName: 'John' })) // false
console.log(john === { firstName: 'John', lastName: 'Doe' });