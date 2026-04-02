import React, { useState } from 'react'; // 1. Importar o useState
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  KeyboardAvoidingView, 
  Platform, 
  ScrollView,
  TouchableOpacity,
  Alert 
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function FormsScreen() {
  // 2. Criar os estados para os campos
  const [nome, setNome] = useState('');
  const [codigo, setCodigo] = useState('');

  // 3. Função que lida com o envio e limpa tudo
  const handleEnviar = () => {
    if (nome === '' || codigo === '') {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    // Aqui seria onde você enviaria os dados para um banco de dados
    Alert.alert("Sucesso", `Projeto ${nome} enviado!`);

    // A MÁGICA: Limpar os campos após o envio
    setNome('');
    setCodigo('');
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerIcon}>
          <MaterialCommunityIcons name="clipboard-edit-outline" size={60} color="#BB86FC" />
        </View>
        
        <Text style={styles.title}>Cadastro de Atividade</Text>
        <Text style={styles.subtitle}>Preencha os dados abaixo para o envio</Text>

        <View style={styles.formCard}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>NOME DO PROJETO</Text>
            <View style={styles.inputWrapper}>
              <MaterialCommunityIcons name="pencil" size={20} color="#666" style={styles.inputIcon} />
              <TextInput 
                style={styles.input} 
                placeholder="Ex: App ADS Pro" 
                placeholderTextColor="#555"
                value={nome} // 4. Vincular o valor ao estado
                onChangeText={setNome} // 5. Atualizar o estado ao digitar
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>CÓDIGO DA TURMA</Text>
            <View style={styles.inputWrapper}>
              <MaterialCommunityIcons name="numeric" size={20} color="#666" style={styles.inputIcon} />
              <TextInput 
                style={styles.input} 
                placeholder="546" 
                keyboardType="numeric" 
                placeholderTextColor="#555"
                value={codigo} // 4. Vincular o valor ao estado
                onChangeText={setCodigo} // 5. Atualizar o estado ao digitar
              />
            </View>
          </View>

          <TouchableOpacity style={styles.submitButton} onPress={handleEnviar}>
            <Text style={styles.submitText}>ENVIAR RESPOSTA</Text>
            <MaterialCommunityIcons name="send" size={20} color="#000" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

// ... (mantenha os mesmos estilos do código anterior)
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  scrollContainer: { padding: 24, alignItems: 'center' },
  headerIcon: { marginTop: 20, marginBottom: 10 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#fff' },
  subtitle: { fontSize: 14, color: '#888', marginBottom: 30 },
  formCard: { width: '100%', backgroundColor: '#1E1E1E', borderRadius: 20, padding: 20 },
  inputGroup: { marginBottom: 20 },
  label: { color: '#BB86FC', fontSize: 12, fontWeight: 'bold', marginBottom: 8 },
  inputWrapper: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#2C2C2C', borderRadius: 12, paddingHorizontal: 15 },
  inputIcon: { marginRight: 10 },
  input: { flex: 1, height: 50, color: '#fff', fontSize: 16 },
  submitButton: { flexDirection: 'row', backgroundColor: '#03DAC6', height: 55, borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginTop: 10, gap: 10 },
  submitText: { color: '#000', fontSize: 16, fontWeight: 'bold' },
});