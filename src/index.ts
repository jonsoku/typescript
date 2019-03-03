console.log("hello");

class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name:string, age:number, gender?:string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const kazuko = new Human("KAZUKO", 20);

/* 변수뒤에 ?를 붙히면 required속성이 풀린다. (빠져도 된다는 말.) */
const sayHi = (person: Human):string => {
    return `hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
}

console.log(sayHi(kazuko));

export{};