import AsyncStorage from '@react-native-async-storage/async-storage';

class PersistantHelper {
  setValue = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);

      console.log('written successfully');
    } catch (e) {
      // saving error
      console.log('write error: ' + e);
    }
  };

  getValue = async key => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        // value previously stored

        return value;
      }
    } catch (e) {
      // error reading value
    }
  };
}

export default new PersistantHelper();
