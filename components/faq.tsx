export default function Faq() {
  return (
    <section>
  {/* Container */}
  <div className="mx-auto w-full max-w-5xl px-5 py-16 md:px-10 md:py-0 lg:py-0">

    {/*  如何工作 */}
  <div className="mx-auto max-w-7xl px-5 py-16 md:px-20 md:py-20 lg:py-20">
    {/* Heading Div */}
    <div className="mx-auto w-full max-w-3xl text-center">
      <p className="uppercase text-[#1353fe]">简单三步骤</p>
      <h2 className="text-3xl font-semibold capitalize md:text-5xl">了解 hreflang 如何在谷歌搜索中生效</h2>
      <p className="mx-auto mb-8 mt-4 max-w-[528px] text-[#636262] md:mb-12 lg:mb-16"></p>
    </div>
    {/* How it Works Div */}
    <div className="grid grid-cols-1 gap-20 md:grid-cols-3 md:gap-8 lg:gap-12">
      {/* Item */}
      <div className="relative grid gap-4 rounded-[30px] border border-solid border-[#636262] px-8 pb-8 pt-16 md:px-10 md:pt-20">
        <div className="absolute -top-8 left-10 flex flex-col items-center justify-center rounded-xl border border-solid border-[#5481fb] bg-white px-8 py-5 [box-shadow:rgb(0,_0,_0)_4px_4px]">
          <p className="text-xl font-bold md:text-2xl">1</p>
        </div>
        <p className="text-xl font-semibold">添加  hreflang 标签  </p>
        <p className="text-sm text-[#636262]">在网页中的head标签中添加hreflang，提交谷歌搜索</p>
      </div>
      {/* Item */}
      <div className="relative grid gap-4 rounded-[30px] border border-solid border-[#636262] px-8 pb-8 pt-16 md:px-10 md:pt-20">
        <div className="absolute -top-8 left-10 flex flex-col items-center justify-center rounded-xl border border-solid border-[#5481fb] bg-white px-8 py-5 [box-shadow:rgb(0,_0,_0)_4px_4px]">
          <p className="text-xl font-bold md:text-2xl">2</p>
        </div>
        <p className="text-xl font-semibold">谷歌搜索引擎抓取 </p>
        <p className="text-sm text-[#636262]">举个例子，当一个法国人谷歌搜索你的网站相关内容</p>
      </div>
      {/* Item */}
      <div className="relative grid gap-4 rounded-[30px] border border-solid border-[#636262] px-8 pb-8 pt-16 md:px-10 md:pt-20">
        <div className="absolute -top-8 left-10 flex flex-col items-center justify-center rounded-xl border border-solid border-[#5481fb] bg-white px-8 py-5 [box-shadow:rgb(0,_0,_0)_4px_4px]">
          <p className="text-xl font-bold md:text-2xl">3</p>
        </div>
        <p className="text-xl font-semibold">成功展示</p>
        <p className="text-sm text-[#636262]">你的法语内容网页将会呈现到这位法国人眼前，这就是hreflang的作用。</p>
      </div>
    </div>
  </div>

  <div className="mb-6 gap-6 overflow-hidden rounded-2xl border border-solid border-[#7e7e7e] bg-white p-8">
          <div className="mb-4 flex flex-row">
            <img src="https://ahrefs.com/blog/zh/wp-content/themes/Ahrefs-4/images/authors/JoshuaHardwick.jpg" alt="" className="mr-4 inline-block h-16 w-16 " />
            <div className="flex flex-col">
              <h6 className="text-base font-semibold">来自 Ahref 的示例说明</h6>
              <p className="text-sm text-[#636262]">Joshua Hardwick</p>
            </div>
          </div>
          <p className="mb-4 text-sm ">想象一下你经营一家销售单一产品的电子商务商店，你的商店向美国和英国发货，这两个国家都以英语为母语，但是美国客户希望以美元购买，而英国客户希望以英镑购买。</p>
          <p className="mb-4 text-sm ">为了解决这个问题，你创建了两个版本的产品页面，一个以美元显示价格，另一个以英镑显示。</p>
          <p className="mb-4 text-sm ">撇开定价不谈，这两个页面是相同的，因此需要使用 hreflang 标签向搜索引擎表明这两个版本存在的原因。</p>
          
        </div>


      {/* FAQ Item
      <div className="mb-6 max-w-4xl border-b-[2px] border-[#dfdfdf] p-8">
        <div className="flex cursor-pointer justify-between">
          <p className="text-xl font-bold">What other themes do you have?</p>
          {/*
          <div className="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center">
            <div className="absolute h-5 w-0.5 bg-[#276ef1]"></div>
            <div className="h-0.5 w-5 bg-[#276ef1]"></div>
          </div>
        </div>
        <p className="my-4">Pellentesque in nisi aliquet, pellentesque purus eget, imperdiet turpis. Fusce at enim quis neque viverra convallis. Vivamus ut elementum leo, eget tempus nisl. Sed viverra enim ac turpis posuere consectetur. Sed enim nibh, consequat vitae lacus eu, ullamcorper ullamcorper massa. Pellentesque purus eget, imperdiet turpis.</p>
      </div> */}

{/* Section FAQ */}
<section>
  {/* FAQ Container */}
  <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
    {/* FAQ Title */}
    <div className="mb-8 text-center md:mb-12 lg:mb-16">
      <h2 className="text-3xl font-bold md:text-5xl">常见问题</h2>
      <p className="mx-auto mt-4 max-w-lg text-[#647084]">-</p>
    </div>
    {/* FAQ Content */}
    <div className="mb-12 flex flex-col items-center">
      {/* FAQ Item */}
      <div className="mb-6 max-w-4xl border border-solid border-[#dfdfdf] bg-[#f2f2f7] p-8">
        <div className="flex cursor-pointer justify-between">
          <p className="text-xl font-bold">Hhreflang canonical有什么区别?</p>
        </div>
        <p className="mb-4">Hreflang和Canonical是用于SEO的两种不同的标签，用于告诉搜索引擎如何处理不同的语言或地区版本的网站。简单说来，Hreflang标签可以对说英语的人和说中文的人展示不同的页面，Canonical 标签则是告诉搜索引擎哪个网页是主要的。举例来说。</p>
        <p className="mb-4">一个网站有两个语言版本，英文版：https://example.com/article，中文版：https://example.com/article/zh，在中文版本添加Canonical标签:link rel="canonical" href="https://example.com/article" 用于指向英文网站</p>
      </div>
      {/* FAQ Item */}
      <div className="mb-6 max-w-4xl border border-solid border-[#dfdfdf] bg-[#f2f2f7] p-8">
        <div className="flex cursor-pointer justify-between">
          <p className="text-xl font-bold">hreflang 和 lang 有什么区别?</p>
        </div>
        <p className="mb-4">Hreflang和lang是HTML标签，用于SEO，但它们有不同的用途。Hreflang标签用于指定不同语言或地区版本的URL，告诉搜索引擎哪个页面是主要页面，以避免对重复内容进行惩罚。而lang标签用于指定HTML页面的主要语言，帮助搜索引擎理解页面内容。</p>
        <p className="mb-4">简而言之，Hreflang用于处理多语言内容，而lang用于标记页面的语言。说大白话就是hreflang告诉搜索引擎不同的语言访问不同的页面，而lang告诉搜索引擎当前页面使用的语言是什么。</p>

      </div>
      {/* FAQ Item */}
      <div className="mb-6 max-w-4xl border border-solid border-[#dfdfdf] bg-[#f2f2f7] p-8">
        <div className="flex cursor-pointer justify-between">
          <p className="text-xl font-bold">hreflang 怎么才能生效?</p>
          
        </div>
        <p className="mb-4">hreflang 有两种部署方式，一种是放在head标签中，例如：<a className="text-blue-600" href="https://seo.aitoolpro.work/hreflang">[点击使用]</a> ，另一种是通过sitemap生成，例如：<a className="text-blue-600" href="https://seo.aitoolpro.work/hreflang">[点击使用]</a>，如果是页面不多且不需要经常更换，可以使用前者，如果页面比较多，则采用后者会合适，具体可看<a className="text-blue-600" href="https://ahrefs.com/blog/zh/hreflang-tags/">[点击访问]</a></p>
      </div>
    </div>
  </div>

</section>





    </div>
</section>
  )
}