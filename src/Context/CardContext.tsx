import React, { Children, createContext, useEffect, useState } from 'react'
import { Product } from '../Components/Products.type'

type CardContextType = {
  UserCard: Product[];
  addProduct: (id: number) => void;
  removeProduct: (id: number) => void;
  removeAll:() => void;
  shop: Product[];
};

type CardContextProviderProps = {
    children: React.ReactNode;
}
export const CardContext = createContext({} as CardContextType)


export default function CardContextProvider({children}:CardContextProviderProps) {

    const [UserCard, setUserCard] = useState<Product[]>([]);
    const [shop, setShop] = useState<Product[]>([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => setShop(data))
    },[])

    const addProduct = (id: number) => {
        setUserCard((prevProduct) => {
            const product = UserCard.find(product => product.id === id)
            if(!product){
                let NewCard =  shop.find(item => item.id === id) as Product
               
                return [...prevProduct,{...NewCard,count:1}]
            }else{
                
                    let NewCard = prevProduct.map(item => item.id === id ? {...item,count:item.count + 1} : item)
                    return NewCard
                
            }
        })
    };
    console.log(UserCard);

    const removeProduct = (ProductId: number) => {
        setUserCard(prevProduct => prevProduct.filter(product => product.id !== ProductId))
    };

    const removeAll = () => {
        setUserCard([])
    }

  return (
    <CardContext.Provider
      value={{ UserCard, shop, addProduct, removeProduct, removeAll }}
    >
      {children}
    </CardContext.Provider>
  );
}
