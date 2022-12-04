import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {/* // category card */}
      <CategoryCard
        imgUrl="https://img.freepik.com/free-photo/indian-chicken-biryani-served-terracotta-bowl-with-yogurt-white-background-selective-focus_466689-72554.jpg?w=900&t=st=1670138922~exp=1670139522~hmac=9a4342c2db615dfaf07964a659d79bc787bce304cd317bed2737c2d38bf26da3"
        title="TESTING"
      />
      <CategoryCard
        imgUrl="https://img.freepik.com/free-photo/aloo-paratha-gobi-paratha-also-known-as-potato-cauliflower-stuffed-flatbread-dish-originating-from-indian-subcontinent_466689-76173.jpg?w=900&t=st=1670138992~exp=1670139592~hmac=9d26d4a9baad42c32f8846b28fcb771b812799e706d3b33ecae3eb8b9678f0fc"
        title="TESTING"
      />
      <CategoryCard
        imgUrl="https://img.freepik.com/free-photo/dahi-puri-chat-is-indian-road-side-snack-item-which-is-especially-popular-state-maharashtra-india_466689-73908.jpg?w=900&t=st=1670139076~exp=1670139676~hmac=6d67db49b245b4c48201dfaafe161e2c8df877940790265e27cd31128d1c5425"
        title="TESTING"
      />
      <CategoryCard
        imgUrl="https://img.freepik.com/free-photo/sambar-rice-sambar-sadam-one-pot-meal-from-south-indian-state-tamil-nadu-kerala_466689-75220.jpg?w=900&t=st=1670139101~exp=1670139701~hmac=f425b6f5b7ed8c7b1dcd65612aa4f535be381290649662182bf9fbc0e6476a3b"
        title="TESTING"
      />
      <CategoryCard
        imgUrl="https://img.freepik.com/free-photo/misal-pav-is-popular-maharashtrian-street-food-usal-sprouts-curry-topped-with-onions-tomatoes-farsan-chutney_466689-74294.jpg?w=900&t=st=1670139135~exp=1670139735~hmac=13222f294bad875fad7a6daea4f224d75d5522f60cf915081d2e4fc3dee83a72"
        title="TESTING"
      />
    </ScrollView>
  );
};

export default Categories;
