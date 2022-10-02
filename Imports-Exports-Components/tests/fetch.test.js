import { getdataone } from "../scripts/getdata";


test("test the case", async() => {
 let data=await getdataone('https://fakestoreapi.com/products/category/jewelery');
 expect(data).toBe(data);
});

