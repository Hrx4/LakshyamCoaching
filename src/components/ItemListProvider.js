import { createContext, useContext, useEffect, useState } from "react";

const ItemListContext = createContext()

const ItemListProvider = ({children}) => {

    const itemsList = () =>{
        let items = localStorage.getItem("items");
        console.log(items);
      
        if(items==null){
          return []
        }
        else{
          return JSON.parse(items );
        }
      }

   
    const [cartList, setCartList] = useState(itemsList)
// localStorage.removeItem("items")


useEffect(() => {
    localStorage.setItem('items',JSON.stringify(cartList))
    // localStorage.setItem('items',[JSON.stringify({"item1":"mobile1"}) ])
}, [cartList])


    return(
    <ItemListContext.Provider value={{cartList , setCartList}}>
        {children}
    </ItemListContext.Provider>
    )
};

export const ItemListState = () => {
return useContext(ItemListContext)
}

export default ItemListProvider