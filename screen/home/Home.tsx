import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, Text, Appearance, ColorSchemeName } from "react-native";
import React, { SetStateAction, useEffect, useReducer, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconArrowLeft } from "@tabler/icons-react";
import { HomeComponentStyle } from "./Home.style";
import { Message, Plus, Search } from "../../allSVG/AllSvg";
import Friends from "../top_tabs/Friends";
import Menu from "../top_tabs/Menu";
import Notification from "../top_tabs/Notification";
import Profile from "../top_tabs/Profile";
import Feeds from "../top_tabs/Feeds";
import TabContainer from "../top_tabs/mainTab/TabContainer";

const Tab = createMaterialTopTabNavigator();
const Home = () => {
  const [theme, setTheme] = useState<string>("");
  useEffect(() => {
    const colorScheme = Appearance.getColorScheme();
    if (colorScheme === "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  return (
    <SafeAreaView
      style={[HomeComponentStyle.container, { backgroundColor: "#000000" }]}
    >
      {/*header in home*/}
      <View
        style={[
          HomeComponentStyle.headerContainer,
          { backgroundColor: "#242526" },
        ]}
      >
        <Text style={[HomeComponentStyle.logo, { color: "#fff" }]}>
          facebook
        </Text>
        <View style={[HomeComponentStyle.headerIconContainer]}>
          <Plus />
          <Search />
          <Message />
        </View>
      </View>
      <TabContainer />
    </SafeAreaView>
  );
};

export default Home;
