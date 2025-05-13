
import { useState } from "react";
import {books as data} from "../constants/mockData";
import Card from "./Card";
import SideCard from "./SideCard";


const BookCard = () => {
    const [books,setBooks]=useState(data);
    const [liked,setLiked]=useState([]);
    
    const handleLikedList=(book,status)=>{
    if(status){
        const newLikedList=liked.filter((i)=> i.id !== book.id);
        setLiked(newLikedList)
    } else {
        setLiked((prev)=>([...liked,book]))
    }
    }

    return (
        <div>
            <div>
              {books.map((item)=>(
                <Card key={item.id} book={item} handleLikedList={handleLikedList}/>
              ))}
            </div>
            {!!liked.length && (<div>
                {liked.map((item)=>(
                    <SideCard key={item.id} data={item}/>
                ))}
            </div>)}
        </div>
    );
}

export default BookCard;
