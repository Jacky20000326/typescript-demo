//Extract：只要取出，從許多項目中挑出能夠符合（extends）特定規則的

type ExtractConcrete<T,U> = T extends U ? T : never
// never 是空集合（empty set）的概念
type OnlyString = ExtractConcrete<'a' | 'b' | 1 | 2, string>; // "a" | "b"

//Exclude：排除後留下，從許多項目中排除符合（extends）特定規則的

type ExcludeConcrete<T,U> = T extends U ? never : T

enum PlaceType {
    PARK = 'park',
    ZOO = 'zoo',
    OFFICE = 'office',
}

type WillGo = ExcludeConcrete<PlaceType, PlaceType.OFFICE>;