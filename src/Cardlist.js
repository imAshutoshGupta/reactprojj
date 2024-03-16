import Card from "./Card"

export default function Cardlist(props){
    let products = props.products
    return(
        products.map(product => 
            {
                return <Card {...product} key={product.id}/>
            }
            )
    )
}