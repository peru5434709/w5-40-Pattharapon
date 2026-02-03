import { View, TextInput, Button, StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage"
import { Colors } from "@/constants/theme";

type Book = {
    id : string,
    name : string,
    price : string
}

export default function Home(){

    const [allBook, setAllBook] = useState<Book[]>([])

    useEffect(() => {
        loadBook()
    }, [])

    async function loadBook() {
        const data = await AsyncStorage.getItem("book")
        if(data !== null){
            setAllBook(JSON.parse(data))
        }
    }

    async function removeBook(id:string){
        const newBook = allBook.filter((_, i) => _.id != id)
        await AsyncStorage.setItem("book", JSON.stringify(newBook))
        setAllBook(newBook)
    }

    return(
        <View style={myStyle.container}>
            <FlatList
                data={allBook}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <View  style={{
                width:"100%",
                borderRadius:10,
                gap:5,
                alignItems:"center",
                backgroundColor:"skyblue",
                marginBottom:10
                }}>
                        <Text></Text>
                        <Text>รหัส : {item.id}</Text>
                        <Text>เรื่อง : {item.name}</Text>
                        <Text>ราคา : {item.price}</Text>
                        <TouchableOpacity onPress={() => removeBook(item.id)}>
                            <Text style={{color:"red"}}>ลบ</Text>
                        </TouchableOpacity>
                        <Text></Text>
                    </View>
                )}  
            />
        </View>
    )
}

const myStyle = StyleSheet.create({
    container : {
        flex:1,
        gap: 10,
        backgroundColor:"aquamarine"
    }
})