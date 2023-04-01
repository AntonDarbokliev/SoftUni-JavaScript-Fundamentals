function triangleArea(a,b,c){
let semiParameter = (a + b + c) / 2
let area = Math.sqrt(semiParameter*(semiParameter-a)*(semiParameter-b)*(semiParameter-c))
    console.log(area);
}
triangleArea(2,3.5,4)