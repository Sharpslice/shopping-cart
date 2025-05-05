const getAllProduct = async() =>{
    try{
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();

        console.log(data)
        return data;
    }
    catch(error){
        console.log("error fetching data",error)
    }
}

const getProductById = async(id) =>{
    try{
        const response = await fetch(` https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        console.log(data);
        return data;
    }
    catch(error){
        console.log("error fetching data by id",error);
    }
}


export {getAllProduct, getProductById}