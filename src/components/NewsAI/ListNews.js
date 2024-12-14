import React, { useEffect, useState } from "react";
import { DateFormatter } from '../../Util/shared/DateFormatter';
import { config } from '../../Util/config';
import { Col, Image, Row } from "react-bootstrap";
import Placeholder from 'react-bootstrap/Placeholder';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { useTranslation } from "react-i18next";

export function ListNews() {
    const [page, setPage] = useState(1);
    const [newsData, setNewsData] = useState([]);
    const [loader, setLoader] = useState(false);
    const { t } = useTranslation();

    // Function to fetch news
    const getNewsList = async (nextPage = false) => {
        try {
            setLoader(true);
            const nextPageNumber = nextPage ? page + 1 : 1;
            const response = await fetch(`${config.api_url}news?page=${nextPageNumber}`);
            if (!response.ok) {
                console.error("Failed to fetch news:", response.statusText);
                return;
            }
            const data = await response.json();
            const articles = data?.articles || [];

            // Update state based on whether it's the next page or not
            if (nextPage) {
                setNewsData((prevData) => [...prevData, ...articles]);
                    setPage((prevPage) => prevPage + 1);
            } else {
                setNewsData(articles);
                setPage(1);  // Reset page number
            }
        } catch (error) {
            console.error("Error fetching news:", error);
        } finally {
            setLoader(false);
        }
    };

    useEffect(() => {
        getNewsList();
    }, [0]);

    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {!loader && newsData?.length > 0 ? (
                <>
                    {newsData.map((data, key) => (
                        <Col xs={4} md={3} className="news-icons" key={key}>
                            <Image src={data?.urlToImage} fluid />
                            <br />
                            <DateFormatter dateString={data?.publishedAt} />
                            <h5>{data?.title}</h5>
                        </Col>
                    ))}
                    <Col xs={12} style={{ textAlign: "center", marginTop: "20px" }}>
                        <Button
                            variant="primary"
                            onClick={() => getNewsList(true)} // Fetch next page
                            disabled={loader} // Disable button while loading
                        >
                            {loader ? (
                                <>
                                    <Spinner
                                        as="span"
                                        animation="border"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    />
                                    &nbsp; {t('messages.loading')}
                                </>
                            ) : (
                                <>
                                {t('messages.showMore')}
                                </>
                            )}
                        </Button>
                    </Col>
                </>
            ) : (
                loader ? (
                    <Col xs={12} style={{ textAlign: "center" }}>
                        <h5 className="purple">{t('messages.loading')}</h5>
                        <Placeholder animation="glow">
                            <Placeholder xs={6} />
                            <Placeholder xs={8} />
                            <Placeholder xs={4} />
                        </Placeholder>
                    </Col>
                ) : (
                    <Col xs={12} style={{ textAlign: "center" }}>
                        <h5>{t('messages.noNewsAvailable')}</h5>
                    </Col>
                )
            )}
        </Row>
    );
}
