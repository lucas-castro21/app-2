import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function IconsScreen() {
  const cards = [
    { id: 1, title: 'Performance', icon: 'speedometer', color: '#03DAC6' },
    { id: 2, title: 'Desenvolvimento', icon: 'code-tags', color: '#CF6679' },
    { id: 3, title: 'Design System', icon: 'palette', color: '#BB86FC' },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.header}>Meus Cards</Text>
      {cards.map((item) => (
        // Substituimos a <View> externa por <TouchableOpacity>
        <TouchableOpacity 
          key={item.id} 
          style={[styles.card, { borderLeftColor: item.color }]}
          activeOpacity={0.7} // Define a transparência ao clicar (0.0 a 1.0)
          onPress={() => {
            // Se você quisesse fazer algo ao clicar, o código iria aqui.
            // Por enquanto, apenas o efeito visual já basta.
            console.log(`Clicou em: ${item.title}`); 
          }}
        >
          <MaterialCommunityIcons name={item.icon as any} size={30} color={item.color} />
          <Text style={styles.cardText}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  content: { padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', color: '#fff', marginBottom: 20 },
  card: {
    backgroundColor: '#1E1E1E',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    borderLeftWidth: 5,
    gap: 15,
    // Adicionamos uma sombra leve para dar profundidade
    elevation: 4, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardText: { color: '#E0E0E0', fontSize: 18, fontWeight: '500' },
});