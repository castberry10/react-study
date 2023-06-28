import styled from 'styled-components';
import NewsItem from './NewsItem'
import {useState, useEffect } from 'react';
import axios from 'axios';

const NewsListBlock = styled.div`
	box-sizing: border-box;
	padding-bottom: 3rem;
	width: 768px;
	margin: 0 auto;
	margin-top: 2rem;
	@media screen and (max-width: 768px){
		width: 100%;
		padding-left: 1rem;
		padding-right: 1rem;
	}
`
const sampleActicle ={
	title: '제목',
	description: '내용',
	url: 'https://google.com',
	urlToImage: 'https://via.placeholder.com/160',
};

const NewsList = () => {
	const [articles, setArticles] = useState(null);
	const [loading, setLoding] = useState(false);
	
	useEffect(()=>{
		const fetchData = async () => {
			setLoding(true);
			try{
				const response = await axios.get('https://news-api-for-develop-nxzcc.run.goorm.site/');
				setArticles(response.data.articles);
			} catch(e){
				console.log(e);
			}
			setLoding(false);
		};
		fetchData();
	}, []);
	
	if (loading) {
		return <NewsListBlock> 대기중 . . . </NewsListBlock>;
	}
	if (!articles){
		return null;
	}
	return(
		<NewsListBlock>
		{articles.map(article =>(
			<NewsItem key = {article.url} article={article} /> 
			))}
		</NewsListBlock>
	);
};

export default NewsList;