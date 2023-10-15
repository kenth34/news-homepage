const NewsCard = ({imgUrl, name, desc}) => {
  return (
    <div className="flex flex-1 flex-row max-w-2/4 justify-center items-top max-sm:w-full gap-4 box-shadow">
      <img 
      src={imgUrl} 
      alt={name} 
      className="w-[180px] h-[150px]"
      />
      <div className="flex flex-col justify-start">
        <p className="font-inter text-2xl leading-normal text-slate-gray tracking-widest">01</p>
        <h3 className="text-xl leading-normal font-semibold font-inter">{name}</h3>
        <p className="mt-2 text-l leading-normal font-montserrat font-semibold text-coral-red">{desc}</p>
      </div>

    </div>
  )
}

export default NewsCard