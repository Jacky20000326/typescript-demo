// indexed signature
// 有些時候，因為一些原因，也許是 key 的名稱不是那麼重要時，
// 或者 key 的可能太多時，我們可以使用 index signatures 來定義這個物件，
// 例如，定義一個 key 為 string，value 則為 string 或 number 的型別：
type DeviceDict = {
    [key:string]:string
} 
// mapped type

type PersonMap = {
    [key in "firstName" | "lastName"]:string
}

// 概念上可以将key in ...想成for (const key of ...)廻圈的概念

// 会等同
// type PersonMap = {
//     firstName: string;
//     lastName: string;
// }

// 用途扩充时可能会用到
// Ex. 需求: 根據 SupportedEvent 中屬性的名稱，產生一個新的型別叫做 HandledEvent，但物件 value 的型別要全部換成 function 
type SupportedEvent = {
    click: string
    change: string
    keyup:string
    keydown: string
}

type HandledEvent = {
    [v in keyof  SupportedEvent]:()=> void
}

// 结论
// mapped type 最重要的一步。它們都有跑一個迴圈把所有元素依序取出來的概念。


// Optional Properties

type Person = {
    firstNmae: string
    lastName:string
    fullName:string
}

type ToOptionalProperty<T> = {
    [K in keyof T]?:T[K]
}
// 一開始 Person 中並不是每個 Property 都是 optional 的，但經過 ToOptionalProperty，所有 Properties 就都會是 Optional 的：
type PersonOptionalType = ToOptionalProperty<Person>

// Readonly Properties(增加/移除)
type ToReadOnlyProperty<T> = {
    readonly [K in keyof T]: T[K]
}

type PersonToPartial = Partial<Person>
type PersonToReadRequired= Required<Person>
type PersonToReadOnly = Readonly<Person>

