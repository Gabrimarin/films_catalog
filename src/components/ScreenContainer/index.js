import React, {useState} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {withTheme} from 'styled-components';
import {AccessibilityOptions, Header} from '..';
import {useNavigation} from '@react-navigation/native';

const ScreenContainer = ({
  children,
  title,
  backHidden,
  headerHidden,
  theme,
}) => {
  const [accessibilityModal, setAccessibilityModal] = useState(false);
  const navigation = useNavigation();
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.theme.SECONDARY_BACKGROUND_COLOR}
      />
      <SafeAreaView
        style={{
          backgroundColor: theme.theme.PRIMARY_BACKGROUND_COLOR,
          flex: 1,
        }}>
        {!headerHidden && (
          <Header
            onBackPress={backHidden ? null : () => navigation.goBack()}
            title={title}
            onAccessibilityPress={() => setAccessibilityModal(true)}
          />
        )}
        {children}
        <AccessibilityOptions
          isVisible={accessibilityModal}
          onClose={() => setAccessibilityModal(false)}
        />
      </SafeAreaView>
    </>
  );
};

export default withTheme(ScreenContainer);
