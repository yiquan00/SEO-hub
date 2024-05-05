
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
  const [originalUrl, setOriginalUrl] = useState('');
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
const removeConfiguration = index => {
  setConfigurations(configurations.filter((_, idx) => idx !== index));
};





 {/* 复制内容 */}
  const handleCopyText = () => {
      const textArea = document.querySelector('#hreflangTags');
      textArea.select();
      document.execCommand('copy');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
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
                  <button onClick={addConfiguration} className="text-blue-500 ml-2" >
                    <svg t="1714470264866" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1437" width="24" height="24"><path d="M510.833431 62.695924c-247.644193 0-448.406636 200.762443-448.406636 448.406636 0 247.65545 200.762443 448.416869 448.406636 448.416869 247.65545 0 448.416869-200.76142 448.416869-448.416869C959.2503 263.458367 758.488881 62.695924 510.833431 62.695924zM779.544429 562.112328 560.358381 562.112328l0 219.186048-102.008278 0L458.350103 562.112328 239.164055 562.112328l0-102.008278 219.186048 0L458.350103 240.918002l102.008278 0 0 219.186048 219.186048 0L779.544429 562.112328z" fill="#1296db" p-id="1438"></path></svg>
                  </button>
                )}
                <button onClick={() => removeConfiguration(index)} className="text-red-500 ml-2">
                  <svg t="1714470355650" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2584" width="24" height="24"><path d="M519.620465 0c-103.924093 0-188.511256 82.467721-192.083349 185.820279H85.015814A48.91386 48.91386 0 0 0 36.101953 234.686512a48.91386 48.91386 0 0 0 48.913861 48.866232h54.010046V831.345116c0 102.852465 69.822512 186.844279 155.909954 186.844279h439.200744c86.087442 0 155.909953-83.491721 155.909954-186.844279V284.100465h48.91386a48.91386 48.91386 0 0 0 48.913861-48.890046 48.91386 48.91386 0 0 0-48.913861-48.866233h-227.756651A191.559442 191.559442 0 0 0 519.620465 0z m-107.234232 177.080558c3.548279-49.771163 46.627721-88.540279 99.851907-88.540279 53.224186 0 96.327442 38.745302 99.351813 88.540279h-199.20372z m-111.997024 752.044651c-30.981953 0-65.083535-39.15014-65.083535-95.041488V287.744h575.488v546.839814c0 55.915163-34.077767 95.041488-65.059721 95.041488H300.389209v-0.500093z" fill="#D81E06" p-id="2585"></path><path d="M368.116093 796.814884c24.361674 0 44.27014-21.670698 44.27014-48.818605v-278.623256c0-27.147907-19.908465-48.818605-44.27014-48.818604-24.33786 0-44.27014 21.670698-44.27014 48.818604v278.623256c0 27.147907 19.360744 48.818605 44.293954 48.818605z m154.933581 0c24.361674 0 44.293953-21.670698 44.293954-48.818605v-278.623256c0-27.147907-19.932279-48.818605-44.293954-48.818604-24.33786 0-44.27014 21.670698-44.270139 48.818604v278.623256c0 27.147907 19.932279 48.818605 44.293953 48.818605z m132.810419 0c24.33786 0 44.27014-21.670698 44.27014-48.818605v-278.623256c0-27.147907-19.932279-48.818605-44.27014-48.818604s-44.27014 21.670698-44.27014 48.818604v278.623256c0 27.147907 19.360744 48.818605 44.27014 48.818605z" fill="#D81E06" p-id="2586"></path></svg> 
                </button>
          
              </div>
            ))}

            {/* Generate Hreflang Tags button */}
            <button onClick={generateHreflangTags} className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
              Update Hreflang Tags
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