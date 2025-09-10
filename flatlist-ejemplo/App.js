import { Text, View, FlatList, Image, StatusBar, SafeAreaView } from 'react-native';
import React from 'react';
import { Styles, colors } from './styles/styles';

const AntojitosItem = ({ item }) => {
  return (
    <View style={Styles.itemContainer}>
      <Image source={{ uri: item.url }} style={Styles.itemImage} />
      <View style={Styles.itemTextContainer}>
        <Text style={Styles.itemName}>{item.nombre}</Text>
        <Text style={Styles.itemDescription}>Delicioso antojito mexicano tradicional</Text>
      </View>
    </View>
  );
};

export default function App() {
  const data = [
    {
      id: 1, 
      nombre: 'Tamales', 
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJWut1ZFjj_fmvymXByayTHCt1U2TVU1KyHw&s"
    },
    {
      id: 2, 
      nombre: 'Pozole', 
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Pozole_rojo_%282017%29.jpg/330px-Pozole_rojo_%282017%29.jpg"
    },
    {
      id: 3, 
      nombre: 'Sopes', 
      url: "https://patijinich.com/es/wp-content/uploads/sites/3/2017/12/610-sopes.jpg"
    },
    {
      id: 4, 
      nombre: 'Chiles en nogada', 
      url: "https://www.unileverfoodsolutions.com.mx/dam/global-ufs/mcos/NOLA/calcmenu/recipes/MX-recipes/red-meats-&-red-meat-dishes/chile-en-nogada/main-header.jpg"
    },
    {
      id: 5, 
      nombre: 'Pambazo', 
      url: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/793A97EF-5AB6-42BC-B6D7-BA32F58729E8/Derivates/71B61452-6C6C-4FF4-A166-FC7206C9FA05.jpg"
    },
    {
      id: 6, 
      nombre: 'Mole', 
      url: "https://media.elgourmet.com/recetas/cover/mole-_9IMJjkql3RCWT1eg6AHUD8PKyZLh7o.png"
    },
  ];

  const renderHeader = () => {
    return (
      <View style={Styles.header}>
        <Text style={Styles.headerTitle}>🇲🇽 Antojos Mexicanos 🇲🇽</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.mexicanGreen} />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <AntojitosItem item={item} />}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={Styles.flatListContent}
      />
    </SafeAreaView>
  );
}