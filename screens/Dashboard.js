import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity} from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';

import { useState } from 'react';

import { bookStore } from '../data/books';

export default function Dashboard({navigation}) {
    const [data, setData] = useState();

    const addingData = () => {
        console.log("Started"); 
        setData(bookStore);
    }

    return (
        <View style={styles.container}>
            <Card style={styles.cardContainer}>
                <Card.Content style={styles.contentContainer}>
                    <Text variant="titleLarge" style={{
                        fontWeight: 'bold'
                    }}>Welcome to the Dashboard!</Text>
                    <Text variant="bodyMedium" style={{
                        marginTop: 130
                    }}>
                        {
                            data && data.books.map((b, index) => {
                                if(b.category.toLowerCase() == 'java') {
                                    return (
                                        <View key={index}>
                                            <Text variant='titleLarge' style={{marginBottom: 20, marginTop: 50}}>{b.title}</Text>
                                            {
                                                b.authors && b.authors.map((a, ind) => {
                                                    return(
                                                        <View style={styles.authors} key={ind}>
                                                            <Avatar.Text size={24} label={a[0]} style={{ marginRight: 10} }/>
                                                            <Text variant='bodyMedium'>{a}</Text>
                                                        </View>
                                                    )
                                                })
                                            }
                                        </View>
                                    )
                                }
                            })
                        }
                    </Text>
                </Card.Content>
                <Card.Actions>
                    <Button 
                        mode="contained" 
                        onPress={() => addingData()}
                    >
                        Show Books
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
        minHeight: 300,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    authors: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
});
