import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  Image,
  useWindowDimensions,
} from 'react-native';

import {Header} from '../components/Header';

let products = [
  {
    image:
      'https://i.pinimg.com/originals/7f/6c/e8/7f6ce89091918f5a14264af5fc1382d2.jpg',
    cost: 50,
    name: 'Soirée',
    description: 'Vendredi 25 juin',
  },
  {
    image:
      'https://www.lantichambre.paris/img/articles/2020/cheques-vacances/article.jpg',
    cost: 70,
    name: 'Afterwork',
    description: 'Mercredi 23 juin',
  },
  {
    image:
      'https://www.lantichambre.paris/img/articles/2020/cheques-vacances/article.jpg',
    cost: 100,
    name: 'Chèque Vacance',
    description: '10€',
  },
  {
    image: 'https://i.ibb.co/nfg1QHv/amazon.png',
    cost: 200,
    name: 'Carte Amazon',
    description: '20€',
  },
];

type ProductProp = {
  product: {
    image: string;
    cost: number;
    name: string;
    description: string;
  };
};

function Product({product}: ProductProp) {
  const {width} = useWindowDimensions();

  return (
    <TouchableOpacity
      style={{
        marginHorizontal: 16,
        marginBottom: 32,
        backgroundColor: '#fff',
        borderRadius: 16,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      }}>
      <Image
        source={{uri: product.image}}
        style={{
          backgroundColor: '#fff',
          height: (width - 64) * 0.5,
          width: width - 64,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        }}
      />
      <View style={{padding: 8, paddingBottom: 24}}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>{product.name}</Text>
        <Text style={{marginTop: 2, color: '#505050'}}>
          {product.description}
        </Text>
        <Text style={{marginTop: 8, fontWeight: '600', fontSize: 20}}>
          {product.cost} 👏
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export function RewardsScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title="Rewards" />
      <View style={{marginTop: 16, flex: 1}}>
        <FlatList
          data={products}
          contentContainerStyle={{paddingHorizontal: 16}}
          numColumns={1}
          renderItem={({item}) => {
            return <Product product={item} />;
          }}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
        />
      </View>
    </SafeAreaView>
  );
}
