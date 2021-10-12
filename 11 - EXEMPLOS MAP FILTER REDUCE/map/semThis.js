const array = [1, 2, 3, 4, 5];

console.log(array.map((item) => item * 2));

console.log(array);

// solução 2

function mapSemThis (arr) {
    return arr.map(function (item){
        return item * 3;
    });
}

const nums = [2, 4, 6, 8, 10];

console.log(mapSemThis(nums));

console.log(nums);
