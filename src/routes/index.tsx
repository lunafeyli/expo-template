// Core
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import Main from "~/screens/Main";

const { Screen, Navigator } = createNativeStackNavigator();

const Routes: React.FC = () => {
	return (
		<NavigationContainer>
			<Navigator
				initialRouteName="Main"
				screenOptions={{ headerShown: false }}
			>
				<Screen name="Main" component={Main} />
			</Navigator>
		</NavigationContainer>
	);
};

export default Routes;
