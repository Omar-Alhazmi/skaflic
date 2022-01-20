import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// import * as RoadMapContainer from '../Services/ServicesElements';
import styled from 'styled-components'
import { FaChartLine, FaBoxes,FaBuilding,FaRegWindowRestore,FaStar,FaShippingFast } from "react-icons/fa";
import { GiToken, } from "react-icons/gi";
import { CgWebsite, } from "react-icons/cg";
import { MdOutlineWaterfallChart, } from "react-icons/md";
import { HiOutlineSpeakerphone,HiStatusOnline } from "react-icons/hi";
import { BsCurrencyExchange, BsBank,BsFillCloudCheckFill} from "react-icons/bs";
import { FiCodesandbox, } from "react-icons/fi";
import { AiOutlineAreaChart,AiOutlineAppstoreAdd } from "react-icons/ai";

export default class index extends Component {

    render() {
        const DisplayWrapper = styled.div`
            height: fit-content;
            min-height:800px ;
            display:flex;
            flex-direction:column;
            justify-content:center;
            /* align-items:center; */
            background:#ffffff;
            z-index:1;
            position: relative;
            @media screen and (max-width:768px){
                min-height: 1100px;
                height: fit-content;
            }
            @media screen and (max-width:480px){
                min-height: 1300px;
                height: fit-content;

    }
      `;
        return <DisplayWrapper id={'road_map'}>

            <VerticalTimeline layout={"2-columns"} >
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    dateClassName={'date_color'}
                    contentStyle={{ color: '#282c34' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#ffff' }}
                    icon={<FaChartLine />}>
                    <h3 className="vertical-timeline-element-title">IPO</h3>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    dateClassName={'date_color'}
                    contentStyle={{ color: '#282c34' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<GiToken />}>
                    <h3 className="vertical-timeline-element-title">Token initiation</h3>
                </VerticalTimelineElement>  
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    dateClassName={'date_color'}
                    contentStyle={{ color: '#282c34' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<CgWebsite />}>
                    <h3 className="vertical-timeline-element-title">{`Website and official channels`}</h3>
                </VerticalTimelineElement>  
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    dateClassName={'date_color'}
                    contentStyle={{ color: '#282c34' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FaBuilding />}>
                    <h3 className="vertical-timeline-element-title">{`Company establishment `}</h3>
                </VerticalTimelineElement>  
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    dateClassName={'date_color'}
                    contentStyle={{ color: '#282c34' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<HiOutlineSpeakerphone />}>
                    <h3 className="vertical-timeline-element-title">{`ICO marketing`}</h3>
                </VerticalTimelineElement>  
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    dateClassName={'date_color'}
                    contentStyle={{ color: '#282c34' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<MdOutlineWaterfallChart />}>
                    <h3 className="vertical-timeline-element-title">{`ICO`}</h3>
                </VerticalTimelineElement>  
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    dateClassName={'date_color'}
                    contentStyle={{ color: '#282c34' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<BsCurrencyExchange />}>
                    <h3 className="vertical-timeline-element-title">{`Exchange platform establishment `}</h3>
                </VerticalTimelineElement>  
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    dateClassName={'date_color'}
                    contentStyle={{ color: '#282c34' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FaBoxes />}>
                    <h3 className="vertical-timeline-element-title">{`Flic Mainnet `}</h3>
                </VerticalTimelineElement>  
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    dateClassName={'date_color'}
                    contentStyle={{ color: '#282c34' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FiCodesandbox />}>
                    <h3 className="vertical-timeline-element-title">{`Sandbox`}</h3>
                </VerticalTimelineElement>  
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    dateClassName={'date_color'}
                    contentStyle={{ color: '#282c34' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<HiStatusOnline />}>
                    <h3 className="vertical-timeline-element-title">{`ICOS PLATFORM establishing `}</h3>
                </VerticalTimelineElement>  
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    dateClassName={'date_color'}
                    contentStyle={{ color: '#282c34' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FaRegWindowRestore />}>
                    <h3 className="vertical-timeline-element-title">{`Stores listing`}</h3>
                </VerticalTimelineElement>  
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    dateClassName={'date_color'}
                    contentStyle={{ color: '#282c34' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<BsBank />}>
                    <h3 className="vertical-timeline-element-title">{`USDF stablecoin`}</h3>
                </VerticalTimelineElement>  
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    dateClassName={'date_color'}
                    contentStyle={{ color: '#282c34' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<AiOutlineAppstoreAdd />}>
                    <h3 className="vertical-timeline-element-title">{`Stores platform`}</h3>
                </VerticalTimelineElement>  
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    dateClassName={'date_color'}
                    contentStyle={{ color: '#282c34' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<BsFillCloudCheckFill />}>
                    <h3 className="vertical-timeline-element-title">{`Flic cloud`}</h3>
                </VerticalTimelineElement>  
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    dateClassName={'date_color'}
                    contentStyle={{ color: '#282c34' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<AiOutlineAreaChart />}>
                    <h3 className="vertical-timeline-element-title">{`Dow jones listing`}</h3>
                </VerticalTimelineElement>  
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    dateClassName={'date_color'}
                    contentStyle={{ color: '#282c34' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FaShippingFast />}>
                    <h3 className="vertical-timeline-element-title">{`logistic company`}</h3>
                </VerticalTimelineElement>  
                <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<FaStar />}
  />

            </VerticalTimeline>
        </DisplayWrapper>;
    }
}
