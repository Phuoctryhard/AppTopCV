export const getTotalPage =()=>{
    return fetch("http://localhost:3000/facebook").then((res)=>{return res.json()});
}
export const getPRoduct =()=>{
    return fetch("https://dummyjson.com/products").then((res)=>{return res.json()});

}