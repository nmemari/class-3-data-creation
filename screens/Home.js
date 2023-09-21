import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity} from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';

import { useState } from 'react';

export default function Home({navigation}) {
    const [number, setNumber] = useState(1);

    const check = () => {
        if(number == 1) {
          console.log("ONE");
        } else if(number == 2) {
          console.log("TWO");
        } else if(number == 3) {
          navigation.push('Dashboard')
        }
        setNumber(number + 1);
    }

    return (
        <View style={styles.container}>
            <Card style={styles.cardContainer}>
                <Card.Content style={styles.contentContainer}>
                    <Text variant="titleLarge">Welcome to Our Library!</Text>
                    <Text variant="bodyMedium" style={{
                        marginTop: 10
                    }}>Please continue to the dashboard to take look at our available books</Text>
                </Card.Content>
                <Card.Cover style={{
                    width: 300,
                    alignSelf: 'center',
                    margin: 20
                }} source={{ uri: 'https://picsum.photos/900' }} />
                <Card.Actions>
                    <Button 
                        mode="contained" 
                        onPress={() => check()}
                        style={
                            number == 1 ? styles.btnBlue : 
                            number == 2 ? styles.btnPurple :
                            styles. btnTeal
                        }
                    >
                        Dashboard
                    </Button>
                </Card.Actions>
            </Card>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D1B2A',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardContainer: {
        width: 350,
        minHeight: 400,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    contContainer: {
        marginBottom: 100
    },
    btnBlue: {
        backgroundColor: '#63c5da',
        borderColor: '#63c5da',
    },
    btnPurple: {
        backgroundColor: '#6618b5',
        borderColor: '#6618b5',
    },
    btnTeal: {
        backgroundColor: '#10a383',
        borderColor: '#10a383',
    },
});
