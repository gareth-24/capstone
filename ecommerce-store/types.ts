// explicity describe an object's shape using an interface declaration

// declare a JS object conforming to these types like this...
// const billboard: Billboard = {
//   id: "Company"
//   name: "Advertisement"
//   imageUrl: "https//..."
// }

export interface Billboard {
  id: string;
  name: string;
  imageUrl: string;
};

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
};