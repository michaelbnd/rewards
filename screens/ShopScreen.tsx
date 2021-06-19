import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Image,
  useWindowDimensions,
} from 'react-native';
import {Header} from '../components/Header';

let padding = 32;
let products = [
  'https://www.lantichambre.paris/img/articles/2020/cheques-vacances/article.jpg',
  'https://www.lantichambre.paris/img/articles/2020/cheques-vacances/article.jpg',
  'https://www.lantichambre.paris/img/articles/2020/cheques-vacances/article.jpg',
];

type ProductProp = {
  product: string;
};

function Product({product}: ProductProp) {
  const {width} = useWindowDimensions();

  return (
    <Image
      source={{uri: product}}
      style={{
        height: width - padding * 2,
        width: width - padding * 2,
        marginBottom: 16,
      }}
    />
  );
}

export function ShopScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title="Shop" />
      <View style={{flex: 1}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            marginBottom: 16,
            marginLeft: 32,
          }}>
          Exchange your points
        </Text>
        <FlatList
          data={products}
          contentContainerStyle={{paddingHorizontal: padding}}
          renderItem={({item}) => <Product product={item} />}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
        />
      </View>
    </SafeAreaView>
  );
}
