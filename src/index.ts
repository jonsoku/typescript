console.log("hello");

interface Human{
    name: string;
    age:number;
    gender:string;
}

const person = {
    name: "nicolas",
    gender: "male",
    age: 22
};


/* 변수뒤에 ?를 붙히면 required속성이 풀린다. (빠져도 된다는 말.) */
const sayHi = (person: Human):string => {
    return `hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
}

console.log(sayHi(person));

export{};