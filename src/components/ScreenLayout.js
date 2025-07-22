import React from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native";

const TAB_BAR_PADDING = 128;

export default function ScreenLayout({
  children,
  scrollable = false,
  keyboardAvoiding = false,
  style = {},
}) {
  const Container = scrollable ? ScrollView : View;

  const content = (
    <Container
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={[
        scrollable ? styles.contentContainer : undefined,
        { paddingBottom: TAB_BAR_PADDING },
        style,
      ]}
      style={
        !scrollable
          ? [styles.flexCenter, { paddingBottom: TAB_BAR_PADDING }, style]
          : undefined
      }
    >
      {children}
    </Container>
  );

  return (
    <SafeAreaView style={styles.safe}>
      {keyboardAvoiding ? (
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.flex}
        >
          {content}
        </KeyboardAvoidingView>
      ) : (
        content
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 64,
  },
  flex: {
    flex: 1,
  },
  flexCenter: {
    flex: 1,
    justifyContent: "center",
  },
  contentContainer: {
    flexGrow: 1,
  },
});
