import React from 'react';
import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        // 1. Esconde o cabeçalho superior para um visual mais moderno e limpo
        headerShown: false, 
        
        // 2. Cores da Tab Bar (Barra Inferior)
        tabBarActiveTintColor: '#BB86FC', // Roxo neon para a aba selecionada
        tabBarInactiveTintColor: '#888',    // Cinza para as outras
        
        // 3. Estilo do "Container" da Barra
        tabBarStyle: {
          backgroundColor: '#1E1E1E',      // Fundo grafite escuro
          borderTopWidth: 0,               // Remove a linha de separação
          height: Platform.OS === 'ios' ? 90 : 70, 
          paddingBottom: Platform.OS === 'ios' ? 30 : 12,
          paddingTop: 8,
          elevation: 10,                   // Sombra no Android
          shadowColor: '#000',             // Sombra no iOS
          shadowOpacity: 0.3,
          shadowRadius: 10,
        },
      }}
    >
      {/* Aba 1: Miau (Arquivo: app/(tabs)/index.tsx) */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Miau',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cat" size={size + 4} color={color} />
          ),
        }}
      />

      {/* Aba 2: Ícones (Arquivo: app/(tabs)/icons.tsx) */}
      <Tabs.Screen
        name="icons"
        options={{
          title: 'Cards',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="view-grid" size={size + 2} color={color} />
          ),
        }}
      />

      {/* Aba 3: Forms (Arquivo: app/(tabs)/forms.tsx) */}
      <Tabs.Screen
        name="forms"
        options={{
          title: 'Forms',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="form-select" size={size + 2} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}