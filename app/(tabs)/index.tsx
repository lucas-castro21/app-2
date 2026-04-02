import { View, Text, StyleSheet, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.cardIcon}>
        <MaterialCommunityIcons name="cat" size={120} color="#BB86FC" />
      </View>
      <Text style={styles.title}>Bem-vindo ao Miau</Text>
      
      <Pressable 
        style={({ pressed }) => [styles.button, pressed && styles.pressed]} 
        onPress={() => router.push('/icons')}
      >
        <Text style={styles.buttonText}>Explorar Cards</Text>
        <MaterialCommunityIcons name="arrow-right" size={20} color="#fff" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#121212' },
  cardIcon: {
    backgroundColor: '#1E1E1E',
    padding: 40,
    borderRadius: 30,
    elevation: 10,
    shadowColor: '#BB86FC',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    marginBottom: 30,
  },
  title: { fontSize: 28, fontWeight: 'bold', color: '#fff', marginBottom: 40 },
  button: {
    flexDirection: 'row',
    backgroundColor: '#6200EE',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 15,
    alignItems: 'center',
    gap: 10,
  },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: '600' },
  pressed: { opacity: 0.7, transform: [{ scale: 0.95 }] },
});