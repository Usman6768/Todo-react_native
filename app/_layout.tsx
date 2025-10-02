import { ThemeProvider } from "@/hooks/useTheme";
import { ConvexProvider, ConvexReactClient } from 'convex/react';
import { Stack } from "expo-router";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false // disable the warning in development mode
} );

export default function RootLayout() {
  return (
    <ConvexProvider client={convex}>
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" /> // this means the default screen is (tabs)/index.tsx
      </Stack>
    </ThemeProvider>
    </ConvexProvider>
  )
}
