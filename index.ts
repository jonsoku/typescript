console.log("hello");


const name = "JONGSEOK",
age = 24,
gender = "male";

/* 변수뒤에 ?를 붙히면 required속성이 풀린다. (빠져도 된다는 말.) */
const sayHi = (name, age, gender?) => {
    console.log(`hello ${name}, you are ${age}, you are a ${gender}`);
}
/* gender뒤에 ?가 없을때 => 반드시 3개 다 적어줘야한다. 안적어주면 에러남 */
sayHi(name, age, gender);
/* gender뒤에 ?가 있을때 => 2개만 적어줘도 됨. 단 언디파인남. */
sayHi(name, age);


export{};