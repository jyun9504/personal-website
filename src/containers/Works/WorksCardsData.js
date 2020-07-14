import ImgRobofilter from '../../assets/images/robofilter.png';
import ImgJyunChat from '../../assets/images/jyunchat.png';
import ImgJyunGeo from '../../assets/images/jyungeo.png';
import ImgBuytea from '../../assets/images/buytea.png';


const worksCards = [
  {
    img: ImgRobofilter, 
    title: 'Robo Filter', 
    content: 'React App，fetch 取得機器人 User 資料，輸入框可用名字即時篩選卡片，使用 Redux 管理資料狀態。',
    src: 'https://jyun9504.github.io/robo-filter/'
  },
  {
    img: ImgBuytea, 
    title: 'Buy Tea', 
    content: 'Vue App，localStorage 儲存訂單資料，使用 Vuex 管理資料狀態。',
    src: 'https://jyun9504.github.io/buytea/'
  },
  {
    img: ImgJyunChat, 
    title: 'Jyun Chat', 
    content: 'Vue App，Firebase realtime database 即時更新聊天內容。',
    src: 'https://jyun-chat.web.app/'
  },
  {
    img: ImgJyunGeo, 
    title: 'Jyun Geo', 
    content: 'Vue App，Firebase Authentication 驗證及管理使用者，realtime database 即時存取地理位置與留言板資訊。',
    src: 'https://jyun-geo.web.app/'
  }
];

export default worksCards;