import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MealsDetail = () => {
  const {id} = useParams(); //URL에서 id추출
  const [item, setItem] =useState(null); 

  useEffect(()=>{
      fetch('/db.json')
      .then(r=>r.json())//json 형식으로 데이터 변환
      .then((data) =>{
        const found = data.meals.find((m) => m.id === parseInt(id));
        setItem(found)
      }) 
      .catch(console.error);
    }, [id]); //id가 바뀔 때마다 실행
    if(!item) return <p>데이터 불러오는중..</p>

  return (
  <div>
        <div className="card">
            <figure><img src={item.image} alt={item.title} /></figure>
            <div className="recom-text">
                    <h3 className="title">{item.title}</h3>
                    <div className="info">
                        <span className="tag">
                            {item.tags.join(".")}
                        </span>
                    </div>
            </div>
            <p className="text">{item.desc}</p>
        </div>
    </div>

  );
};

export default MealsDetail;
