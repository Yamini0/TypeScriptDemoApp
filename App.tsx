import React, { FC, useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView ,TouchableOpacity} from 'react-native';
import Input from './src/components/Input';
import { Fruits, Fruit } from './src/data/Data';
import ListItem from './src/components/ListItem';

const App: FC = () => {
  //<typeof>(initialValue)
  const [fruits, setFruits] = useState<Fruit[] | null>(null);
  const [inputShown,setInputShown] = useState<boolean>(false);
  const [newFruit, setNewFruit] = useState<Fruit | null>(null);

  useEffect(()=>{
    (()=>{
        setFruits(
          Fruits.sort((a: Fruit, b:Fruit)=>{
            return a.price > b.price ? 1: b.price > a.price ? -1 :0;
          })
          );
    })();
  },[]);


  const handleSearch = (text:any) => {
    const fruits: Fruit[] = Fruits.filter((fruit) => fruit.name.includes(text)
      );
    setFruits(fruits);
  }

  const handleAdd =()=>{
    if(newFruit !== null && fruits !== null ) setFruits([...fruits, newFruit])
    else if(newFruit ! == null && fruits == null) setFruits([newFruit])
  }
  return (
    <SafeAreaView style={styles.container}>
      <Input  
        icon="md-search" 
        placeholder="Search" 
         onChangeText={(text)=>handleSearch(text)} />
       <FlatList
        style={{marginVertical:10}}
         data={Fruits}
         renderItem={({ item }) => (
           <ListItem id={item.id} name={item.name} price={item.price} />
         )} />
         <View>
           <TouchableOpacity
            style={{ 
            alignSelf:'center',
            backgroundColor:'rgba(81,135,200,1)',
            padding:10,
            paddingHorizontal:20,
            borderRadius:3,
            marginVertical:20,
            display:inputShown == false ? 'flex' : 'none',
          
          }}
              onPress={()=>setInputShown(true)}
            >
              <Text style={{
                  color:'white',
                  fontWeight:'600'
                }}>  Add </Text>
           </TouchableOpacity>
         </View>
         <View style={{display: inputShown == true ? 'flex' : 'none'}}>
           <Input icon="add-circle-outline" placeholder="Fruit Name" 
           onChangeText={(text)=>{
                if(newFruit ! == null ){
                  setNewFruit({ ...newFruit, name:text});
                } else{
                  setNewFruit({ id: Date.now(), name:text,price:0});
                }
              }} />
           <Input icon="add-circle-outline" placeholder="Fruit Price" 
           onChangeText={(text)=>{
            if(newFruit ! == null ){
              setNewFruit({ ...newFruit, price: +text});
            } else{
              setNewFruit({ id: Date.now(), name: "", price : +text});
            }
          }} 
           />
           <TouchableOpacity style={{
             alignSelf:'center',
             backgroundColor:'rgba(81,135,200,1)',
             padding:10,
             paddingHorizontal:20,
             borderRadius:3,
             marginVertical:20,
           }}
           onPress={()=>{handleAdd}}
           >
                <Text style={{
                  color:'white',
                  fontWeight:'600'
                }}>  Add
                </Text>
           </TouchableOpacity>
         </View>

    </SafeAreaView>


  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
     justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40
  }
})
