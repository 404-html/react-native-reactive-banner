# Reactive Banner for React Native
**Lightweight (apx. 1kb)** 🤏 

**Simple with no dependencies** 😎 

**Runs animations in native thread** 🏎

I needed something nicer and catchier than what ads providers show in my app. _Voilà!_

![react-native-reactive-banner](https://user-images.githubusercontent.com/45104241/77213869-b5acc600-6b0c-11ea-8a46-e628dbffb77a.gif)

## Installation

```
yarn add react-native-reactive-banner
```

## Usage

### Basics
```js
import ReactiveBanner from 'react-native-reactive-banner'

...

return (
	<ReactiveBanner scrollRef={scrollRef} scrollOffset={scrollOffset}>
		your content here
	</ReactiveBanner>
);
```

### Full
Example below highlights crucial bits for best performance:
* Using `Animated` component for scroll (`Animated.ScrollView` in this case);
* passing `Animated.Event` to `onScroll` handler;
* linking current scroll offset with `scrollOffset` animated value;
* setting `useNativeDriver` to `true`;
* passing `scrollRef` and `scrollOffset` to `ReactiveBanner`.

```js

import React, { useRef } from 'react'
import { Animated } from 'react-native'
import ReactiveBanner from 'react-native-reactive-banner'

const Example = () => {

	const scrollRef = useRef(null);
	const scrollOffset = new Animated.Value(0);

	return (
		<Animated.ScrollView
			ref={scrollRef}
			onScroll={Animated.event(
				[{ nativeEvent: { contentOffset: { y: scrollOffset } } }],
				{ useNativeDriver: true }
			)}
		>
			<ReactiveBanner scrollRef={scrollRef} scrollOffset={scrollOffset}>
				your content here
			</ReactiveBanner>
		</Animated.ScrollView>
	);
}

export default Example

```

## Params
| Params                | Required          | Description  | Default      |
| --------------------- |:-------------:| ------------ | ------------ |
| `scrollRef` | `true`     | Reference pointer to parent scroll component.      ||
| `scrollOffset`  | `true`     |Current scroll offset provided as `Animated.Value`.||
| `height`    | `false`     |Banner height (in `px`)| Window height divided by 5. |

[☕](https://www.buymeacoffee.com/404html)
