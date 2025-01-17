import React, { useEffect, useState } from "react";
import { config } from '../../Util/config';
import { Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const IFrameComponent = () => {
    const [loader, setLoader] = useState(false);
    const [url, setUrl] = useState();
    const { t } = useTranslation();

        const loadGuidUrl = async () => {
            try {
                setLoader(true);
                const URL = 'https://github.com/RuthvikMr/FE_interview_preparation/blob/main/README.md'
                const response = await fetch(`${config.api_url}guide?url=${URL}`);
                if (!response.ok) {
                    console.error("Failed to fetch news:", response.statusText);
                    return;
                }
                setUrl(await response.url);
                setLoader(false);
            } catch (error) {
                console.error("Error fetching URL:", error);
            } finally {
                setLoader(false);
            }
        };

    useEffect(() => {
        loadGuidUrl();
    }, [0]);


    return (
        <>
            {!loader ? (
                <>
                    <div className="guideSection">
                        <iframe
                            src={url}
                            title="Embedded Page"
                            className="iFramePage"
                        ></iframe>
                    </div>
                </>
            ) : (
                loader ? (
                        <Col
                            xs={12}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100vh", // Optional: if you want it vertically centered within the page
                            }}
                        >
                        <h5 className="purple">{t('messages.loading')}</h5>
                    </Col>
                ) : (
                    <Col xs={12} style={{ textAlign: "center" }}>
                        <h5>{t('messages.noNewsAvailable')}</h5>
                    </Col>
                )
            )}
        </>
    );
};

export default IFrameComponent;