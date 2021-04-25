console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
const basket = []
console.log(`My starting basket contents: ${basket}`);

function addItem( item ){
  basket.unshift( item );
  return true;
} // end addItem

console.log( 'Picked up some bananas:', addItem('bananas') );

function listItems(){
  for (item in basket){
    console.log('I have some:', basket[ item ]);
  }
  return;
} // end listItems

addItem( 'apples' );
addItem( 'pears' );

listItems();    //testing listItems

console.log(`Basket contents: ${basket}`);

console.log('I empty my basket at checkout');

function empty(){
  for (let i = 0; basket.length = 0; i++) {
    basket.shift(i);
  }
  return;
} // end empty

empty();

console.log(`Basket contents: ${basket}`);    // testing empty
