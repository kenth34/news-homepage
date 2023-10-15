import NewsCard from "../components/NewsCard";
import { topNews } from "../constants";

const News = () => {
  return (
    <section id= "topNews"
     className="max-container max-sm:mt-12 py-9">


      <div className="flex flex-row justify-start gap-5">
        {topNews.map((news)=> (
          <NewsCard key={news.name} {...news} />
        ))}
        
      </div>

    </section>
  )
}

export default News