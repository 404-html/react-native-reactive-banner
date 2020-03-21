# Reactive Banner for React Native
* Lightweight banner wrapper that responds to scroll and animates content inside ✔
* Simple with no dependencies ✔
* Runs animations in native thread ✔

![react-native-reactive-banner](https://user-images.githubusercontent.com/45104241/77213869-b5acc600-6b0c-11ea-8a46-e628dbffb77a.gif)

## Instalation

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

TBA.

## Params
| Params                | Type          | Description  | Default      |
| --------------------- |:-------------:| ------------ | ------------ |
| `scrollRef` | `Ref`     | Reference pointer to parent scroll component      ||
| `scrollOffset`  | `Animated.Value`     |Current scroll offset provided as `Animated.Value`.||
| `height`    | `Integer`     |Banner height (in `px`)| Window height divided by 5 |

