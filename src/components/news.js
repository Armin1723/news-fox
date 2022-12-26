import React, { useEffect, useState } from "react";
import NewsComponent from "./NewsComponent";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";


function News(props) {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        props.loadProgress(0);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ff1e1e4b40d446318cc96f5a0fdaed5a&pagesize=${props.pageSize}&page=${page}`;
        setIsLoading(true);
        let data = await fetch(url);
        props.loadProgress(30);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
        props.loadProgress(70);
        setIsLoading(false);
        setTotalResults(parsedData.totalResults);
        props.loadProgress(100);
        return parsedData;
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, []);

    const fetchMoreData= async()=>{
        setIsLoading(true);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ff1e1e4b40d446318cc96f5a0fdaed5a&pagesize=${props.pageSize}&page=${page+1}`;
        setPage(page+1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setIsLoading(false);
        return parsedData;
    };

    return (
        <>
            <h3 className="mt-5 text-center">Welcome to your daily dose of news </h3>
            {(isLoading && totalResults===0) && <Spinner/>}

                <InfiniteScroll dataLength={articles.length} next={fetchMoreData} hasMore={(articles.length !== totalResults)} loader={isLoading && <Spinner /> }>
                <div className="container">
                    <div className="row my-3  ">
                        {articles.map((element) => {
                                return (
                                    <div className="col-md-4" key={element.url}>
                                    <NewsComponent title={element.title}desc={element.description}imageUrl={element.urlToImage}url={element.url}publishedAt={element.publishedAt} author={element.author?element.author:"Unknown"}/>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </InfiniteScroll>
    </>
  );
}
export default News;
