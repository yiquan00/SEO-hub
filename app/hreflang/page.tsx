export const metadata = {
  title: 'SEO Toolkit: Your One-Stop Solution',
  description: 'Discover the SEO Toolkit: Your One-Stop Solution for all your SEO needs. Our comprehensive suite includes keyword research, backlink analysis, and rank tracking tools to optimize your online presence. Boost your search engine visibility and drive more organic traffic with our expertly curated tools.',
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
