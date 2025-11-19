import React, { useState, useEffect, useRef } from "react";
import "./HangId.css";
import myImg from "../../../Assets/avatar.svg";
import { FaCode } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import { HiOutlineMusicNote } from "react-icons/hi";


export default function HangingIdCard(props) {
    const { name, role } = props;
    const [angle, setAngle] = useState(-30); // starting tilt
    const velocity = useRef(0);
    const damping = 0.985;
    const gravity = 0.002;

    useEffect(() => {
        let raf;
        const animate = () => {
            const accel = -gravity * Math.sin((angle * Math.PI) / 180);
            velocity.current += accel;
            velocity.current *= damping;
            setAngle((prev) => prev + velocity.current * 60);

            raf = requestAnimationFrame(animate);
        };

        raf = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(raf);
    }, [angle]);

    return (
        <div className="idcard-box">
            <div className="knot"></div>
            <div className="rope"></div>
            <div className="clip"></div>
            <div
                className="id-card"
                style={{ transform: `rotate(${angle}deg)` }}
            >
                <div className="photo">
                    <img
                        src={myImg}
                        alt="Avatar pic"
                        className="img-fluid photo-pic pt-3"
                    />
                </div>
                <div className="details">
                    <h4>{name}</h4>
                    <p>{role}</p>
                    <FaCode/>&nbsp;&nbsp;<AiOutlineGithub/>&nbsp;&nbsp;<HiOutlineMusicNote/>
                </div>
            </div>
        </div>

    );
}
