import React, { useCallback, useEffect, useState } from "react";
import { DateFormatter } from '../../Util/lib'
import { config } from '../../Util/config'
import { Col, Image, Row } from "react-bootstrap";
import Placeholder from 'react-bootstrap/Placeholder';



export function ListNews() {
    const [page, setPage] = useState(1);
    const [newsData, setNewsData] = useState([]);
    const [loader, setLoader] = useState(false);
    
    const getNewsList = useCallback(async (nextPage = false) => {
        try {
            const response = await fetch(
                `${config.api_url}news?page=${nextPage ? page + 1 : 1}`
            );
            if (!response) {
                console.info("Failed to fetch news..!", response.error);
            }
            const data = await response.json();
            if (response?.status === 200) {
                const articles = data?.articles || [];
                if (nextPage) {
                    setPage(page + 1);
                    setNewsData((preData) => {
                        return [...preData, ...articles]
                    });
                } else {
                    setPage(1);
                    setNewsData(articles);
                }
                setLoader(false);
            }
        } catch (error) {
            console.error(error);
        }
    },[page]);

    useEffect(() => {
        setLoader(true);
        getNewsList("");
    }, [getNewsList]);

    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {!loader && newsData?.length > 0 ? (
                newsData.map((data, key) => (
                    <Col xs={4} md={3} className="news-icons" key={key}>
                        <Image src={data?.urlToImage} fluid /><br />
                        <DateFormatter dateString={data?.publishedAt} />
                        <h5>{data?.title}</h5>
                    </Col>
                ))
            ) : (
                <Col xs={12} style={{ textAlign: "center" }}>
                    <h5>Loading...!</h5>
                    <Placeholder animation="glow">
                        <Placeholder xs={6} />
                        <Placeholder xs={4} />
                        <Placeholder xs={8} />
                        <Placeholder xs={6} />
                        <Placeholder xs={8} />
                        <Placeholder xs={6} />
                        <Placeholder xs={8} />
                    </Placeholder>
                </Col>
            )}
        </Row>

    )
}