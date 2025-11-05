// // // function greet(name:String) {
// // //     return "Hello, " + name.toUpperCase();
// // //   }
// // //   greet("Akanksha"
// // //   );
// // //   console.log(greet("Akanksha"));
// // //   const user = { name: "Alice", age: 30 };

// // // console.log(user.name, user.age);

// // // function printLength(str : String) {
// // //     console.log(str.length);
// // //  }
// // //  printLength("Hello");

// // //  function printLength1(str: string | null) {
// // //     console.log(str?.length);
// // //  }
// // //  printLength1("null");



// // function add(a:number, b:number){
// //    return a + b;
// //  }
  
// //  function isAdult(age:number) : boolean{
// //    return age >= 18;
// //  }


// // //  type User = {
// // //    name: string;
// // //    experience: number;
// // //    isAdult: boolean;
// // // }

// // // const user: User = {
// // //    name: "Danish",
// // //    experience: 5,
// // //    isAdult: false,
// // // }

// // // console.log(`Hello! My name is ${user.name} with ${user.experience} of experience in Perficient and I ${user.isAdult ? "have" : "do not have"} admin rights to this website`)



// //  const user :mydata={
// //    name:'Akanksha',
// //    isadmin: false,
// //    experience : 4,
// //  }
// //  type mydata = {
// //    name: string;
// //    experience: number;
// //    isadmin: boolean;
// //  }
// //  console.log(`hello my name is " ${user.name} with expererince of ${user.experience} i dont have admin rights`);


//  type Produts ={
//   id: string,
//   name: string,
//   price: number,
//   category: string,
//   inStock: boolean,
//   description: string
//  }


// createProduct  extends Produts= (
//   // id: string,
//   // name: string,
//   // price: number,
//   // category: string,
//   // inStock: boolean,
//   // description: string
// ): void => {
//   console.log(`Created product: ${name} (${id}) - $${price}`);
// };

// export const readProduct = (
//   id: string,
//   name: string,
//   price: number,
//   category: string,
//   inStock: boolean,
//   description: string
// ): void => {
//   console.log(`Product: ${name}, Price: $${price}, In Stock: ${inStock}`);
// };

// export const updateProduct = (
//   id: string,
//   name: string,
//   price: number,
//   category: string,
//   inStock: boolean,
//   description: string
// ): void => {
//   console.log(`Updated product ${id}: ${name} now costs $${price}`);
// };

// export const deleteProduct = (
//   id: string,
//   name: string,
//   category: string
// ): void => {
//   console.log(`Deleted product ${name} (${id}) from category: ${category}`);
// };
 


// type CreateProduct = (
//   id: string,
//   name: string,
//   price: number,
//   category: string,
//   inStock: boolean,
//   description: string
// ) => void;
 
// type DeleteProduct = (
//   id: string,
//   name: string,
//   category: string
// ) => void;
 
// export const createProduct: CreateProduct = (
//   id,
//   name,
//   price,
//   category,
//   inStock,
//   description
// ) => {
//   console.log(`Created product: ${name} (${id}) - $${price}`);
// };
 
// export const readProduct: CreateProduct = (
//   id,
//   name,
//   price,
//   category,
//   inStock,
//   description
// ) => {
//   console.log(`Product: ${name}, Price: $${price}, In Stock: ${inStock}`);
// };
 
// export const updateProduct: CreateProduct = (
//   id,
//   name,
//   price,
//   category,
//   inStock,
//   description,
// ) => {
//   console.log(`Updated product ${id}: ${name} now costs $${price}`);
// };
 
// export const deleteProduct: DeleteProduct  = (
//   id,
//   name,
//   category
// ) => {
//   console.log(`Deleted product ${name} (${id}) from category: ${category}`);
// };
 
 
const convertDateToString = (date: Date | string): string => {
		 // resolve type error by using instanceof
     if(date instanceof Date){
return date.toISOString();
     }
        		return date;
	}
	console.log(convertDateToString(new Date()))
		// expected output in string => "2025-06-20T08:52:34.781Z“
 
	console.log(convertDateToString("2025-06-20T08:51:47.200Z"))
		// expected output in string => "2025-06-20T08:51:47.200Z"

