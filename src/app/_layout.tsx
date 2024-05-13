import { colors } from '@/constants/tokens';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
    return (
        <SafeAreaProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <RootNavigation />
                <StatusBar style="auto" />
            </GestureHandlerRootView>
        </SafeAreaProvider>
    );
}


const RootNavigation = () => {
    return (

        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

            <Stack.Screen
                name="player"
                options={{
                    presentation: 'card',
                    gestureEnabled: true,
                    gestureDirection: 'vertical',
                    animationDuration: 400,
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="(modals)/addToPlaylist"
                options={{
                    presentation: 'modal',
                    headerStyle: {
                        backgroundColor: colors.background,
                    },
                    headerTitle: 'Add to playlist',
                    headerTitleStyle: {
                        color: colors.text,
                    },
                }}
            />
        </Stack>

    )
}

export default App
