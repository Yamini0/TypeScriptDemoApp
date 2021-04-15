import React, { FC, useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView ,TouchableOpacity,Keyboard} from 'react-native';
import Input from './src/components/Input';
import { Fruits, Fruit } from './src/data/Data';
import ListItem from './src/components/ListItem';

const App: FC = () => {
  const [fruit, setFruit] = useState<Fruit[] | null>(null);//<typeof>(initialValue)
 
  const [newname, setNewName] = useState<Fruit | null>(null);
  const [newprice, setNewPrice] = useState<Fruit | null>(null);

  // useEffect(()=>{
  //   setFruit(Fruits)
  // },[])

  useEffect(()=>{
    (()=>{
        setFruit(
          Fruits.sort((a: Fruit, b:Fruit)=>{
            return a.price > b.price ? 1: b.price > a.price ? -1 :0;
          })
          );
    })();
  },[]);


  const handleSearch = (text:string) => {
    const alreadyThere: Fruit[] = Fruits.filter((x) => x.names.includes(text)
      );
    setFruit(alreadyThere);
    console.log("fruit",alreadyThere);
   
  }
  
  const handleAdd = ()=>{
    Keyboard.dismiss();
    if(newname !== null &&fruit !== null){
      setFruit([...fruit,newname])
    }
  }


  return (
    <SafeAreaView style={styles.container}>
      <Input  
        icon="md-search" 
        placeholder="Search" 
         onChangeText={(text)=>handleSearch(text)} />
         {/* data from local json */}
       <FlatList   
        style={{marginVertical:10}}
         data={fruit}
         renderItem={({ item }) => (
           <ListItem id={item.id} names={item.names} price={item.price} />
         )} />
         
         
          <Input 
                icon="add-circle-outline" 
                placeholder="Fruit Name"
                // value={newname}
                onChangeText={(text) =>{
                 if(newname !== null){
                  setNewName({...newname, names: text});
                 }else {
                   setNewName({id: Date.now(), names: text, price:0});
                 }
                }}
                />
           <Input 
                icon="add-circle-outline" 
                placeholder="Fruit Price"
                onChangeText={(text) =>{
                  if(newname !== null)
                  setNewName({...newname,  price: +text}) //+to convert it to num
                  // } else{
                  //   setNewPrice({id: Date.now(), names: "", price:0})
                  // }
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
           onPress={()=>handleAdd()}>
                <Text 
                  style={{
                    color:'white',
                    fontWeight:'600'
                }}>Add</Text>
           </TouchableOpacity>
         

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