const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// An first array containing the objects to be cooked.
const uncookedFood = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];
// This exercise does not require you to alter this function. But read it. See if you can follow what it takes in, executes, and returns.

function grill () {
  // Modify the food so that it is cooked
  for(let i=0; i < uncookedFood.length; i++){
    uncookedFood[i].cooked = true
    cookedFood.push(uncookedFood[i])
}
};
// Put the cooked food into the appropriate array
grill();


console.table(cookedFood)

  
 

// Your task is to iterate over the array of uncookedFood and invoke the function for each item so that the cookedFood array contains all of the items after they are cooked.



// iterate over an object and change the property of the objects