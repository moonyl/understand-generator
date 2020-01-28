function buildSquaredNumbersIterator(from = 1, to = 10) {
	let count = from - 1;
    
    return {
    	next: () => {
        	if (count >= to) return { done: true };
            count++;
            return { value: count*count, done: false };
        }
    };
}

const iterator = buildSquaredNumbersIterator(2, 9);
let res = iterator.next();

while (!res.done)	{
	console.log(res.value);
  res = iterator.next();
}
