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
import Toast from 'react-native-root-toast';
import {Header} from '../components/Header';

let products = [
  {
    image:
      'https://images.unsplash.com/photo-1459865264687-595d652de67e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    cost: 25,
    name: 'Sport',
    description: 'Vendredi 25 juin',
  },
  {
    image:
      'https://images.unsplash.com/photo-1475506631979-72412c606f4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    cost: 25,
    name: 'Tournoi de Babyfoot',
    description: 'Lundi 21 juin',
  },
  {
    image:
      'https://www.fae-montmorillon.fr/wp-content/uploads/2018/09/afterwork.jpg',
    cost: 50,
    name: 'Afterwork',
    description: 'Vendredi 25 juin',
  },
  {
    image:
      'https://images.unsplash.com/photo-1546006508-5bd647796a4c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    cost: 75,
    name: 'Soirée',
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

const getReward = () => {
  Toast.show("Vous allez recevoir un mail d'ici peu 🎉", {
    duration: Toast.durations.LONG,
  });
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
      }}
      onPress={getReward}>
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
