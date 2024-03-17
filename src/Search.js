import { useRef, useState } from 'react'
import './search.css'
// function Search(){
//     const productName = useRef()
//     const submitForm = (event) => {
//         event.preventDefault()
//         console.log(productName.current.value);
//     }
//     return <div>
//         <form action="" onSubmit={submitForm}>
//         <input type='text' placeholder='Product name' ref={productName}/>
//         <button type='submit'>Search</button>
//         </form>
//         </div>
// }
// export default Search
export default function Search(props) {
    let [productName, setProductName] = useState('')
    const submitForm = (event) => {
        event.preventDefault()
        console.log(productName)
        props.onSearch(productName)
    }

    const changeProductName = (event) => {
        setProductName(event.target.value)
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <input type='text' placeholder='Product name' onChange={changeProductName} />
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}