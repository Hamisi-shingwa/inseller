import pc from '../images/pc.png'
import smartphone from '../images/smartphone.png'
import men from '../images/men.jpg'
import multmedia from '../images/socialmedia.png'
import child from '../images/child.png'
import estate from '../images/estate.jpg'
import women from '../images/women.jpg'
import vehicle from '../images/car.png'

import React,{Component} from 'react'
import MyShop from './MyShop'


export class Categories extends Component{
    state = {items:null,
             array:[
                {category:"Electronic",image:pc,id:1},
                {category:"Multimedia",image:multmedia,id:2},
                {category:"Mens_fashion",image:men,id:3},
                {category:"Electronic",image:men,id:11},
                {category:"Hobby & sport",image:child,id:4},
                {category:"Women_fashion",image:women,id:5},
                {category:"Health_beuty",image:women,id:6},
                {category:"Smartphone",image:smartphone,id:7},
                {category:"Kids",image:child,id:8},
                {category:"Real estate",image:estate,id:9},
                {category:"Vehicle",image:vehicle,id:10},
             ]
    }
   
    render(){
        return(
            <div className='category-myshop'>
            {/* <div className='categories-parent-container'>
            {this.state.array.length ? this.state.array.map(category=>{
                return(
                    <div className='categories-container' key={category.id}>
                        <div className='categories'>
                        <div className='category_image'><img src={category.image} alt=''/></div>
                         <div className='category'>{category.category}</div>
                        </div>   
                    </div>
                )
            }):(
                <div>No category</div>
            )}
            </div> */}
            <MyShop/>
       </div>
        )
    }
}