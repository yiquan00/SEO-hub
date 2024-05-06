export const metadata = {
  title: '免费的Hreflang生成',
  description: 'Hreflang tags are important for SEO and internationalization. They help Google understand the language and region of a webpage. No self-referencing hreflang is recommended as it can confuse search engines. In Shopify, hreflang can be used to indicate language and region variations. It is essential to use the correct hreflang tags in HTML for proper SEO. The canonical and hreflang tags should be used together to indicate the preferred version of a webpage. Hreflang tags are used in conjunction with the lang attributes in HTML to indicate the language of a page. It is important to use the correct hreflang attribute value, such as ‘en-US’, in HTML files for proper SEO.',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import HreflangTagGenerator from '@/components/HreflangTagGenerator'

export default function Home() {

  return (
  
    <>
	 {/*<Features />
	<Testimonials /> */}
     <HreflangTagGenerator /> 

     {/*
	 <Hero />
	 <FeaturesBlocks />
	  <Features />
	 <Testimonials />*/}
      {/*<Newsletter />*/}
    </>
	
  )
}
