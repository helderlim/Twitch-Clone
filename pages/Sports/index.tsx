import React from 'react';
import { FlatList, Text, View } from 'react-native';
import CategoryList from '../../components/CategoryList';

import Header from '../../components/Header';
import Heading from '../../components/Heading';
import Title from '../../components/Title';
import VideoList from '../../components/VideoList';
import Video from '../../components/Video';
import ChannelList from '../../components/ChannelList';//estou aqui 





import { Wrapper, Container, Main } from './styles';

interface Item {
  key:string;

  render:() => JSX.Element;
  isTitle?: boolean;
}

const Sports: React.FC = () => {
  /*para realizar um calculo */
  const {data, indices} = React.useMemo(() =>{
    /*array vazio *//*comportamento do componente primeira vez :o:o*/
    const items: Item[] = [
      {
        key: 'PAGE_HEADING',
        render: () => <Heading> Sports</Heading>
      },     

      {
        key: 'LIVE_CHANNELS',
        render: () => <Title>Live Channels</Title>,
        isTitle: true,
      },
      { key: 'C2', render: () => <Video/>},

     

      {
        key: 'OFFLINE_CHANELS',
        render: () => <Title>Offline Channels</Title>,
        isTitle: true,
      },
      { key: 'C4', render: () => <ChannelList />},


      
    ];

    /*array que contem somente indices que são titulos */
    const indices: number[] = [];

    items.forEach((item, index) => item.isTitle && indices.push(index));

    return{
      data:items,
      indices,
    }
  }, []);



  return (
    <Wrapper>
      <Container>
        <Header/>

        <Main>
          <FlatList<Item>
          data={data}
          renderItem={({item}) => item.render()}
          keyExtractor= {item =>item.key}
          stickyHeaderIndices={indices}
          //efeito de refresh

          onRefresh={() =>{}}
          refreshing={false}
          />
        </Main>
      </Container>
    </Wrapper>

  );
};

export default Sports;
