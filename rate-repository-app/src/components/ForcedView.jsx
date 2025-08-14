// components/ForcedView.js
import React, { forwardRef } from 'react';
import { View, StyleSheet } from 'react-native';

// Create a View that always applies `forcedStyle` last (so it wins)
export const makeForcedView = (forcedStyle) =>
  forwardRef(({ style, children, ...rest }, ref) => (
    <View
      ref={ref}
      {...rest}
      style={StyleSheet.compose(style, forcedStyle)}
    >
      {children}
    </View>
  ));

// For FlatList cells we need these:
export const ShrinkableCell = makeForcedView({ minWidth: 0, flexShrink: 1 });
