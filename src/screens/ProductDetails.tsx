import {
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  Animated,
} from "react-native";
import React, { useState, useEffect } from "react";

import { useNavigation, useRoute } from "@react-navigation/native";
import { SunIcon, Text } from "native-base";

const ProductDetails = () => {
  const [product, setproduct] = useState({
    id: "1",
    productImageList: [
      "https://im.indiatimes.in/content/2021/Nov/Amp-Image-7_61935f9ed4ee6.jpg",
      "https://3.imimg.com/data3/HY/YE/MY-8035989/car-catalytic-converter-500x500.jpg",
    ],
    description: "Some Description",
    productName: "Product Name",
    productPrice: 123,
  });

  const route = useRoute();
  const navigation = useNavigation();

  const width = Dimensions.get("window").width;

  const scrollX = new Animated.Value(0);

  let position = Animated.divide(scrollX, width);

  const addToCart = (id: string) => {};

  const renderProduct = ({ item }: any) => {
    return (
      <View
        style={{
          width: width,
          height: 240,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={{
            uri: item,
          }}
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "contain",
          }}
        />
      </View>
    );
  };

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        position: "relative",
      }}
    >
      <ScrollView>
        <View
          style={{
            width: "100%",

            position: "relative",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FlatList
            data={product.productImageList ? product.productImageList : null}
            horizontal
            renderItem={renderProduct}
            showsHorizontalScrollIndicator={false}
            decelerationRate={0.8}
            snapToInterval={width}
            bounces={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false }
            )}
          />
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 16,
              marginTop: 32,
            }}
          >
            {product.productImageList
              ? product.productImageList.map((data, index) => {
                  let opacity = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [0.2, 1, 0.2],
                    extrapolate: "clamp",
                  });
                  return (
                    <Animated.View
                      key={index}
                      style={{
                        width: "16%",
                        height: 2.4,
                        backgroundColor: "black",
                        opacity,
                        marginHorizontal: 4,
                        borderRadius: 100,
                      }}
                    ></Animated.View>
                  );
                })
              : null}
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 16,
            marginTop: 6,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginVertical: 4,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "600",
                letterSpacing: 0.5,
                marginVertical: 4,
                color: "black",
                maxWidth: "84%",
              }}
            >
              {product.productName}
            </Text>
          </View>
          <Text
            style={{
              fontSize: 12,
              color: "black",
              fontWeight: "400",
              letterSpacing: 1,
              opacity: 0.5,
              lineHeight: 20,
              maxWidth: "85%",
              maxHeight: 44,
              marginBottom: 18,
            }}
          >
            {product.description}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 14,
              borderBottomColor: "gray",
              borderBottomWidth: 1,
              paddingBottom: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                width: "80%",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: "gray",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 12,
                  borderRadius: 100,
                  marginRight: 10,
                }}
              >
                <SunIcon />
              </View>
              <Text>Rustaveli Ave 57,{"\n"}17-001 , Batume</Text>
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 16,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "500",
                maxWidth: "85%",
                color: "black",
                marginBottom: 4,
              }}
            >
              &#8377; {product.productPrice}.00
            </Text>
            <Text>
              Tax Rate 2%~ &#8377; {product.productPrice / 20} (&#7377;{" "}
              {product.productPrice + product.productPrice / 20})
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              addToCart(product.id);
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                padding: 16,
                backgroundColor: "blue",
                borderRadius: 20,
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "500",
                  letterSpacing: 1,
                  color: "white",
                  textTransform: "uppercase",
                }}
              >
                Add to Cart
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetails;
