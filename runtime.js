const perf = require('execution-time')();

function doublerAppend(nums) {
    let new_nums = [];
    for (let i = 0; i < nums.length; i++) {
        new_nums.push(nums[i] * 2);
    }
}

function doublerInsert(nums) {
    let new_nums = [];
    for (let i = 0; i < nums.length; i++) {
        new_nums.unshift(nums[i] * 2);
    }
}

function getSizedArray(size) {
    let array = [];
    for (let i = 0; i < size; i++) {
        array.push(i);
    }
    return array;
}

const sizes = [10, 100, 1000, 10000, 100000];
sizes.forEach(size => {
    const array = getSizedArray(size);
    perf.start();
    doublerAppend(array);
    let resultsAppend = perf.stop();
    console.log(`Append for array size ${size}: ${resultsAppend.time} ms`);

    perf.start();
    doublerInsert(array);
    let resultsInsert = perf.stop();
    console.log(`Insert for array size ${size}: ${resultsInsert.time} ms`);
});
