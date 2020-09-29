import React from 'react';
import data from './data';
import { Video } from 'expo-av';

import { 
  List,
  CategoryContainer,
  CategoryImage,
  CategoryName,
  CategoryStatus,
  RedCircle,
  Info,
 } from './styles';




const CategoryList: React.FC = () => {
  const Video1: React.FC= () => (
    <CategoryContainer>
      <Video
  source={require('../../images/gtav.mp4')}
  rate={1.0}
  volume={0}
  isMuted={false}
  resizeMode="cover"
  shouldPlay
  isLooping
  style={{ width: 120, height: 200,}}
/>

      <CategoryName>
      
        Tycoplays
      </CategoryName>
      
      <CategoryStatus>
        <RedCircle />
        <Info>51.9K</Info>
      </CategoryStatus>
    </CategoryContainer>

  );

  const Video2: React.FC= () => (
    <CategoryContainer>
      <Video
  source={require('../../images/vid2.mp4')}
  rate={1.0}
  volume={0}
  isMuted={false}
  resizeMode="cover"
  shouldPlay
  isLooping
  style={{ width: 120, height: 200,}}
/>
      <CategoryName>
        Alanzoka
      </CategoryName>
      
      <CategoryStatus>
        <RedCircle />
        <Info>98.5K</Info>
      </CategoryStatus>
    </CategoryContainer>

  );
  const Video3: React.FC= () => (
    <CategoryContainer>
      <Video
  source={require('../../images/vid3.mp4')}
  rate={1.0}
  volume={0}
  isMuted={false}
  resizeMode="cover"
  shouldPlay
  isLooping
  style={{ width: 120, height: 200,}}
/>
      <CategoryName>
        BurgaoFPS
      </CategoryName>
      
      <CategoryStatus>
        <RedCircle />
        <Info>8.5K</Info>
      </CategoryStatus>
    </CategoryContainer>

  );
  const Video4: React.FC= () => (
    <CategoryContainer>
      <Video
  source={require('../../images/vid1.mp4')}
  rate={1.0}
  volume={0}
  isMuted={false}
  resizeMode="cover"
  shouldPlay
  isLooping
  style={{ width: 120, height: 200,}}
/>
      <CategoryName>
        Gameplayrj
      </CategoryName>
      
      <CategoryStatus>
        <RedCircle />
        <Info>80.5K</Info>
      </CategoryStatus>
    </CategoryContainer>

  )


  return (
    <List>
      < Video1/>
      < Video2/>
      < Video3/>
      < Video4/>



    </List>
  );
};

export default CategoryList;
