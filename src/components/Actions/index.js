import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {AntDesign} from '@expo/vector-icons'

export default function Actions() {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>

        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.areaButton}>
            <AntDesign name="addfolder" size={25} color="#000"/>
          </View>
          <Text style={styles.labelButton}>Entradas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.areaButton}>
            <AntDesign name="tagso" size={25} color="#000"/>
          </View>
          <Text style={styles.labelButton}>Compras</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.areaButton}>
            <AntDesign name="creditcard" size={25} color="#000"/>
          </View>
          <Text style={styles.labelButton}>Carteira</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.areaButton}>
            <AntDesign name="barcode" size={25} color="#000"/>
          </View>
          <Text style={styles.labelButton}>Boletos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.areaButton}>
            <AntDesign name="setting" size={25} color="#000"/>
          </View>
          <Text style={styles.labelButton}>Conta</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    maxHeight: 84,
    marginBottom: 14,
    marginTop: 18,
    paddingEnd: 14,
    paddingStart: 14
  },
  actionButton:{
    alignItems: 'center',
    marginRight: 32
  },
  areaButton: {
    backgroundColor: "#ecf6f1",
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  labelButton: {
    marginTop: 4,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
