import React from 'react';
import { FlatList, Text, View } from 'react-native';
import CategoryList from '../../components/CategoryList';

import Header from '../../components/Header';
import Heading from '../../components/Heading';
import Title from '../../components/Title';
import StreamList from '../../components/StreamList';
import ChannelList from '../../components/ChannelList';//estou aqui 





import { Wrapper, Container, Main } from './styles';

interface Item {
  key:string;

  render:() => JSX.Element;
  isTitle?: boolean;
}

const Following: React.FC = () => {
  /*para realizar um calculo */
  const {data, indices} = React.useMemo(() =>{
    /*array vazio *//*comportamento do componente primeira vez :o:o*/
    const items: Item[] = [
      {
        key: 'PAGE_HEADING',
        render: () => <Heading> Following</Heading>
      },
      /*titulo que vai acima dos cartões*/
      {
        key: 'FOLLOWED_CATEGORIES',
        render: () => <Title>Followed Categories</Title>,
        isTitle: true,
      },
      { key: 'C1', render: () => <CategoryList />},

      {
        key: 'LIVE_CHANNELS',
        render: () => <Title>Live Channels</Title>,
        isTitle: true,
      },
      { key: 'C2', render: () => <StreamList/>},

      {
        key: 'CONTINUE_WATCHING',
        render: () => <Title>Continue Waching</Title>,
        isTitle: true,
      },
      { key: 'C3', render: () => <StreamList />},

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

export default Following;
