function solve(arr1, arr2) {
  let flag = false;
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    let element1 = Number(arr1[i]);
    let element2 = Number(arr2[i]);

    if (element1 === element2) {
      sum += element1;
    } else {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      flag = true;
      break;
    }
  }
  if (flag === false) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}
solve(['1','2','3','4','5'],['1','2','4','4','5']);
