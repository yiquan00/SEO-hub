
'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import FeaturesBg from '@/public/images/features-bg.png'
import FeaturesElement from '@/public/images/features-element.png'
import languages from '@/components/languages'
import Faq from '@/components/faq'


export default function HreflangTagGenerator() {



  const [showToast, setShowToast] = useState(false);
  const [originalUrl, setOriginalUrl] = useState<string>('');
// 首先，定义一个接口来描述单个配置项的类型
interface Configuration {
  lang: string;
  country: string;
  url: string;
}

// 使用interface来初始化state，以确保configurations数组中的对象符合Configuration接口的形状。
const [configurations, setConfigurations] = useState<Configuration[]>([{ lang: '', country: '', url: '' }]);

// 然后，为updateConfiguration的参数添加类型注解。
// index 是数组索引，所以它的类型是number
// field 是Configuration的键，所以它的类型是 keyof Configuration
// value 是输入值，这里我们假设它是string类型
const updateConfiguration = (index: number, field: keyof Configuration, value: string) => {
  const newConfigurations = configurations.map((config, idx) => {
    if (idx === index) {
      // 下面这行代码使用了计算属性名，这对TypeScript来说是安全的
      // 因为它知道field必然是'lang', 'country'或'url'之一
      return { ...config, [field]: value };
    }
    return config;
  });
  setConfigurations(newConfigurations);
};  


{/* 存储生成的标签 */}
const [hreflangTags, setHreflangTags] = useState(''); // 明确声明hreflangTags是字符串类型
const generateHreflangTags = () => {
  const tags = [];
  // 添加默认语言的标签
  tags.push(`<link rel="alternate" hreflang="x-default" href="${originalUrl}" />`);
  // 添加其他语言的标签
  configurations.forEach(config => {
    if (config.url && config.lang) {
      const hreflang = `${config.lang}`.toLowerCase();
      tags.push(`<link rel="alternate" hreflang="${hreflang}" href="${config.url}" />`);
    }
  });
  setHreflangTags(tags.join('\n'));
};

// 添加新的配置行的函数
const addConfiguration = () => {
  setConfigurations([
    ...configurations,
    { url: '', lang: '', country: '' } // 新行的初始值为为空
  ]);
};

// 移除指定配置行的函数
const removeConfiguration = (index: number)  => {
  setConfigurations(configurations.filter((_, idx) => idx !== index));
};





 {/* 复制内容 */}
  const handleCopyText = async () => {
  try {
    await navigator.clipboard.writeText(hreflangTags);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  } catch (err) {
    console.error('Error copying text: ', err);
  }
};





    return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Free Hreflang Tag <span className="bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/639156ce1c70c97aeb755c8a_Rectangle%2010%20(1).svg')] bg-cover bg-center px-4 text-white">Generator </span>  </h1>
            <p className="text-xl text-gray-600">Easily generate hreflang tags for your website.</p>
          </div>

          {/* Section content */}
          <div className="">

            {/* Original URL input and label */}
            <div className="flex flex-wrap items-start mb-4 w-full">
              <label htmlFor="originalUrl" className="text-xl font-semibold w-full"><span className="text-blue-500">Default URL</span><i className="text-gray-500 text-base">-This is the default global page URL that does not have any country or language associated with it</i></label>
              <input type="text" id="originalUrl" value={originalUrl} onChange={(e) => setOriginalUrl(e.target.value)} placeholder="default url" className="w-1/3 p-2 border border-gray-300 rounded" />
            </div>
            {configurations.map((configuration, index) => (
              <div key={index} className="flex flex-wrap items-center mb-4">
                <label htmlFor="originalUrl" className="text-xl font-semibold w-full"><span className="text-blue-500">Country/Language Variations</span><i className="text-gray-500 text-base">-Define URLs for each country/language variation</i></label>
                <input type="text" value={configuration.url} onChange={(e) => updateConfiguration(index, 'url', e.target.value)} placeholder="Define URLs for each language variation" className="w-60 p-2  border-gray-300 " />
                <select value={configuration.lang} onChange={(e) => updateConfiguration(index, 'lang', e.target.value)} className='  border-gray-300 '>
                  {languages.map((language) => (
                    <option key={language.code} value={language.code}>
                      {language.name}
                    </option>
                  ))}
                </select>
                {/*<select value={configuration.country} onChange={(e) => updateConfiguration(index, 'country', e.target.value)} className='border-gray-300 '>
                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.name}
                    </option>
                  ))}
                </select> */}
                {index === configurations.length - 1 && (
                 <button onClick={addConfiguration} className="text-blue-500 ml-2">
                   添加
                </button>
                )}
                <button onClick={() => removeConfiguration(index)} className="text-red-500 ml-2">
                   删除
                </button>
          
              </div>
            ))}

            {/* Generate Hreflang Tags button */}
            <button onClick={generateHreflangTags} className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
              更新结果
            </button>

            {/* Hreflang Tags textarea */}
            <textarea id="hreflangTags" value={hreflangTags} rows={10} className="w-full p-2 my-4" readOnly></textarea>
            <div className="flex justify-end">
          <button onClick={handleCopyText} className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mr-4">
            Copy 
          </button>
          {/*

          <button onClick={handleCopySitemap} className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
            复制sitemap
          </button>
          */}
        </div>

          </div>
      <Faq />
        </div>
      </div>



    {showToast && (

              <div id="toast-simple" class="fixed flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow top-20 right-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800" role="alert">
                 <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
        </svg>
              <div class="ps-4 text-sm font-normal"> Copy  success.</div>
</div>

          )}





    {/* 如下是常见问题 */}


    </section>

  );
}