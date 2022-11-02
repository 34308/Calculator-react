import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  operations: {
    flex: 1,
    backgroundColor: '#535455',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  results: {
    flex: 1,
    backgroundColor: '#888808',
    alignItems: 'flex-start',
  },
  container: {
    backgroundColor: '#535455',
    flex: 3,
  },
  button: {
    margin: 1,
    width: '24%',
    height: '20%',
    backgroundColor: '#646466',
  },
  button2: {
    margin: 1,
    height: '20%',
    width: '49%',
    backgroundColor: '#646466',
  },
  buttonNumbers: {
    margin: 1,
    height: '20%',
    width: '24%',
    backgroundColor: '#7c7d7e',
  },
  button2Numbers: {
    margin: 2,
    width: '49%',
    height: '20%',
    backgroundColor: '#7c7d7e',
  },
  buttonOperations: {
    margin: 1,
    width: '24%',
    height: '20%',
    backgroundColor: '#f1a23b',
  },
  headerText: {
    fontSize: 35,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'normal',
    color: '#fff',
  },
  OperationsText: {
    fontSize: 55,
    alignItems: 'flex-end',
    justifycontent: 'flex-end',
    margin: 10,
    fontWeight: 'normal',
    color: '#fff',
  },
  rowG: {
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export const LandscapeStyles = StyleSheet.create({
  operations: {
    flex: 1,
    backgroundColor: '#535455',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  results: {
    flex: 1,
    backgroundColor: '#888808',
    alignItems: 'flex-start',
  },
  container: {
    backgroundColor: '#535455',
    flex: 1,
  },
  button: {
    margin: 0.1,
    height: '20%',
    width: '16%',
    backgroundColor: '#646466',
  },
  button2: {
    height: '20%',
    width: '32.5%',
    backgroundColor: '#646466',
  },
  buttonNumbers: {
    marginBottom: 2,
    margin: 0.1,
    height: '20%',
    width: '16%',
    backgroundColor: '#7c7d7e',
  },
  button2Numbers: {
    margin: 0.1,
    width: '32.5%',
    height: '20%',
    backgroundColor: '#7c7d7e',
  },
  buttonOperations: {
    marginBottom: 2,
    margin: 0.1,
    width: '16%',
    height: '20%',
    backgroundColor: '#f1a23b',
  },
  headerText: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'normal',
    color: '#fff',
  },
  OperationsText: {
    fontSize: 55,
    alignItems: 'flex-end',
    justifycontent: 'flex-end',
    margin: 10,
    fontWeight: 'normal',
    color: '#fff',
  },
  rowG: {
    flex: 3,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
});
