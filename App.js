import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import crashlytics from '@react-native-firebase/crashlytics';

const App = () => {

    crashApp = () => {
        crashlytics().crash();
    }

	return (
        <View style={Styles.container}>
            <TouchableOpacity onPress={() => crashApp()} style={{padding: 20}}>
                <Text>Crash Test</Text>
            </TouchableOpacity>
        </View> 
    );
};

export default App;


const Styles = {
	container: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 256, 0.1)',
        justifyContent: 'center',
		alignItems: 'center'
	}
}
