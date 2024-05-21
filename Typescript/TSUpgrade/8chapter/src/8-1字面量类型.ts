type World = "world";
 // 插值拼接 type Greeting = "hello world"
type Greeting = `hello ${World}`;

// 当在内插位置使用联合时，类型是每个联合成员可以表示的每个可能的字符串文字的集合
type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";
 type AllLocaleIDs = "welcome_email_id" | "email_heading_id" | "footer_title_id" | "footer_sendoff_id"
type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;

// 对于模板文字中的每个插值位置，并集被交叉相乘
type Lang = "en" | "ja" | "pt";
 // type LocaleMessageIDs = "en_welcome_email_id" | "en_email_heading_id" | "en_footer_title_id" | "en_footer_sendoff_id" | 
// "ja_welcome_email_id" | "ja_email_heading_id" | "ja_footer_title_id" | "ja_footer_sendoff_id" | "pt_welcome_email_id" | "pt_email_heading_id" | "pt_footer_title_id" | "pt_footer_sendoff_id"
type LocaleMessageIDs = `${Lang}_${AllLocaleIDs}`;

// 类型中的字符串联合 on(eventName: string, callback: (newValue: any) => void)
type PropEventSource<T> = {
    // 通过模板字符串，获取callback对应的类型
    on<K extends string & keyof T>(eventName: `${K & string}Change`, callback: (newValue: T[K]) => void): void
}
declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>;

const person = makeWatchedObject({
    firstName: "Saoirse",
    lastName: "Ronan",
    age: 26,
});
// eventName是对象的属性
person.on("firstNameChange", (val) => {
    // val: string
    console.log(val.length)
})
person.on("ageChange", (val) => {
    // val: number
    console.log(val.toFixed(1))
})

// Uppercase<StringType> 将字符串中的每个字符转换为大写版本 type Uppercase<S extends string> = intrinsic
type Greeting = "Hello, world"
// type ShoutyGreeting = "HELLO, WORLD"
type ShoutyGreeting = Uppercase<Greeting>

type ASCIICacheKey<Str extends string> = `ID-${Uppercase<Str>}`
// ID_MY_APP
type MainID = ASCIICacheKey<"my_app">

// Lowercase<StringType> 将字符串中的每个字符转换为等效的小写字符 
type Greeting = "Hello, world"
// type QuietGreeting = "hello, world"
type QuietGreeting = Lowercase<Greeting>
type ASCIICacheKey<Str extends string> = `id-${Lowercase<Str>}`
// id_my_app
type MainID = ASCIICacheKey<"MY_APP">

// Capitalize<StringType> 将字符串中的第一个字符转换为等效的大写字符
type LowercaseGreeting = "hello, world";
// type Greeting = "Hello, world"
type Greeting = Capitalize<LowercaseGreeting>;

// Uncapitalize<StringType> 将字符串中的第一个字符转换为等效的小写字符
type UppercaseGreeting = "HELLO WORLD";
// type UncomfortableGreeting = "hELLO WORLD"
type UncomfortableGreeting = Uncapitalize<UppercaseGreeting>;
              
export {}
