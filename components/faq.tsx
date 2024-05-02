export default function Faq() {
  return (
    <section>
  {/* Container */}
  <div className="mx-auto w-full max-w-5xl px-5 py-16 md:px-10 md:py-24 lg:py-32">

    {/*  如何工作 */}
  <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
    {/* Heading Div */}
    <div className="mx-auto w-full max-w-3xl text-center">
      <p className="uppercase text-[#1353fe]">3 steps</p>
      <h2 className="text-3xl font-semibold capitalize md:text-5xl">Learn how hreflang works in  Google search</h2>
      <p className="mx-auto mb-8 mt-4 max-w-[528px] text-[#636262] md:mb-12 lg:mb-16"></p>
    </div>
    {/* How it Works Div */}
    <div className="grid grid-cols-1 gap-20 md:grid-cols-3 md:gap-8 lg:gap-12">
      {/* Item */}
      <div className="relative grid gap-4 rounded-[30px] border border-solid border-[#636262] px-8 pb-8 pt-16 md:px-10 md:pt-20">
        <div className="absolute -top-8 left-10 flex flex-col items-center justify-center rounded-xl border border-solid border-[#5481fb] bg-white px-8 py-5 [box-shadow:rgb(0,_0,_0)_4px_4px]">
          <p className="text-xl font-bold md:text-2xl">1</p>
        </div>
        <p className="text-xl font-semibold">Add hreflang tag  </p>
        <p className="text-sm text-[#636262]">Add hreflang tag in head tag</p>
      </div>
      {/* Item */}
      <div className="relative grid gap-4 rounded-[30px] border border-solid border-[#636262] px-8 pb-8 pt-16 md:px-10 md:pt-20">
        <div className="absolute -top-8 left-10 flex flex-col items-center justify-center rounded-xl border border-solid border-[#5481fb] bg-white px-8 py-5 [box-shadow:rgb(0,_0,_0)_4px_4px]">
          <p className="text-xl font-bold md:text-2xl">2</p>
        </div>
        <p className="text-xl font-semibold">Google search</p>
        <p className="text-sm text-[#636262]">When a person living in France opens a website and searches for keywords related to your website</p>
      </div>
      {/* Item */}
      <div className="relative grid gap-4 rounded-[30px] border border-solid border-[#636262] px-8 pb-8 pt-16 md:px-10 md:pt-20">
        <div className="absolute -top-8 left-10 flex flex-col items-center justify-center rounded-xl border border-solid border-[#5481fb] bg-white px-8 py-5 [box-shadow:rgb(0,_0,_0)_4px_4px]">
          <p className="text-xl font-bold md:text-2xl">3</p>
        </div>
        <p className="text-xl font-semibold">Done</p>
        <p className="text-sm text-[#636262]">Your French language pages will be presented in the search results instead of English language pages.</p>
      </div>
    </div>
  </div>
  {/* BG Image */}
  <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639832e3e7aba393eeeba215_plain6.svg" alt="" className="absolute bottom-auto left-0 right-auto top-0 inline-block sm:bottom-auto sm:left-4 sm:right-auto sm:top-8 md:left-20 md:top-16" />

      {/* FAQ Item */}
      <div className="mb-6 max-w-4xl border-b-[2px] border-[#dfdfdf] p-8">
        <div className="flex cursor-pointer justify-between">
          <p className="text-xl font-bold"></p>
          {/*
          <div className="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center">
            <div className="absolute h-5 w-0.5 bg-[#276ef1]"></div>
            <div className="h-0.5 w-5 bg-[#276ef1]"></div>
          </div>
          */}
        </div>
        <p className="my-4">

        </p>
      </div>
    </div>
  {/* */}










</section>
  )
}