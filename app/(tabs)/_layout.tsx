import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons"

export default function Layout() {
    return(
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title:"Home",
                    tabBarIcon: () => (
                        <Ionicons name="home" size={20} color={"black"} />
                    )
                }}  
            />

            <Tabs.Screen
                name="add"
                options={{
                    title:"Book",
                    tabBarIcon: () => (
                        <Ionicons name="book" size={20} color={"black"} />
                    )
                }}  
            />
        </Tabs>
    )
}