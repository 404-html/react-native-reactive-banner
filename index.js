import React, { useRef, useState } from 'react'
import { Animated, UIManager, View, Dimensions, findNodeHandle } from 'react-native'
const windowHeight = Dimensions.get('window').height;

const ReactiveBanner = ({ children, scrollRef, scrollOffset, height = windowHeight / 5 }) => {

	const viewRef = useRef(null);
	const [yOffset, setYOffset] = useState(0);
	const [scrollHeight, setScrollHeight] = useState(0)
	const [childrenHeight, setChildrenHeight] = useState(0);

	return (
		<View style={{ height, width: '100%', overflow: 'hidden' }} ref={viewRef} onLayout={() => {
			setTimeout(() => {
				const scrollHandle = findNodeHandle(scrollRef.current || scrollRef);
				viewRef.current.measureLayout(scrollHandle, (_x, y) => setYOffset(y));
				UIManager.measure(scrollHandle, (_x, _y, _width, height) => setScrollHeight(height));
			}, 100);
		}}>
			<Animated.View
				onLayout={event => {
					setChildrenHeight(event.nativeEvent.layout.height);
				}}
				style={{
					transform: [{
						translateY: scrollOffset.interpolate({
							inputRange: [yOffset, yOffset + scrollHeight],
							outputRange: [0, childrenHeight - height]
						})
					}]
				}}
			>
				{children}
			</Animated.View>
		</View>
	)
}

export default ReactiveBanner;
