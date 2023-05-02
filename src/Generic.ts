// 范例

type LengthType = {
    length: number
}

const identify:<T extends LengthType>(arg:T)=>T=(arg)=>{
    console.log(arg.length)
    return arg
}

identify({length: 3})

// 根據另一個 Type 來限制另一個 Type。舉例來說，為了確保 T 這個型別裡有 K 這個屬性

const getProperty = <T,K extends keyof T>(obj: T, key: K)=>{
    return obj[key]
}

const value = getProperty({name:"Jacky",age: 23},"name")
console.log(value)

// 泛型也有 scope 的概念(看看就好著要表达特性)

const startTuple = <T>(aug1:T) => <U>(aug2: U) => [aug1,aug2] as [T,U]

const myTuple = startTuple(['first'])(42)

console.log(myTuple)

