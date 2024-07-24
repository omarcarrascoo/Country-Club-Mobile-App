import React, {
  FC,
  useEffect,
  useRef,
  useState
} from 'react';
import { Animated, FlatList } from 'react-native';
import clubemberTheme from '../../../constants/clubember-theme';
import { Block } from 'galio-framework';
import { styles } from './styles';

const Tabs: FC<any> = ({
  data,
  onChange,
  active = null,
  ...props
}) => {
  const [state, setState] = useState({
    active
  });

  const animatedValue = new Animated.Value(1);
  const menuRef = useRef(null);

  useEffect(() => {
    if (active) {
      setTimeout(() => selectMenu(active), 300);
    }
  }, [active, state]);

  const animate = () => {
    animatedValue.setValue(0);

    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false // color not supported
    }).start();
  };
  const onScrollToIndexFailed = () => {
    // @ts-ignore
    menuRef?.current?.scrollToIndex({
      index: 2,
      viewPosition: 0.5
    });
  };

  const selectMenu = (id: any) => {
    // @ts-ignore
    menuRef?.current?.scrollToIndex({
      index: data.findIndex((item: any) => item.Nombre_Deporte === id),
      viewPosition: 0.5
    });

    animate();
    onChange && onChange(id);
  };

  const renderItem = (item: any) => {
    const isActive = state.active === item.Nombre_Deporte;

    const textColor = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [
        clubemberTheme.COLORS.WHITE,
        isActive
          ? clubemberTheme.COLORS.WHITE
          : clubemberTheme.COLORS.WHITE
      ],
      extrapolate: 'extend'
    });

    const containerStyles = [
      styles.titleContainer,
      !isActive && {
        backgroundColor: clubemberTheme.COLORS.PRIMARY
      },
      isActive && styles.containerShadow
    ];

    return (
      <Block style={containerStyles}>
        <Animated.Text
          style={[styles.menuTitle, { color: textColor }]}
          onPress={() => {
            setState({ active: item.Nombre_Deporte });
            selectMenu(item.Nombre_Deporte);
          }}
        >
          {item.Nombre_Deporte}
        </Animated.Text>
      </Block>
    );
  };

  const renderMenu = () => {
    return (
      <FlatList
        {...props}
        data={data}
        horizontal={true}
        ref={menuRef}
        extraData={state}
        keyExtractor={(item) => item.Nombre_Deporte}
        showsHorizontalScrollIndicator={false}
        onScrollToIndexFailed={onScrollToIndexFailed}
        renderItem={({ item }) => renderItem(item)}
        contentContainerStyle={styles.menu}
      />
    );
  };

  return (
    <Block style={styles.container}>{renderMenu()}</Block>
  );
};

export default Tabs;
