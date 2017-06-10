import React, { PropTypes } from 'react';
import { View, Image } from 'react-native';

import styles from './styles';

const Icon = ({ checkmark, visible }) => {
    if (visible) {
        const iconStyles = [styles.icon];
        if (visible) {
            iconStyles.push(styles.iconVisible);
        }

        return (
            <View style={iconStyles}>
                {checkmark
                    ? <Image
                        source={require('./images/check.png')}
                        style={styles.checkIcon}
                        resizeMode="contain"
                    />
                    : null}
            </View>
        );
    }

    return <View style={styles.icon} />;
};

Icon.propTypes = {
    checkmark: PropTypes.bool,
    visible: PropTypes.bool,
};

export default Icon;
