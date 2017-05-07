async function one() {
  return 'one';
}

async function two() {
  throw new Error( 'two');
}

one().then(response => console.log(response));

two().catch(rejected => console.log(rejected));
