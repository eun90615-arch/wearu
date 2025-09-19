import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../tips.css';

const Tips = () => {
  return (
  <div className="contents">
    <h2>25' 가을 시즌룩북</h2>
     <Tabs>
    <TabList>
      <Tab>🧥아우터</Tab>
      <Tab>👕티셔츠</Tab>
      <Tab>👖데님</Tab>
    </TabList>

    <TabPanel>
      <h2>간절기 아우터 추천</h2>
      <div className="book">
        <img src="https://image.msscdn.net/thumbnails/images/goods_img/20250108/4705914/4705914_17369182615218_big.jpg?w=1200" alt="자켓" />
      </div>
    </TabPanel>
    <TabPanel>
      <h2>기본 티셔츠</h2>
      <div className="book">
        <img src="https://image.msscdn.net/thumbnails/images/goods_img/20250108/4705830/4705830_17364851077472_big.jpg?w=1200" alt="티셔츠" />
      </div>
    </TabPanel>
    <TabPanel>
      <h2>데님 바지 추천</h2>
      <div className="book">
        <img src="https://image.msscdn.net/thumbnails/images/goods_img/20250804/5289678/5289678_17554913475546_big.jpg?w=1200" alt="데님" />
      </div>
    </TabPanel>
  </Tabs>
  </div>

  );
};

export default Tips;
