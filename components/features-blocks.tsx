import categories from './categories';

export default function FeaturesBlocks() {

	
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0  pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">


{categories.map((category, index) => (
	    <div key={index} className="mb-16">
		<div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
		  <h2 className="h2 mb-4">{category.name}</h2>
		  <p className="text-xl text-gray-600">{category.desc}</p>
		</div>
	      <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
	        {category.links.map((link, index) => (
			  <a className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl" href={link.url}
	            key={index}
	            target="_blank"
	            rel="noopener noreferrer">
				{/*<svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
				  <g fill="none" fillRule="evenodd">
				    <rect className="fill-current text-blue-300" width="64" height="64" rx="32" />
				    <g strokeWidth="2">
				      <path className="stroke-current text-blue-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
				      <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
				      <path className="stroke-current text-blue-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
				      <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />  
				    </g>
				  </g>
				</svg> 
				<svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 256 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
				<path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"/><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"/><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"/><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"/>
				</svg>*/}
			    <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">{link.name}</h4>
				<p className="text-gray-600 text-center">{link.desc}</p>
			  </a>			  
	        ))}
	      </div>
	    </div>
	  ))}
        </div>
      </div>
    </section>
  )
}