
import { useState } from "react";
import styles from "./Card.module.css";

import { FaHeart } from "react-icons/fa";

const Card = ({book,handleLikedList}) => {
    const { author,image,pages,title,language}=book;

    const [like,setLike]=useState(false);

    const btnHandler=()=>{
        handleLikedList(book,like);
        setLike(like => !like);
    }
    return (
        <div className={styles.card}>
            <img src={image} alt={title} />

            <div className={styles.info}>
                <h3>{title}</h3>
                <p>{author}</p>
                <div>
                    <span>{language}</span>
                    <span>page :{pages} </span>
                </div>
            </div>
            <button onClick={btnHandler} className={styles.btn}><FaHeart color={like ? "red" :"#e0e0e0"} fontSize="1.8rem" /></button>
        </div>
    );
}

export default Card;
