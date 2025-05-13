
import { useState } from "react";
import {books as data} from "../constants/mockData";
import Card from "./Card";
import SideCard from "./SideCard";

import styles from "./BookCard.module.css";

const BookCard = () => {
    const [books,setBooks]=useState(data);
    const [liked,setLiked]=useState([]);
    
    const handleLikedList=(book,status)=>{
    if(status){
        const newLikedList=liked.filter((i)=> i.id !== book.id);
        setLiked(newLikedList)
    } else {
        setLiked((prev)=>([...prev,book]))
    }
    }

    return (
        <div className={styles.container}>
            <div className={styles.cards}>
              {books.map((item)=>(
                <Card key={item.id} book={item} handleLikedList={handleLikedList}/>
              ))}
            </div>
            {!!liked.length && (<div className={styles.favorite}>
                <h4>favorites list</h4>
                {liked.map((item)=>(
                    <SideCard key={item.id} data={item}/>
                ))}
            </div>)}
        </div>
    );
}

export default BookCard;
