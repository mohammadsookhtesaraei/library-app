
import { useState } from "react";
import {books as data} from "../constants/mockData";
import Card from "./Card";


const BookCard = () => {
    const [books,setBooks]=useState(data);


    return (
        <div>
            <div>
              {books.map((item)=>(
                <Card key={item.id} book={item}/>
              ))}
            </div>
            <div>

            </div>
        </div>
    );
}

export default BookCard;
