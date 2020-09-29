import React from 'react';
import { Text } from 'react-native';

import { 
  List,
  ChannelContainer,
  LeftSlide,
  Avatar,
  Column,
  Username,
  Info,
  RightSlide,
  WiteCircle,


 } from './styles';

const ChannelList: React.FC = () => {
 const ChannelItem = () => (
   <ChannelContainer>
     <LeftSlide>
        <Avatar/>
        <Column>
        <Username>helder_lima</Username>
        <Info>54 news videos</Info>
        </Column>
     </LeftSlide>
      
      <RightSlide>
        <WiteCircle />
      </RightSlide>
   </ChannelContainer>
 )
 
  return (
    <List>
     <ChannelItem />
     <ChannelItem />
     <ChannelItem />
     <ChannelItem />
     <ChannelItem />
     <ChannelItem />
     <ChannelItem />
     <ChannelItem />
     <ChannelItem />

    </List>
  );
};

export default ChannelList;
