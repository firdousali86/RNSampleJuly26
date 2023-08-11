import {useEffect} from 'react';
import {View, FlatList, Text} from 'react-native';

const ListScreen = () => {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos', {})
      .then(x => x.json())
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={['a', 'b', 'c', 'd']}
        renderItem={({item, index}) => {
          return <Text>{item}</Text>;
        }}
      />
    </View>
  );
};

export default ListScreen;
