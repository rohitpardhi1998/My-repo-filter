import React ,{useState} from 'react'
import {foodData} from "./datafile";
export default function FilterMy() {
    const [mydata,setData]=useState(foodData);
    const [filtereddata,setFiltereddata]=useState(foodData);
    console.log("name",mydata)

    const handleChange =(event)=>{
              let myvvv = event.target.value;
              if (myvvv === "") {
                setFiltereddata(null);
              }
            const filterall = mydata.filter((items)=>{
                 return items.name.toLowerCase().includes(myvvv.toLowerCase())
            })
            setFiltereddata(filterall);
    }
  return (
    <div>
        <input type="text" onChange={handleChange} placeholder='type here '/> <br/>
        <br/>
        <br/>
        <h3>My Data</h3>
        {
            filtereddata.map((item,key)=>{
                return(
                    <h3 key={key}> {item.name}</h3>
                )
            })
        }
    </div>
  )
}
