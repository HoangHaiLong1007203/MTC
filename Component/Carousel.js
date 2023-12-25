import {
	FlatList,
	Image,
	StyleSheet,
	Text,
	View,
	Dimensions,
	LogBox,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";

const Carousel = () => {
	const flatlistRef = useRef();
	// Get Dimesnions
	const screenWidth = Dimensions.get("window").width;
	const [activeIndex, setActiveIndex] = useState(0);

	// Auto Scroll

	useEffect(() => {
		let interval = setInterval(() => {
			if (activeIndex === carouselData.length - 1) {
				flatlistRef.current.scrollToIndex({
					index: 0,
					animation: true,
				});
			} else {
				flatlistRef.current.scrollToIndex({
					index: activeIndex + 1,
					animation: true,
				});
			}
		}, 2000);

		return () => clearInterval(interval);
	});

	const getItemLayout = (data, index) => ({
		length: screenWidth,
		offset: screenWidth * index, // for first image - 300 * 0 = 0pixels, 300 * 1 = 300, 300*2 = 600
		index: index,
	});
	// Data for carousel
	const carouselData = [
		{
			id: "01",
			image: require("../assets/duck.jpg"),
		},
		{
			id: "02",
			image: require("../assets/luff.jpg"),
		},
		{
			id: "03",
			image: require("../assets/road.jpg"),
		},
		{
			id: "04",
			image: require("../assets/fish.jpg"),
		},
		{
			id: "05",
			image: require("../assets/wave.jpg"),
		},
	];

	//  Display Images // UI
	const renderItem = ({ item, index }) => {
		return (
			<View style={{marginHorizontal:15}}>
				<Image
					source={item.image}
					style={{ height: 180, width: screenWidth -30, borderRadius:10, resizeMode:'cover' }}
				/>
			</View>
		);
	};

	// Handle Scroll
	const handleScroll = (event) => {
		// Get the scroll position
		const scrollPosition = event.nativeEvent.contentOffset.x;
		// console.log({ scrollPosition });
		// Get the index of current active item

		const index = Math.ceil(scrollPosition / screenWidth);

		// console.log({ index });
		// Update the index

		setActiveIndex(index);
	};

	// Render Dot Indicators
	const renderDotIndicators = () => {
		return carouselData.map((dot, index) => {
			// if the active index === index
			const key = dot.id;
			if (activeIndex === index) {
				return (
					<View
					key={key}
						style={{
							backgroundColor: "black",
							height: 4,
							width: 15,
							// borderRadius: 5,
							marginHorizontal: 10,
						}}
					></View>
				);
			} else {
				return (
					<View
						key={key}
						style={{
							backgroundColor: "lightgray",
							height: 4,
							width: 15,
							// borderRadius: 5,
							marginHorizontal: 10,
						}}
					></View>
				);
			}
		});
	};

	return (
		<View>
			<FlatList
				data={carouselData}
				ref={flatlistRef}
				getItemLayout={getItemLayout}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				horizontal={true}
				pagingEnabled={true}
				showsHorizontalScrollIndicator={false}
				onScroll={handleScroll}
			/>

			<View
				style={{
					flexDirection: "row",
					justifyContent: "center",
					marginTop:5,
				}}
			>
				{renderDotIndicators()}
			</View>
		</View>
	);
};

export default Carousel;

const styles = StyleSheet.create({});