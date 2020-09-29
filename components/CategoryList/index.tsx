import React from 'react';
import data from './data';
import { 
  List,
  CategoryContainer,
  CategoryImage,
  CategoryName,
  CategoryStatus,
  RedCircle,
  Info,
 } from './styles';


interface itemProps{
  item: typeof data[0];
}


const CategoryList: React.FC = () => {
  const CategoryItem: React.FC<itemProps> = ({item}) => (
    <CategoryContainer>
      <CategoryImage source={item.source} />
      <CategoryName numberOfLines={1}>{item.name}</CategoryName>
      <CategoryStatus>
        <RedCircle />
        <Info>41.9K</Info>
      </CategoryStatus>
    </CategoryContainer>

  )


  return (
    <List>
     {data.map(item => (
       <CategoryItem key={item.name} item={item}/>
     ))}
    </List>
  );
};

export default CategoryList;
