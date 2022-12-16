import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

export const IconCommonTouchable = props => {
    const { name, type, color, size, style, onPress } = props;
    return (
        <TouchableOpacity onPress={onPress} style={{ marginTop: 5, marginRight: 10 }}>
            <Icon name={name} type={type} color={color} size={size} onPress={onPress} />
        </TouchableOpacity>
    );
};
