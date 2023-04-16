import React, { useEffect }  from 'react'
import { View } from 'react-native';

const WorldMap = ({ fromSavedGame }) => {

  useEffect(() => {
    // Initialization code here
    console.log('Component mounted');

    // Clean-up function (optional)
    return () => {
        console.log('Component unmounted');
    };
  }, []);

  const generateMap = () => {

  }

  const loadMap = () => {

  }

  return (
    <View>
        
    </View>
  )
}

export default WorldMap