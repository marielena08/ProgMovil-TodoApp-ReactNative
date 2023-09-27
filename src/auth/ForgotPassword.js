import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, FlatList, TouchableOpacity, StyleSheet, CheckBox, Modal } from 'react-native';
import EditModal from './EditModal'; 
import logo from '../../imagenes/Logo1.png';

function Homepage() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const addItem = () => {
    if (inputText.trim() !== "") {
      setItems([...items, { text: inputText, id: Date.now() }]);
      setInputText("");
    }
  };

  const showDeleteConfirmation = (item) => {
    setItemToDelete(item);
    setConfirmationVisible(true);
  };

  const confirmDeleteItem = () => {
    if (itemToDelete) {
      const updatedItems = items.filter((item) => item.id !== itemToDelete.id);
      setItems(updatedItems);
    }
    setConfirmationVisible(false);
  };

  const editItem = (newText) => {
    if (selectedItem && newText.trim() !== "") {
      const updatedItems = items.map((item) =>
        item.id === selectedItem.id ? { ...item, text: newText } : item
      );
      setItems(updatedItems);
      setSelectedItem(null);
      setModalVisible(false); 
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
        <CheckBox />
        <Text style={styles.listItemText}>{item.text}</Text>
        <TouchableOpacity
        style={styles.editButton}
        onPress={() => {
            setInputText(item.text);
            setSelectedItem(item);
            setModalVisible(true); 
        }}
        >
        <Text style={styles.editButtonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => showDeleteConfirmation(item)}
        >
        <Text style={styles.deleteButtonText}>Eliminar</Text>
        </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
        <Text style={styles.confirmationText}>TODO APP</Text>
        <Image source={logo} style={styles.logo} />
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Ingrese una tarea nueva"
                onChangeText={(text) => setInputText(text)}
                value={inputText}
            />
            <TouchableOpacity
                style={styles.addButton}
                onPress={addItem}
            >
                <Text style={styles.addButtonText}>Añadir</Text>
            </TouchableOpacity>
        </View>
        <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            style={styles.listContainer}
        />
        <EditModal
            visible={modalVisible}
            onClose={() => {
            setInputText("");
            setModalVisible(false);
            }}
            onSave={editItem}
            initialText={selectedItem ? selectedItem.text : ""}
        />
        <Modal
            transparent={true}
            visible={confirmationVisible}
            onRequestClose={() => setConfirmationVisible(false)}
        >
        <View style={styles.confirmationContainer}>
            <Text style={styles.confirmationText}>¿Desea eliminar esta tarea?</Text>
            <View style={styles.buttonContainer}>
                <Button title="Confirmar" onPress={confirmDeleteItem} />
                <View style={styles.buttonSpacer} />
                <Button title="Cancelar" onPress={() => setConfirmationVisible(false)} />
            </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      width: '60%',
      maxWidth: 500,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#7FC19D',
      flexDirection: 'column',
      padding: 10,
      borderRadius: 10,
      marginVertical: '5%',
      marginHorizontal: '10%',
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8,
    },
    input: {
      flex: 1,
      height: 50,
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 8,
      borderRadius: 4,
      marginRight: 8,
      width: '100%',
    },
    addButton: {
      height: 50,
      backgroundColor: '#F05A0A',
      padding: 10,
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
    },
    addButtonText: {
      color: 'white',
    },
    listItem: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      padding: 8,
      marginBottom: 8,
      borderRadius: 4,
    },
    listItemText: {
      flex: 1,
      marginLeft: 8,
    },
    editButton: {
      backgroundColor: '#E86F03',
      padding: 4,
      marginRight: 4,
      borderRadius: 4,
    },
    editButtonText: {
      color: 'white',
    },
    deleteButton: {
      backgroundColor: '#E86F03',
      padding: 4,
      borderRadius: 4,
    },
    deleteButtonText: {
      color: 'white',
    },
    listContainer: {
      flex: 1,
      width: '100%',
    },
    confirmationContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: 20,
      borderRadius: 10,
    },
    confirmationText: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    buttonSpacer: {
      width: 10,
    },
  });

export default Homepage;
