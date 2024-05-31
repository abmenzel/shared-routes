import { Link } from 'expo-router'
import { Text, View } from 'react-native'

export default function ProfileScreen() {
	return (
		<View>
			<Text>Profile screen</Text>
			<Link href='shared'>go to shared screen</Link>
		</View>
	)
}
