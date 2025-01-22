import React, { useEffect, useState } from "react";
import { config } from '../../Util/config';
import { Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import reading from "../../Assets/icons/reading.svg";
import { Button, Layout, Menu } from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { FaGithub } from "react-icons/fa";
const { Sider } = Layout;

function getItem(label, key, url, icon, children) {
    return {
        key,
        icon,
        children,
        label,
        url
    };
}

const IFrameComponent = (props) => {
    const { iframe } = props;
    const [loader, setLoader] = useState(false);
    const [url, setUrl] = useState();
    const [collapsed, setCollapsed] = useState(true);
    const { t } = useTranslation();
    const [isMobile, setIsMobile] = useState(false);
    const [menuItems, setMenuItems] = useState();
    const [selectedItem, setSelectedItem] = useState('0');

    const items = () => {
        const menuItm = iframe.map((item, key) => {
            return getItem(item.label, key, item.url, <FaGithub />)
        });
        setMenuItems(menuItm);
    }



    // Detect screen size changes
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        };

        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const loadGuidUrl = async (url) => {
        try {
            setLoader(true);
            // const URL = 'https://github.com/RuthvikMr/FE_interview_preparation/blob/main/README.md'
            const response = await fetch(`${config.api_url}guide?url=${url}`);
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
        items();
        loadGuidUrl(iframe[0]?.url);
    }, []);

    const onTabChange = ($event) => {
        try {
            const selectedItem = menuItems.find((item) => item.key === Number($event.key));
            if (selectedItem) {
                setSelectedItem($event.key);
                setTimeout(() => {
                    loadGuidUrl(selectedItem?.url);
                }, 1000);
            }
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <>
            <div className="guideSection">
                <div className="d-flex justify-content-between h-100">
                    {/* Mobile View  */}
                    {isMobile ? (
                        <>
                            <div className="guideSection">
                                <div className="d-flex flex-column h-100">
                                    {/* Top Chips/Menu */}
                                    <div className="top-menu-container">
                                        <div className="chips-container">
                                            {menuItems.map((item) => (
                                                <Button
                                                    key={item.key}
                                                    type="default"
                                                    icon={item.icon}
                                                    onClick={() => onTabChange(item)}
                                                    style={{ margin: "5px" }}
                                                >
                                                    {item.label}
                                                </Button>
                                            ))}
                                        </div>
                                    </div>
                                    {/* Main Content: IFrame */}
                                    {!loader ? (
                                        <iframe
                                            src={url}
                                            title="Embedded Page"
                                            className="iFramePage"
                                        ></iframe>
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
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Full Screen  */}
                            {/* Flex Box 1  */}
                            <div className="d-flex align-items-end">
                                <img
                                    src={reading}
                                    alt="Failed to load"
                                    className="img-fluid guide-logo"
                                    style={{ maxHeight: "100px" }}
                                />

                            </div>
                            <div  className="iFramePage">
                                {!loader ? (
                                    <>
                                        {/* Flex Box 2  */}
                                        <iframe
                                            src={url}
                                            title="Embedded Page"
                                            className="iFramePage"
                                        ></iframe>
                                    </>
                                ) : (
                                    loader ? (
                                        <Col
                                            xs={12}
                                            style={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                height: "100vh",
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
                            </div>

                            {/* Flex Box 3  */}
                            <div>
                                <Button
                                    type="text"
                                    className="bg-transparent text-white collapse-btn"
                                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                                    onClick={() => setCollapsed(!collapsed)}
                                    style={{
                                        fontSize: '16px',
                                        width: 64,
                                        height: 64,
                                    }}
                                />
                                <Sider collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} className="custom-sider">
                                    <div className="demo-logo-vertical" />
                                    <Menu className="bg-transparent custom-menu" defaultSelectedKeys={[selectedItem]} mode="inline" items={menuItems} onClick={onTabChange} />
                                </Sider>
                            </div>
                        </>
                    )
                    }
                </div>
            </div>
        </>
    );
};

export default IFrameComponent;