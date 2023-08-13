import React from 'react'

//This is custome Hooks that include all items to be selected within a form
export const  SelectItems = ()=>{
 //Categories
 const Categories = [{name:"RealEstate",id:1},{name:"Smart_phone",id:2},
 {name:"Multimedia",id:3},{name:"mens_fashion",id:4},{name:"womens_fashion",id:5},{name:"health_beuty",id:6},
 {name:"kids",id:7},{name:"Hobby $ sport",id:8},{name:"Vehicle",id:9},{name:"Jobs",id:10}
,{name:"EveryThing_else",id:11}];

//The list of locations includes Regions
const Locations = [{name:"Arusha",id:1},{name:"Mwanza",id:2},{name:"Shinyanga",id:3},{name:"Bukoba",id:4},
{name:"Singida",id:5},{name:"Dodoma",id:6},{name:"Tanga",id:7},{name:"Mbeya",id:8},{name:"Kilimanjaro",id:9},
{name:"Iringa",id:10},{name:"Kigoma",id:11},{name:"Pwani",id:12},{name:"Mtwara",id:13},{name:"Ruvuma",id:14},
{name:"Lindi",id:15},{name:"Dare-es-salaam",id:16},{name:"Rukwa",id:17},{name:"Geita",id:18},{name:"Unguja",id:19},
{name:"Katavi",id:20},{name:"Pemba",id:21},{name:"Mjini Magharibi",id:22},{name:"Manyara",id:23},{name:"Mala",id:24}];

return {Categories, Locations}

}
