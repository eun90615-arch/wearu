import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "../App.css"
import "react-multi-carousel/lib/styles.css";
import RecomCard from "../component/RecomCard";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};


const Home = () => {
  const [recs, setRecs] = useState([]);
  
  useEffect(()=>{
    fetch('/db.json')
    .then((r)=> r.json()) //요청한 데이터를 json 형태로 바꿔줘
    .then((data)=>{
      console.log("전체데이터:", data);
      const meals = data.meals || []; //data.meal가 있으면 그 값 그대로 보여주고 없으면 빈 배열로 처리 -> meals 데이터가 항상 배열로 처리되도록 해주는 구문
      console.log("meals 배열:", meals);

      //db.json에서 recommended라는 값이 true인 요소만 모아서 새 배열로 만든다면 onlyRecommended에 담음.
      const onlyRecommended = meals.filter((m)=> m.recommended);
      console.log("추천만:", onlyRecommended)

      const firstFour = onlyRecommended.slice(0,4);
      console.log('앞4개',firstFour)

      setRecs(firstFour)
    })
    .catch((err)=>{
      console.log("db.json 로드 실패:", err)
    })
  },[]) //[]은 처음 실행했을 때 한번만 실행

  return (
  <div className="contents">
    <Carousel
      responsive={responsive}
      swipeable={true}
      autoPlay={true}
      autoPlaySpeed={2500}
      infinite
      className="hero-slide"
    >
      <div>
        <img src="https://image.msscdn.net/thumbnails/images/goods_img/20180205/709191/709191_17567966175458_big.jpg?w=1200" alt="자켓" />
      </div>
      <div>
        <img src="https://image.msscdn.net/thumbnails/images/goods_img/20250723/5266738/5266738_17569541237093_big.jpg?w=1200" alt="가죽자켓" />
      </div>
      <div>
        <img src="https://image.msscdn.net/thumbnails/images/goods_img/20240806/4299739/4299739_17285443932760_big.jpg?w=1200" alt="데님자켓" />
      </div>
    </Carousel>
    <div className="intro_text">
      <h2>Find Your Look</h2>
      <span>Daily outfit ideas, just for you</span>
      <div className="text-area">
        <p>
          옷은 단순한 스타일이 아니라 당신을 표현하는 언어입니다. <br />
          매일 다른 나를 보여줄 수 있도록, 지금 필요한 패션을 <br /> 추천해드립니다.
        </p>
      </div>
    </div>

    <div className="recommendArea">
      <h2>오늘의 PICK</h2>
      <div className="recom-card">
        {
          recs.map((item)=>(
            <RecomCard key={item.id} item={item}/>
          ))
        }
      </div>
    </div>
  </div>
)
};

export default Home;
