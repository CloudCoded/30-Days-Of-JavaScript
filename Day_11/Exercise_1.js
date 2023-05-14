/*
Question 1: Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
*/

//Answer
const constants = [2.72, 3.14, 9.81, 37, 100];

let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants //Destructing
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);

/*
Question 2: Destructure and assign the elements of countries array to fin, est, sw, den, nor
*/

//Answer
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']

let [fin, est, sw, den, nor] = countries //Destructing
console.log(fin, est, sw, den, nor);

/*
Question 3: Destructure the rectangle object by its properties or keys.

const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}

*/

//Answer
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
}

const destructRectangle = ({ width, height, area, perimeter}) => {
    const wid = width * 2;
    const hei = height * 2;
    const ar = wid * hei;
    const peri = 2 * (wid + hei);

    console.log(`wid: ${wid}`);
    console.log(`hei: ${hei}`);
    console.log(`ar: ${ar}`);
    console.log(`peri: ${peri}`);
}
destructRectangle(rectangle);

//Or
const { wid, hei, ar, peri } = rectangle; //Destructing by changing the property names
console.log({ wid, hei, ar, peri });

