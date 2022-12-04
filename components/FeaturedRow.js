import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray px-4">{description}</Text>

      {/* scroll view */}
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingBottom: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4">
        {/* RestaurantCards */}
        <RestaurantCard
          id={123}
          imgUrl="https://img.freepik.com/free-psd/indian-food-restaurant-banner-template_23-2149112736.jpg?w=900&t=st=1670140941~exp=1670141541~hmac=8af4d4832b3b861c7a9e3c8970ff5034e3fbf1d12b06544ade370d263159373f"
          title="Biryani"
          rating={4.5}
          genre="Indian"
          address="123 downstreet bandra"
          short_description="most delicious hydrabadi biryani"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://img.freepik.com/free-psd/indian-food-restaurant-banner-template_23-2149112736.jpg?w=900&t=st=1670140941~exp=1670141541~hmac=8af4d4832b3b861c7a9e3c8970ff5034e3fbf1d12b06544ade370d263159373f"
          title="Biryani"
          rating={4.5}
          genre="Indian"
          address="123 downstreet bandra"
          short_description="most delicious hydrabadi biryani"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://img.freepik.com/free-psd/indian-food-restaurant-banner-template_23-2149112736.jpg?w=900&t=st=1670140941~exp=1670141541~hmac=8af4d4832b3b861c7a9e3c8970ff5034e3fbf1d12b06544ade370d263159373f"
          title="Biryani"
          rating={4.5}
          genre="Indian"
          address="123 downstreet bandra"
          short_description="most delicious hydrabadi biryani"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
