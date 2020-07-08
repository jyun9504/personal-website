import ImgElevator from '../../assets/images/elevator.jpg';
import ImgCatchy from '../../assets/images/catchy.jpg';
import ImgSchool from '../../assets/images/school.png';

const ProjectsData = [ 
	{
		img: ImgElevator, 
    title: '電梯雲端監控管理系統', 
    content: '將傳統電梯導入物聯網概念，並提供即時地圖與即時故障紀錄供監控中心人員第一時間獲悉電梯故障，並且通知最近的維修人員前往察看。目前已商用，且在日本、大陸、越南、中東皆有成功案例。',
    company: '上市公司 (電力機械器材製造相關)',
    contribution: '參與前端開發，與後端合作串接 RESTful API，導入google與百度地圖api，與切換顯示功能。',
    tech: 'jQuery、AJAX、Laravel、Google Maps API'
  },
  {
		img: ImgCatchy, 
    title: '消費者協同雲端分享行動社群系統', 
    content: '利用行動裝置的普及建立一個雲端分享行動社群，讓使用者能透過此平台，即時分享自己所見與所愛等商品，打破傳統購物迷失。在手機雙系統與 Web 網頁上線。',
    company: 'KT工作室',
    contribution: '參與網站後台開發，與後端合作開發各項後台功能，使用者管理、文章管理、推播管理。',
    tech: 'jQuery、AJAX、Laravel、Bootstrap'
  },
  {
		img: ImgSchool, 
    title: '學校網站', 
    content: '修復原先網站排版不佳，開發使用前後端分離，增加網站維護性以及擴充性，使此網站更能突顯校風活潑的品格，並於網站上增加每日語言學習，影音專區促進校內活動價值。',
    company: '臺中地方國小',
    contribution: '參與網站後台開發，與後端合作完成網站後台功能，各項佈告欄管理、附件上傳、輪播圖、etc。',
    tech: 'jQuery、AJAX、Laravel、Bootstrap'
	}
]

export default ProjectsData;