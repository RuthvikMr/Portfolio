import React, { lazy, useState } from "react";
import { Row, Col, Tab, Nav, Card, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { CgWebsite } from "react-icons/cg";
import * as Icons from "react-icons/bi";
import * as DiIcons from "react-icons/di";
import * as SiIcons from "react-icons/si";
import { Roll, Rotate, Slide } from "react-awesome-reveal";
import './Dct.css';


export default function DynamicContents({ type, tabData, sharedComponent = false, animate = true }) {

    const [activeKey, setActiveKey] = useState(tabData?.tabs[0]?.key);
    const { t } = useTranslation();

    const onTabSelect = (event) => {
        setActiveKey(event);
    }

    const tabStyle = (isActive) => ({
        background: isActive
            ? "linear-gradient(135deg, rgba(168,85,247,8.3), rgba(99,102,241,8.3))"
            : "rgba(255,255,255,0.05)",
        backdropFilter: "blur(12px)",
        borderRadius: "15px",
        color: "#fff",
        padding: "12px 28px",
        fontWeight: "600",
        border: isActive
            ? "1px solid rgba(168,85,247,0.6)"
            : "1px solid rgba(255,255,255,0.1)",
        boxShadow: isActive
            ? "0 0 25px rgba(168,85,247,0.6)"
            : "0 0 10px rgba(0,0,0,0.2)",
        transition: "all 0.4s ease",
    });

    const cardStyle = {
        background: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        backdropFilter: "blur(10px)",
        borderRadius: "18px",
        overflow: "hidden",
        transition: "all 0.4s ease",
        cursor: "pointer",
        boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
    };

    const cardHover = (e) => {
        e.currentTarget.style.transform = "translateY(-8px) scale(1.03)";
        e.currentTarget.style.boxShadow =
            "0 12px 35px rgba(168,85,247,0.5)";
        e.currentTarget.style.border =
            "1px solid rgba(168,85,247,0.6)";
    };

    const cardLeave = (e) => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)";
        e.currentTarget.style.border =
            "1px solid rgba(255, 255, 255, 0.15)";
    };

    const tabItem = (index, tabs) => {
        return (
            <Nav.Item id={index} key={index} className="text-center dct-nav-item">
                <Nav.Link
                    eventKey={tabs?.key}
                    style={tabStyle(activeKey === tabs?.key)}
                    className="dct-nav-link"
                >
                    {tabs?.icon && tabs?.iconSettings?.package === 'bi' ? (
                        <>
                            <DynamicIcon name={tabs?.icon} color={tabs?.iconSettings?.color ?? null} size={tabs?.iconSettings?.size ?? null} />
                        </>
                    ) : (tabs?.icon && tabs?.iconSettings?.package === 'di' ? (
                        <>
                            <DiIconsClass name={tabs?.icon} color={tabs?.iconSettings?.color ?? null} size={tabs?.iconSettings?.size ?? null} />
                        </>
                    ) : (
                        tabs?.icon && tabs?.iconSettings?.package === 'si' ? (
                            <>
                                <SiIconsClass name={tabs?.icon} color={tabs?.iconSettings?.color ?? null} size={tabs?.iconSettings?.size ?? null} />
                            </>
                        ) : <>

                        </>
                    )
                    )}
                    <br />
                    {tabs?.name}
                </Nav.Link>
            </Nav.Item>
        );
    }

    return (
        <>
            {type === 'tab' && tabData?.data?.length > 0 ? (<>
                {/* Tabs */}
                <Tab.Container activeKey={activeKey} id="tab_container" onSelect={(k) => onTabSelect(k)}>
                    <Row className="justify-content-center mb-5 dct-tabs-row" style={{ gap: "18px" }}>
                        {tabData?.tabs.map((tabs, index) => (
                            <Col key={index} className="dct-tab-col">
                                {!animate ? (
                                    <>
                                        {tabItem(index, tabs)}
                                    </>
                                ) : (
                                    <Rotate direction="down" triggerOnce>
                                        {tabItem(index, tabs)}
                                    </Rotate>
                                )}
                            </Col>
                        ))}
                    </Row>

                    {/* Content */}
                    <Tab.Content>
                        <>
                            <Tab.Pane eventKey={activeKey}>
                                {type === 'tab' && !sharedComponent && tabData?.data?.length > 0 ? (
                                    <Row className="g-4 dct-cards-row">
                                        {tabData.data
                                            .filter((item) => item.key === activeKey)
                                            .map((items, index) => (
                                                <Col md={4} sm={6} xs={12} key={items.key + index} className="dct-card-col" style={{ width: items?.style?.width ?? null, height: items?.style?.height ?? null }}>
                                                    <Roll triggerOnce>
                                                        <Card
                                                            className="p-3 h-100 text-center dct-card"
                                                            style={cardStyle}
                                                            onMouseEnter={cardHover}
                                                            onMouseLeave={cardLeave}
                                                        >
                                                            {items?.image ?
                                                                <div style={{ overflow: "hidden", borderRadius: "12px", width: items?.style?.imgWidth ?? null, height: items?.style?.imgHeight ?? null }}>
                                                                    <Card.Img
                                                                        variant="top"
                                                                        src={require(`../../../Assets/${items?.image}`)}
                                                                        alt="Error Loading image!!"
                                                                        style={{
                                                                            borderRadius: "12px",
                                                                            transition: "transform 0.4s ease",
                                                                            height: items?.style?.stretchImg ?? null
                                                                        }}
                                                                        onMouseEnter={(e) =>
                                                                            (e.currentTarget.style.transform = "scale(1.4)")
                                                                        }
                                                                        onMouseLeave={(e) =>
                                                                            (e.currentTarget.style.transform = "scale(1)")
                                                                        }
                                                                    />
                                                                </div> : (items?.icon && items?.iconSettings?.package === 'bi' ? (
                                                                    <div>
                                                                        <DynamicIcon name={items?.icon} color={items?.iconSettings?.color ?? null} size={items?.iconSettings?.size ?? null} />
                                                                    </div>
                                                                ) : (items?.icon && items?.iconSettings?.package === 'di' ? (
                                                                    <div>
                                                                        <DiIconsClass name={items?.icon} color={items?.iconSettings?.color ?? null} size={items?.iconSettings?.size ?? null} />
                                                                    </div>
                                                                ) : (items?.icon && items?.iconSettings?.package === 'si' ? (
                                                                    <div>
                                                                        <SiIconsClass name={items?.icon} color={items?.iconSettings?.color ?? null} size={items?.iconSettings?.size ?? null} />
                                                                    </div>
                                                                ) : <></>
                                                                )))
                                                            }
                                                            <Card.Body>
                                                                <Card.Title className="fw-bold">{items?.title}</Card.Title>
                                                                <Card.Text style={{ opacity: 0.8 }}>
                                                                    {items?.text}
                                                                </Card.Text>
                                                                {items?.demoLink ? (
                                                                    <Button
                                                                        href={items?.demoLink}
                                                                        target="_blank"
                                                                        style={{
                                                                            background: "linear-gradient(to right, #a855f7, #6d28d9)",
                                                                            border: "none",
                                                                            padding: "10px 25px",
                                                                            fontWeight: "500",
                                                                            borderRadius: "30px",
                                                                            boxShadow: "0 0 15px rgba(168,85,247,0.5)",
                                                                            transition: "all 0.3s ease",
                                                                        }}
                                                                        onMouseEnter={(e) => {
                                                                            e.currentTarget.style.transform = "scale(1.05)";
                                                                            e.currentTarget.style.boxShadow =
                                                                                "0 0 25px rgba(168,85,247,0.8)";
                                                                        }}
                                                                        onMouseLeave={(e) => {
                                                                            e.currentTarget.style.transform = "scale(1)";
                                                                            e.currentTarget.style.boxShadow =
                                                                                "0 0 15px rgba(168,85,247,0.5)";
                                                                        }}
                                                                    >
                                                                        <CgWebsite /> &nbsp;  {t('messages.demo')}
                                                                    </Button>
                                                                ) : <></>}
                                                            </Card.Body>
                                                        </Card>
                                                    </Roll>
                                                </Col>
                                            ))}

                                    </Row>
                                ) : (type === 'tab' && sharedComponent && tabData?.tabs?.length > 0 ? (
                                    <>
                                        <LoadSharedComponent activeTab={activeKey} />
                                    </>
                                ) : (
                                    <>
                                    </>
                                )
                                )}
                            </Tab.Pane>
                        </>
                    </Tab.Content>
                </Tab.Container>
            </>) : (
                <>

                </>
            )}
        </>
    );
}
function DynamicIcon({ name, color, size }) {
    const Icon = Icons[name];
    return Icon ? <Icon color={color} size={size} /> : null;
}
function DiIconsClass({ name, color, size }) {
    const Icon = DiIcons[name];
    return Icon ? <Icon color={color} size={size} /> : null;
}
function SiIconsClass({ name, color, size }) {
    const Icon = SiIcons[name];
    return Icon ? <Icon color={color} size={size} /> : null;
}

function LoadSharedComponent({ activeTab }) {
    try {
        let SharedComponent;
        try {
            SharedComponent = lazy(() => import(`../Components/${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}/${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}.js`).then(module => ({ default: module.default })));
            return <SharedComponent />;
        } catch (e) {
            console.error("DCT Componenet.\n Error in Loading Component...",e);
            return <h5>Component not found</h5>;
        }
    } catch (error) {
        console.error(error);
    }
}