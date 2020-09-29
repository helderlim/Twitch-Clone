import React from 'react';
import streamThumbnail from '../../images/stream_thumbnail.jpg';

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
      <StreamThumbnail source={streamThumbnail}/>

      <StreamColum>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar /> 
            <StreamUsername numberOfLines={1}>helderlim</StreamUsername>
          </StreamHeader>
          <StreamDescription numberOfLines={1}>
              Aprendendo front-end com Next.js, Chakra UI e GraphQL
          </StreamDescription>
        </StreamRow>
        
        <TagRow>
          <TagView>
            <TagText>portuguese </TagText>
          </TagView>
          <TagView>
            <TagText>Web development </TagText>
          </TagView>
        </TagRow>
      </StreamColum>
    </StreamContainer>
  )
  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
};

export default StreamList;
