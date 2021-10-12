const orange = {
	price: 2,
};

const apple = {
	price: 1.5,
};

function mapArray() {
	const array = [1, 2, 3, 4, 5];

	return array.map(function (item) {
		return item * this.price;
	}, apple);
}

console.log(mapArray());

// solução 2

const Banana = {
	value: 2,
};

const Morango = {
	value: 3,
};

function mapComThis(arr, thisArg) {
	return arr.map(function (item) {
        return item * this.value;
	}, thisArg);
}

const nums = [1, 2];

console.log('this -> Banana', mapComThis(nums, Banana));

console.log('this -> Morango', mapComThis(nums, Morango));

