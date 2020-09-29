import { MaterialIcons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { View, Image, StyleSheet } from 'react-native';
import React from 'react';
import colors from '../../styles/colors';

import { Container, Avatar, OnlineStatus, RightSide, Button } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
     <Avatar>
       
     <Image
        style={/*PERFIL*/{ height: 32, width:32, borderRadius: 16}}
        source={require('../../images/img1.jpg')}/>

       <OnlineStatus />
     </Avatar>

     <RightSide>
       <Button>
         <MaterialIcons 
         name="notifications-none"
         size={26}
         color={colors.black}
         />
       </Button>

       <Button>
         <MaterialCommunityIcons 
         name="message-outline"
         size={26}
         color={colors.black}
         />
       </Button>

       <Button>
         <Feather 
         name="search"
         size={26}
         color={colors.black}
         />
       </Button>

     </RightSide>
    </Container>
  );
};

export default Header;
