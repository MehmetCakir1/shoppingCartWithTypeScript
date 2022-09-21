import data from "../data/data.json"
import {useState} from "react"
import SingleItem from "../components/SingleItem"

const Store = () => {
  const [store,setStore]=useState(data)
  // console.log(data);
  // console.log(store)
  return (
    <div className="grid lg:grid-cols-2 gap-y-9 justify-center items-center container m-auto mt-9">
      {store?.map((item)=>{
        return(
          <SingleItem key={item.id} {...item}/>
        )
      })}
    </div>
  )
}

export default Store