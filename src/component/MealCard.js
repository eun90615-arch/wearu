import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../mealcard.css";

const MealCard = ({item}) => {

    const navigate = useNavigate();
  return (
    <div className="mealsCard" onClick={()=>{ navigate(`/meals/${item.id}`)}}>
        <figure>
            <img src={item.image} alt={item.title} />
        </figure>
        <div className="meals-text">
            <h3>{item.title}</h3>
            <p className="info">
                <span className="calorie">{item.calorie}</span>
                <div className="tag-wrap">
                    <span className="tag">{item.tags.join(".")}</span>
                    <p className="recom">
                    {item.recommended&&<span className='badge'>추천</span>}</p>
                </div>
            </p>
            <p className="desc">{item.desc}</p>
            
        </div>
    </div>
  )
}

export default MealCard