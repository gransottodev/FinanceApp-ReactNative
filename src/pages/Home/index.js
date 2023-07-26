import {View, Text, StyleSheet, FlatList} from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Moviments from '../../components/Moviments';
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label: 'Boleto energia',
    value: '359,00',
    date: '12/07/2022',
    type: 0
  }, {
    id: 2,
    label: 'Boleto água',
    value: '55,00',
    date: '10/07/2022',
    type: 0
  },{
    id: 3,
    label: 'Contratação Freelance',
    value: '5000,00',
    date: '05/06/2022',
    type: 1
  }


]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Vitor Gransotto"/>
      <Balance saldo='154.259,52' gastos='3.506' />
      <Actions/>

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Moviments data={item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14
  },
  list: {
    marginStart: 14,
    marginEnd: 14
  }
})