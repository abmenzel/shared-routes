import { Link } from 'expo-router'
import { Text, View } from 'react-native'

export default function HomeScreen() {
	return (
		<View>
			<Text>Home screen</Text>
			<Link href='shared'>go to shared screen</Link>
		</View>
	)
}
