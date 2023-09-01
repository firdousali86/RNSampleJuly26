import {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {ApiHelper} from '../../helpers';

const ListScreen2 = () => {
  useEffect(() => {
    console.log('api ran');

    ApiHelper.get('/todos')
      .then(response => {
        console.log(response);
        // setMyListData(response);
        // setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        // setIsLoading(false);
      });
  }, []);

  return (
    <View>
      <FlatList
        data={[{}, {}]}
        renderItem={({item, index}) => {
          return (
            <View>
              <Text>test</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ListScreen2;
