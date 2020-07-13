import ImgRobofilter from '../../assets/images/robofilter.png';
import ImgJyunChat from '../../assets/images/jyunchat.png';
import ImgBuytea from '../../assets/images/buytea.png';

const worksCards = [
  {
    img: ImgRobofilter, 
    title: 'Robo Filter', 
    content: 'React App，使用 fetch 取得機器人 User 資料，機器人卡片可以對名字即時篩選。',
    src: 'https://jyun9504.github.io/robo-filter/'
  },
  {
    img: ImgBuytea, 
    title: 'Buy Tea', 
    content: 'Vue App，localStorage 存取訂單資料。',
    src: 'https://jyun-chat.web.app/'
  },
  {
    img: ImgJyunChat, 
    title: 'Jyun Chat', 
    content: 'Vue App，Firebase realtime database 即時存取聊天資料。',
    src: 'https://jyun-chat.web.app/'
  }
];

export default worksCards;