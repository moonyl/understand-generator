function buildSquaredNumbersIterator(from = 1, to = 10) {
	let count = from - 1;
    
    return {
    	next: () => {
        	if (count >= to) return { done: true };
            count++;
            return { value: count*count, done: false };
        },
      [Symbol.iterator]: function() {
        return this;
      }
    };
}

const numbers = buildSquaredNumbersIterator(2, 9);
for (let n of numbers) {
  console.log(n);
}
