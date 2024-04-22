const categories = [
	{
		name: '关键词热度查询工具',
		desc: '查询关键词排名、热度相关',
		links: [
			  { name: 'Google Ads Keyword Planner', desc: '关键词投放建议，也可用于了解关键词热度', url: 'https://ads.google.com/home/tools/keyword-planner/' },
			  { name: 'Google Trends', desc: '谷歌趋势，可了解不同地区关键词搜索情况（大体上）', url: 'https://trends.google.com/trends/?geo=US' },
			  {name:'Bing网站管理员工具关键词研究',desc:'虽然必应搜索份额不大，但，不要把鸡蛋放一个篮子，对吧。',url:'https://www.bing.com/webmasters/help/keyword-research-628070b6'},
			  {name:'“免费”的关键词生成',desc:'免费的关键词生成网站，有条件的免费，可查询目标关键词热度，Ahrefs出品',url:'https://ahrefs.com/keyword-generator'},
			  {name:'AlsoAsked',desc:'标题叫“也有人问”,意思是你的关键词别人是这么问的，',url:'https://alsoasked.com/'},
			  {name:'Answer The Public',desc:'同AlsoAsked，多了TikTok搜索，呈现的方式和AlsoAsked不太一样',url:'https://answerthepublic.com/'},
			  {name:'QuestionDB',desc:'也是一款根据关键词收集相关问题的网站',url:'https://questiondb.io/'},
			  {name:'WordStream',desc:'也是一款根据关键词收集相关问题的网站',url:'https://www.wordstream.com/keywords'},
			  {name:'#SuggestMrx',desc:'需要翻墙，关键字拓展',url:'https://www.suggestmrx.com/index-en.php'},
			  {name:'Reddit关键词研究工具',desc:'可理解为一个公告平台（或者简单点，理解为是微信公众号）上的热门关键词',url:'https://www.highervisibility.com/free-seo-tools/keyworddit/'},
			  {name:'Keyword Surfer',desc:'谷歌浏览器拓展工具，在搜索的时候可给予拓展词、搜索量等提示',url:'https://chrome.google.com/webstore/detail/keyword-surfer/bafijghppfhdpldihckdcadbcobikaca?hl=en'},
			  {name:'SERP探索器',desc:'基于Web的Keyword Insights工具',url:'https://www.keywordinsights.ai/serp-explorer/'},
			  {name:'SERP相似度',desc:'基于Web的Keyword Insights工具',url:'https://www.keywordinsights.ai/serp-similarity/'},
			  {name:'Larseo',desc:'基于Web的Larseo工具',url:'https://larseo.app/'},
		],
	},
	{
		name: '关键词衍生问题查询工具',
		desc: '加入你的产品是iPhone，也许你会从相关的问题列表中找到合适的推广素材',
		links: [
			  {name:'AlsoAsked',desc:'标题叫“也有人问”,意思是你的关键词别人是这么问的，',url:'https://alsoasked.com/'},
			  {name:'Answer The Public',desc:'同AlsoAsked，多了TikTok搜索，呈现的方式和AlsoAsked不太一样',url:'https://answerthepublic.com/'},
			  {name:'QuestionDB',desc:'也是一款根据关键词收集相关问题的网站',url:'https://questiondb.io/'},
			  {name:'WordStream',desc:'也是一款根据关键词收集相关问题的网站',url:'https://www.wordstream.com/keywords'},
	},
	{
		name: '页面SEO工具',
		links: [
			  {name:'Google搜索控制台覆盖范围、URL检查和爬虫统计报告',desc:'基于Web的Google工具',url:'https://search.google.com/search-console/about'},
			  {name:'Bing网站管理员工具站点扫描和SEO报告',desc:'基于Web的Bing工具',url:'https://www.bing.com/webmasters/help/seo-reports-55a30304'},
			  {name:'Screaming Frog SEO Spider',desc:'桌面端的Screaming Frog工具',url:'https://www.screamingfrog.co.uk/seo-spider/'},
			  {name:'Greenflare: The Open Source SEO Crawler',desc:'桌面端的Greenflare工具',url:'https://greenflare.io/'},
			  {name:'SEOlyzer: Crawler & log analysis for all SEO',desc:'基于Web的SEOlyzer工具',url:'https://seolyzer.io/'},
			  {name:'httpstatus.io: Easily check status codes, response headers, and redirect chains',desc:'基于Web的Sander Heilbron工具',url:'https://httpstatus.io/'},
			  {name:'SEO服务器头部检查工具：Server Headers是快速提取URL中有用SEO数据的一站式工具',desc:'基于Web的Ryan Jones工具',url:'https://www.serverheaders.com/'},
			  {name:'Ahrefs网站管理员工具',desc:'基于Web的Ahrefs工具',url:'https://ahrefs.com/webmaster-tools'},
			  {name:'Siteliner: Explore your website, revealing key issues',desc:'基于Web的Siteliner工具',url:'https://www.siteliner.com/'},
			  {name:'Checkbot: SEO, Web Speed & Security Tester',desc:'浏览器扩展的Checkbot工具',url:'https://chrome.google.com/webstore/detail/checkbot-seo-web-speed-se/dagohlmlhagincbfilmkadjgmdnkjinl'},
			  {name:'SEO Minion: On-Page SEO, Broken Link Checker, Hreflang Checker & more',desc:'浏览器扩展的SEO minion工具',url:'https://seominion.com/'},
			  {name:'Detailed SEO Extension',desc:'浏览器扩展的Detailed工具',url:'https://detailed.com/extension/'},
			  {name:'SEO Pro Extension',desc:'浏览器扩展的Marketing Syrup工具',url:'https://marketingsyrup.com/seo-pro-extension/'},
			  {name:'SEOInfo',desc:'浏览器扩展的Weeblr工具',url:'https://www.weeblrpress.com/blog/seoinfo-our-free-chrome-and-firefox-extension'},
			  {name:'Spark Content Optimizer',desc:'浏览器扩展的SEOClarity工具',url:'https://chrome.google.com/webstore/detail/spark-content-optimizer/lbdjpmmladpghbcpadpeaiiopkcejpnf?hl=en'},

		],
	},
	{
		name: '链接建设工具',
		links: [
			  {name:'Google搜索控制台链接报告',desc:'基于Web的Google工具',url:'https://search.google.com/search-console/about'},
			  {name:'Bing网站管理员工具反向链接报告',desc:'基于Web的Bing工具',url:'https://www.bing.com/webmasters/help/backlinks-c3a334e8'},
			  {name:'Ahrefs反向链接检查器',desc:'基于Web的Ahrefs工具',url:'https://ahrefs.com/backlink-checker'},
			  {name:'免费反向链接检查器',desc:'基于Web的Rankwatch工具',url:'https://www.rankwatch.com/en/backlinks/'},
			  {name:'Broken Link Checker',desc:'基于Web的Ahrefs工具',url:'https://ahrefs.com/broken-link-checker'},
			  {name:'BuzzStream免费链接建设工具',desc:'基于Web的Buzzstream工具',url:'https://tools.buzzstream.com/link-building'},
			  {name:'Hunter: 秒内找到电子邮件地址',desc:'基于Web的工具',url:'https://hunter.io/'},

		],
	},
	{
		name: '排名监控工具',
		links: [
			   {name:'Google搜索控制台性能报告',desc:'基于Web的Google工具',url:'https://search.google.com/search-console/about'},
			    {name:'Bing网站管理员工具搜索性能报告',desc:'基于Web的Bing工具',url:'https://www.bing.com/webmasters/help/search-performance-c680da36'},
			    {name:'Ahrefs网站管理员工具',desc:'基于Web的Ahrefs工具',url:'https://ahrefs.com/webmaster-tools'},
			    {name:'thruuu: Awesome SERP Analyzer',desc:'基于Web的thruuu工具',url:'https://samuelschmitt.com/thruuu/'},
			    {name:'SERP Checker',desc:'基于Web的Accuranker工具',url:'https://www.accuranker.com/rank-tracker'},
			    {name:'SEO Search Simulator by Nightwatch',desc:'浏览器扩展的Nightwatch工具',url:'https://chrome.google.com/webstore/detail/seo-search-simulator-by-n/edfjfgjklednkencfhnokmkajbgfhpon?hl=en'},
			    {name:'SEOminion: SEO扩展与多位置SERP模拟器',desc:'浏览器扩展的SEOminion工具',url:'https://seominion.com/'},
		],
	},
	{
			nama:'SEO仪表板和报告工具',
			links:[
				  {name:'50+ Google Data Studio 模板可加快您的 SEO 报告速度',desc:'Google 表格来自 Google 表格 for Marketers',url:'https://sheetsformarketers.com/data-studio-templates/'},
				  {name:'9 个 SEO 报告 Google Data Studio 和 Google 表格模板，您今天可以滑动',desc:'Supermetrics 的 Google Data Studio 和 Google 表格',url:'https://supermetrics.com/blog/seo-report-templates'},
				  {name:'Search Console Explorer Studio and Sheet、Cannibalization Explorer 等。',desc:'来自 Hannah Rampton',url:'https://www.hannahrampton.co.uk/my-tools/'},

			],
	},
	{
			name:'页面速度优化工具',
			links:[
				  {name:'50+ Google Data Studio 模板可加快您的 SEO 报告速度',desc:'Google 表格来自 Google 表格 for Marketers',url:'https://sheetsformarketers.com/data-studio-templates/'},
				  {name:'9 个 SEO 报告 Google Data Studio 和 Google 表格模板，您今天可以滑动',desc:'Supermetrics 的 Google Data Studio 和 Google 表格',url:'https://supermetrics.com/blog/seo-report-templates'},
				  {name:'Search Console Explorer Studio and Sheet、Cannibalization Explorer 等。',desc:'来自 Hannah Rampton',url:'https://www.hannahrampton.co.uk/my-tools/'},
	
			],
	},
	{
			name:'',
			links:[
				  {name:'Google搜索控制台性能报告',desc:'基于Web的Google工具',url:'https://search.google.com/search-console/about'},
				  {name:'Bing网站管理员工具搜索性能报告',desc:'基于Web的Bing工具',url:'https://www.bing.com/webmasters/help/search-performance-c680da36'},
				  {name:'Ahrefs网站管理员工具',desc:'基于Web的Ahrefs工具',url:'https://ahrefs.com/webmaster-tools'},
				  {name:'thruuu: Awesome SERP Analyzer',desc:'基于Web的thruuu工具',url:'https://samuelschmitt.com/thruuu/'},
				  {name:'SERP Checker',desc:'基于Web的Accuranker工具',url:'https://www.accuranker.com/rank-tracker'},
				  {name:'SEO Search Simulator by Nightwatch',desc:'浏览器扩展的Nightwatch工具',url:'https://chrome.google.com/webstore/detail/seo-search-simulator-by-n/edfjfgjklednkencfhnokmkajbgfhpon?hl=en'},
				  {name:'SEOminion: SEO扩展与多位置SERP模拟器',desc:'浏览器扩展的SEOminion工具',url:'https://seominion.com/'},
			],
	},
	{
			name:'',
			links:[
				    {name:'50+ Google Data Studio 模板可加快您的 SEO 报告速度',desc:'Google 表格来自 Google 表格 for Marketers',url:'https://sheetsformarketers.com/data-studio-templates/'},
				    {name:'9 个 SEO 报告 Google Data Studio 和 Google 表格模板，您今天可以滑动',desc:'Supermetrics 的 Google Data Studio 和 Google 表格',url:'https://supermetrics.com/blog/seo-report-templates'},
				    {name:'Search Console Explorer Studio and Sheet、Cannibalization Explorer 等。',desc:'来自 Hannah Rampton',url:'https://www.hannahrampton.co.uk/my-tools/'},

			],
	},
	// 其他类别...
];

export default categories;


