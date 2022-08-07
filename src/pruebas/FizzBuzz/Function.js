const FizzBuzz = (num) => {
    if(num % 3 === 0 && num % 5 === 0) {
        return 'FizzBuzz';
    }
    if(num % 3 === 0) {
        return 'Fizz';
    }
    if (num % 5 === 0) {
        return 'Buzz';
    }
    return num;
}


export const callFizzBuzz = (num) => {
    let result = [];

    for(let i=1; i<=num; i++) {
        let data = result.push(FizzBuzz(i));
        //console.log(`${i}: ${FizzBuzz(i)}`);
        console.log(data);
}
    return (
        <div>
            {result.map((result, index) => (
                <li  key={index}>
                    {index+1}: {FizzBuzz(result)}
                </li>))}
            {/* {[...new Array(30).keys()].map((result, index) => (
                <li  key={index}>
                    {index+1}: {FizzBuzz(result+1)}
                </li>
            ))} */}
            {/* {Array.from({length:30}, (_,i)=> i+1).map((result, index) => (
                <li  key={index}>
                    {index+1}: {FizzBuzz(result)}
                </li>
            ))} */}
        </div>
    )
}
/* for(let i=1; i<=num; i++) {
    <li>{i}: {FizzBuzz(i)</li>;
} */