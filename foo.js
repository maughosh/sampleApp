const foo1 =()=>
{
    return{ 

        bar: "hello"
    };
}

const foo2=()=>
{
    return //return is unreachable during in next line,that's why result is undefined
    {

        bar: "hello"
    };
}
console.log("foo1 returns");
console.log(foo1());
console.log("foo2 returns");
console.log(foo2());