enum GENDER {
    MALE = 'male',
    FEMALE = 'female',
}

// enum 的 values 變成 union type

type VauleAsUnion = `${GENDER}`

// 把 enum 的 keys 變成 union type (keys of enum to type)
type ketAsUnion  = keyof typeof  GENDER

// 把 enum 的 values 變成 object key

type Gender = {
    [p in GENDER]:string
} 