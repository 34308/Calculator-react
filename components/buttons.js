import {styles} from './styles';

export const buttons = [
  {
    title: 'AC',
    onPress: () => this.clear(),
    style: styles.button,
  },
  {
    title: '',
    onPress: () => this.addSign(''),
    style: styles.button2,
    disable: true,
  },
  {
    title: '7',
    onPress: () => this.addSign('7'),
    style: styles.buttonNumbers,
  },
  {
    title: '8',
    onPress: () => this.addSign('8'),
    style: styles.buttonNumbers,
  },
  {
    title: '8',
    onPress: () => this.addSign('9'),
    style: styles.buttonNumbers,
  },
  {
    key: 6,
    title: '6',
    onPress: () => this.addSign('6'),
    style: styles.buttonNumbers,
  },
  {
    key: 7,
    title: '5',
    onPress: () => this.addSign('5'),
    style: styles.buttonNumbers,
  },
  {
    key: 8,
    title: '4',
    onPress: () => this.addSign('4'),
    style: styles.buttonNumbers,
  },
  {
    key: 9,
    title: '3',
    onPress: () => this.addSign('3'),
    style: styles.buttonNumbers,
  },
  {
    key: 10,
    title: '2',
    onPress: () => this.addSign('2'),
    style: styles.buttonNumbers,
  },
  {
    key: 11,
    title: '1',
    onPress: () => this.addSign('1'),
    style: styles.buttonNumbers,
  },
  {
    key: 12,
    title: '0',
    onPress: () => this.addSign('0'),
    style: styles.button2Numbers,
  },
  {
    key: 13,
    title: ',',
    onPress: () => this.addSign('.'),
    style: styles.buttonNumbers,
  },
];

export const operationsB = [
  {
    key: 1,
    title: '-',
    onPress: () => this.check('-'),
    style: styles.buttonOperations,
    disable: true,
  },
  {
    key: 2,
    title: '+',
    onPress: () => this.check('+'),
    style: styles.buttonOperations,
    disable: true,
  },
  {
    key: 3,
    title: '*',
    onPress: () => this.check('*'),
    style: styles.buttonOperations,
    disable: true,
  },
  {
    key: 4,
    title: '/',
    onPress: () => this.check('/'),
    style: styles.buttonOperations,
    disable: true,
  },
  {
    key: 5,
    title: '=',
    onPress: () => this.result('='),
    style: styles.buttonOperations,
  },
];
