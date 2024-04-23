const categories = [
	{
		name: '关键词热度排名、查询工具',
		desc: '查询关键词排名、热度相关',
		links: [
			  { name: 'Google Ads Keyword Planner', desc: '关键词投放建议，也可用于了解关键词热度#Google', url: 'https://ads.google.com/home/tools/keyword-planner/' },
			  { name: 'Google Trends', desc: '谷歌趋势，可了解不同地区关键词搜索情况（大体上）', url: 'https://trends.google.com/trends/?geo=US' },
			  {name:'Bing 关键词研究',desc:'虽然必应搜索份额不大，但，不要把鸡蛋放一个篮子，对吧。',url:'https://www.bing.com/webmasters/help/keyword-research-628070b6'},
			  {name:'“免费”的关键词生成',desc:'免费的关键词生成网站，有条件的免费，可查询目标关键词热度，Ahrefs出品',url:'https://ahrefs.com/keyword-generator'},
			  {name:'关键词联想工具',desc:'需要翻墙，关键字拓展',url:'https://www.suggestmrx.com/index-en.php'},
			  {name:'Reddit关键词研究工具',desc:'可理解为一个公告平台（或者简单点，理解为是微信公众号）上的热门关键词',url:'https://www.highervisibility.com/free-seo-tools/keyworddit/'},
			  {name:'Keyword Surfer',desc:'谷歌浏览器拓展工具，在搜索的时候可给予拓展词、搜索量等提示',url:'https://chrome.google.com/webstore/detail/keyword-surfer/bafijghppfhdpldihckdcadbcobikaca?hl=en'},
			  {name:'SERP相似度查询工具',desc:'一款帮助判断不同关键词是否建议在同一页面还是分开不同页面的网站',url:'https://www.keywordinsights.ai/serp-similarity/'},
			  {name:'Larseo',desc:'一款可能是Ahrefs、semrush平替的产品',url:'https://larseo.app/'},


		],
	},
	{
		name: '关键词衍生问题查询',
		desc: '假如你在推广iPhone，也许你能从问题列表找到“我该怎么将iPhone强制关机”的热门话题，并提供对应的教程以吸引用户访问你的网站',
		links: [
			  
			  {name:'AlsoAsked',desc:'标题叫“也有人问”,意思是你的关键词别人是这么问的',url:'https://alsoasked.com/'},
			  {name:'Answer The Public',desc:'同AlsoAsked，多了TikTok搜索，呈现的方式和AlsoAsked不太一样',url:'https://answerthepublic.com/'},
			  {name:'QuestionDB',desc:'也是一款根据关键词收集相关问题的网站',url:'https://questiondb.io/'},
			  {name:'WordStream',desc:'也是一款根据关键词收集相关问题的网站',url:'https://www.wordstream.com/keywords'},
			  {name:'谷歌快讯',desc:'谷歌出品，感兴趣话题订阅',url:'https://www.google.com/alerts#'},

		],
	},
	{
		name: '页面访问情况分析',
		desc:'了解页面采集、浏览情况',
		links: [
			  {name:'Google搜索控制台',desc:'谷歌搜索控制台，查看流量分布',url:'https://search.google.com/search-console/about'},
			  {name:'Bing网站管理员工具站点',desc:'',url:'https://www.bing.com/webmasters/help/seo-reports-55a30304'},
			  {name:'SEO服务器头部检查工具',desc:'判断网站访问情况、整体数据的网站，还能提供部分建议',url:'https://www.serverheaders.com/'},
			  {name:'Ahrefs网站管理员工具',desc:'一款分析网站的主流网站，功能较多',url:'https://ahrefs.com/webmaster-tools'},
			  {name:'Siteliner',desc:'一款分析网站整体情况的工具，推荐在有大的访问量再看',url:'https://www.siteliner.com/'},
			  {name:'Checkbot',desc:'浏览器插件，测试网页速度、安全性',url:'https://chrome.google.com/webstore/detail/checkbot-seo-web-speed-se/dagohlmlhagincbfilmkadjgmdnkjinl'},
			  {name:'SEO Minion',desc:'浏览器拓展工具，分析SEO 问题',url:'https://seominion.com/'},

		],
	},
		{
		name: '链接建设工具',
		desc:'查看反链、坏链情况',
		links: [
			  {name:'Ahrefs反链检查工具',desc:'Ahrefs 出品的反链检查工具',url:'https://www.screamingfrog.co.uk/seo-spider/'},
			  {name:'rankwatch',desc:'同样是反链检查工具，维度会比Ahrefs 更多',url:'https://www.rankwatch.com/en/backlinks/'},
			  {name:'坏链检查工具',desc:'Ahrefs出品坏链检查工具',url:'https://ahrefs.com/broken-link-checker/?input=seo.aitoolpro.work&mode=subdomains'},

		],
	},
	{
		name: '网络速度优化工具',
		desc:'了解你的网站访问速度',
		links: [
			  {name:'PageSpeed Insights',desc:'谷歌出品，网站测速，速度过慢会影响谷歌评判',url:'https://pagespeed.web.dev/'},
			  {name:'wattspeed',desc:'优化访问速度',url:'https://wattspeed.com/'},

		],
	},
	{
		name: '模拟爬虫采集网站，给予优化建议',
		desc:'通过模拟谷歌爬虫采集网站，提出改进建议',
		links: [
			  {name:'Screaming Frog SEO Spider',desc:'采集你的网站，帮助你分析如何提高SEO，免费版本可采集500个链接',url:'https://www.screamingfrog.co.uk/seo-spider/'},
			  {name:'Greenflare: The Open Source SEO Crawler',desc:'一款开源的采集分析工具，与Screaming Frog SEO Spider功能相近',url:'https://greenflare.io/'},
			  {name:'SEOlyzer: Crawler & log analysis for all SEO',desc:'采集并提出改进建议',url:'https://seolyzer.io/'},

		],
	},
];

export default categories;


