import React from 'react';
import { Steps } from 'antd';
export default function AboutStepper(props){
    const {education} = props;
    return (
        <>
            <Steps
                direction="vertical"
                className='mb-5'
                current={education.length}
                items={education}
            />
        </>
    )
}