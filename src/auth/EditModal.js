import React, { useState } from 'react';
import { Modal, View, Text, TextInput, Button, StyleSheet } from 'react-native';

function EditModal({ visible, onClose, onSave, initialText, initialDescription }) {
    const [inputText, setInputText] = useState(initialText);
    const [descriptionText, setDescriptionText] = useState(initialDescription);

    const handleSave = () => {
        onSave(inputText, descriptionText);
        setInputText("");
        setDescriptionText("");
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <Text style={styles.textModal}>Editar informacion de la tarea</Text>
                <TextInput
                    style={styles.modalInput}
                    placeholder="Nombre de la Tarea"
                    onChangeText={(text) => setInputText(text)}
                    value={inputText}
                />
                <TextInput
                    style={styles.modalInput}
                    placeholder="Descripcion"
                    onChangeText={(text) => setDescriptionText(text)}
                    value={descriptionText}
                    multiline={true}
                    numberOfLines={4}
                />
                <View style={styles.buttonContainer}>
                    <Button title="Guardar" onPress={handleSave} />
                <View style={styles.buttonSpacer} /> 
                    <Button title="Cancelar" onPress={onClose} />
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalInput: {
    height: 50,
    width: '80%',
    marginBottom: 8,
    paddingHorizontal: 8,
    borderRadius: 4,
    backgroundColor: 'white',
  },
  modalDescriptionInput: {
    height: 100, 
    width: '80%',
    marginBottom: 8,
    paddingHorizontal: 8,
    borderRadius: 4,
    backgroundColor: 'white',
  },
  textModal: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  buttonSpacer: {
    width: 10,
  },
});

export default EditModal;
