import React from 'react';
import { Video } from 'expo-av';
import VideoList from '../../components/VideoList';





import { 
  List,
  StreamContainer, 
  StreamRow, 
  StreamThumbnail,
  StreamColum,
  StreamHeader,
  StreamAvatar,
  StreamUsername,
  StreamDescription, 
  StreamCategory,
  TagRow,
  TagView,
  TagText,
 } from './styles';

 

const StreamList: React.FC = () => {

  

  const StreamItem = () => (
    <StreamContainer>
   
      <Video
  source={require('../../images/vid5.mp4')}
  rate={1.0}
  volume={0.2}
  isMuted={false}
  resizeMode="cover"
  shouldPlay
  
  style={{ width: 330, height: 180 }}
/>


    
      <StreamColum>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar /> 
            <StreamUsername numberOfLines={1}>XANDAO</StreamUsername>
          </StreamHeader>
          <StreamDescription numberOfLines={1}>
              O ultimo heroi da terra 
          </StreamDescription>

          <StreamCategory numberOfLines={1}>
            LOL & GAMEPLAY
          </StreamCategory>
        </StreamRow>
        
        <TagRow>
          <TagView>
            <TagText>Brasil </TagText>
          </TagView>
          <TagView>
            <TagText>Ação </TagText>
          </TagView>
        </TagRow>
      </StreamColum>
      <VideoList/>
    </StreamContainer>
  )
  return (
    <List>
      <StreamItem />
      


    </List>
  );
};

export default StreamList;
