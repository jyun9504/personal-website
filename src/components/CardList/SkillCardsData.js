import IconJavaScript from '../../assets/skill-icons/icon__javascript.png'
import IconCSS from '../../assets/skill-icons/icon__css3.png'
import IconReact from '../../assets/skill-icons/icon__reactjs.png'
import IconGit from '../../assets/skill-icons/icon__git.png'
import IconJQuery from '../../assets/skill-icons/icon__jquery.png'

const SkillCards = [ 
	{
		icon: IconJavaScript, 
		title: 'JavaScript', 
		content: '熟悉基本語法，善與後端以 fetch 方法銜接 API 進行 CRUD 功能，使用 Promise / Async 建立非同步運作。'
	},
	{
		icon: IconCSS, 
		title: 'CSS', 
		content: '熟悉 HTML, CSS 頁面佈局，使用 Sass / SCSS 編寫結構化的程式碼，可不依賴 CSS Framework 進行 RWD 客製化。'
	},
	{
		icon: IconJQuery,
		title: 'jQuery', 
		content: '熟悉 jQuery DOM 操作以及 Ajax Request'
	},
	{
		icon: IconReact, 
		title: 'React', 
		content: '暸解 React 前端框架，使用 Redux 跨組件管理。'
	},
	{
		icon: IconGit, 
		title: 'Git', 
		content: '熟悉 git / github (command line)版本控制。'
	},
]

export default SkillCards;