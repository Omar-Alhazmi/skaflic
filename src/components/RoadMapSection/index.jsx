import React, { Component } from 'react';

import * as RoadMap from './StyledRoadMap';
import * as Div from '../InfoSection/InfoElements';
import RoadMap_image from '../../images/RoadMap.png';
;


export default class index extends Component {

    render() {

        return <RoadMap.DisplayWrapper id={'road_map'}>
             <Div.Divider className='svgCenter'/>
             <Div.SectionTitle>
                 Road Map
                <Div.ActivityContainer>
                    <RoadMap.RoadMapImg src={RoadMap_image} alt='RoadMap' />
                </Div.ActivityContainer>
             </Div.SectionTitle>
             <Div.Divider className='svgCenter'/>
        </RoadMap.DisplayWrapper>;
    }
}
