
const transform = (numbers) => {    
    return numbers.map(num => {
        let x = {};
        x.val = num;
        return x;
    });
};

console.log(transformToObjects([1,2,3]));

function transformToObjects(numberArray) {
    return numberArray.map(num => {
        let x = {};
        x.val = num;
        return x;
    });
}
