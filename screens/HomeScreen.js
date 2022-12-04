import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

// icons
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();

  // used to cahnge the header title and kind of stuff
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-2">
      {/* Header */}
      <View className="flex-row p-3 items-center mx-2 space-x-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon size={27} color="#00CCBB" />
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row items-center space-x-2 flex-1 bg-gray-200 p-3">
          <MagnifyingGlassIcon color="gray" className="" size={20} />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>

        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>

      {/* body */}
      <ScrollView className="bg-gray-100" contentContainerStyle={{
        paddingBottom:100,
      }}>
        {/* categories */}
        <Categories />

        {/* featured rows */}
        <FeaturedRow
        id="1"
          title="Featured"
          description="paid placements for our partners"
        />

        {/* tasty discounts */}
        <FeaturedRow
        id="2"
          title="Tasty Discounts"
          description="paid placements for our partners"
        />

        {/* offers near you */}
        <FeaturedRow
        id="3"
          title="Offers near you!"
          description="paid placements for our partners"
        />
      
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
