/*eslint-disable*/

function hasValuesFromArray(set, array){
	return array.every(element => set.has(element));
}

export default hasValuesFromArray;