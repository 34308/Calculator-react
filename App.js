import React, {Component, useEffect} from 'react';
import {styles, LandscapeStyles} from './components/styles';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import Parser from 'math-expression-evaluator';
import SplashScreen from 'react-native-splash-screen';

export default class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }

  sqrt = '\u221a';
  constructor() {
    //SplashScreen.show();
    super();
    this.state = {
      myText: '',
      orientation: 'portrait',
    };
  }

  buttons = [
    {
      disabled: false,
      title: 'AC',
      onPress: () => this.clear(),
      style: styles.button,
    },
    {
      title: '',
      disabled: true,
      onPress: () => this.addSign(''),
      style: styles.button2,
    },
    {
      disabled: false,
      title: '/',
      onPress: () => this.check('/'),
      style: styles.buttonOperations,
    },
    {
      disabled: false,
      title: '7',
      onPress: () => this.addSign('7'),
      style: styles.buttonNumbers,
    },
    {
      disabled: false,
      title: '8',
      onPress: () => this.addSign('8'),
      style: styles.buttonNumbers,
    },
    {
      disabled: false,
      key: 5,
      title: '9',
      onPress: () => this.addSign('9'),
      style: styles.buttonNumbers,
    },
    {
      disabled: false,
      title: 'X',
      onPress: () => this.check('*'),
      style: styles.buttonOperations,
    },
    {
      disabled: false,
      title: '4',
      onPress: () => this.addSign('4'),
      style: styles.buttonNumbers,
    },
    {
      disabled: false,
      title: '5',
      onPress: () => this.addSign('5'),
      style: styles.buttonNumbers,
    },
    {
      disabled: false,
      title: '6',
      onPress: () => this.addSign('6'),
      style: styles.buttonNumbers,
    },
    {
      disabled: false,
      title: '-',
      onPress: () => this.check('-'),
      style: styles.buttonOperations,
    },
    {
      disabled: false,
      title: '3',
      onPress: () => this.addSign('3'),
      style: styles.buttonNumbers,
    },
    {
      disabled: false,
      title: '2',
      onPress: () => this.addSign('2'),
      style: styles.buttonNumbers,
    },
    {
      disabled: false,
      title: '1',
      onPress: () => this.addSign('1'),
      style: styles.buttonNumbers,
    },
    {
      disabled: false,
      title: '+',
      onPress: () => this.check('+'),
      style: styles.buttonOperations,
    },
    {
      disabled: false,
      title: '0',
      onPress: () => this.addSign('0'),
      style: styles.button2Numbers,
    },
    {
      disabled: false,
      title: ',',
      onPress: () => this.addSign('.'),
      style: styles.buttonNumbers,
    },
    {
      disabled: false,
      title: '=',
      onPress: () => this.result(),
      style: styles.buttonOperations,
    },
  ];
  LandscapeButtons = [
    {
      title: 'root',
      onPress: () => this.addSign('root'),
      style: LandscapeStyles.button,
    },
    {
      title: 'x!',
      onPress: () => this.check('!'),
      style: LandscapeStyles.button,
    },
    {
      title: 'AC',
      onPress: () => this.clear(),
      style: LandscapeStyles.button,
    },
    {
      title: '(',
      onPress: () => this.addSign(')'),
      style: LandscapeStyles.button,
    },
    {
      title: ')',
      onPress: () => this.addSign(')'),
      style: LandscapeStyles.button,
    },
    {
      title: '/',
      onPress: () => this.check('/'),
      style: LandscapeStyles.buttonOperations,
    },
    {
      title: 'e^x',
      onPress: () => this.addSign('e^'),
      style: LandscapeStyles.button,
    },
    {
      title: '10^x',
      onPress: () => this.addSign('10^'),
      style: LandscapeStyles.button,
    },
    {
      title: '7',
      onPress: () => this.addSign('7'),
      style: LandscapeStyles.buttonNumbers,
    },
    {
      key: 4,
      title: '8',
      onPress: () => this.addSign('8'),
      style: LandscapeStyles.buttonNumbers,
    },
    {
      key: 5,
      title: '9',
      onPress: () => this.addSign('9'),
      style: LandscapeStyles.buttonNumbers,
    },
    {
      title: 'X',
      onPress: () => this.check('*'),
      style: LandscapeStyles.buttonOperations,
    },
    {
      title: 'ln',
      onPress: () => this.addSign('ln'),
      style: LandscapeStyles.button,
    },
    {
      title: 'log10',
      onPress: () => this.addSign('log'),
      style: LandscapeStyles.button,
    },
    {
      title: '4',
      onPress: () => this.addSign('4'),
      style: LandscapeStyles.buttonNumbers,
    },
    {
      title: '5',
      onPress: () => this.addSign('5'),
      style: LandscapeStyles.buttonNumbers,
    },
    {
      title: '6',
      onPress: () => this.addSign('6'),
      style: LandscapeStyles.buttonNumbers,
    },
    {
      title: '-',
      onPress: () => this.check('-'),
      style: LandscapeStyles.buttonOperations,
    },
    {
      title: 'e',
      onPress: () => this.addSign('e'),
      style: LandscapeStyles.button,
    },
    {
      title: 'x^2',
      onPress: () => this.addSign('^2'),
      style: LandscapeStyles.button,
    },
    {
      title: '3',
      onPress: () => this.addSign('3'),
      style: LandscapeStyles.buttonNumbers,
    },
    {
      key: 10,
      title: '2',
      onPress: () => this.addSign('2'),
      style: LandscapeStyles.buttonNumbers,
    },
    {
      key: 11,
      title: '1',
      onPress: () => this.addSign('1'),
      style: LandscapeStyles.buttonNumbers,
    },
    {
      title: '+',
      onPress: () => this.check('+'),
      style: LandscapeStyles.buttonOperations,
    },
    {
      title: 'pi',
      onPress: () => this.addSign('pi'),
      style: LandscapeStyles.button,
    },
    {
      title: 'x^3',
      onPress: () => this.addSign('^3'),
      style: LandscapeStyles.button,
    },
    {
      title: '0',
      onPress: () => this.addSign('0'),
      style: LandscapeStyles.button2Numbers,
    },
    {
      title: ',',
      onPress: () => this.check('.'),
      style: LandscapeStyles.buttonNumbers,
    },
    {
      title: '=',
      onPress: () => this.result(),
      style: LandscapeStyles.buttonOperations,
    },
  ];

  DetectOrientation() {
    const {width, height} = Dimensions.get('window');
    if (height > width) {
      this.setState({orientation: 'portrait'});
    } else {
      this.setState({orientation: 'landscape'});
    }
  }

  check = znak => {
    const znaki = ['+', '-', '*', '/'];
    let last = this.state.myText.length;
    if (last > 0) {
      last = last - 1;
    }
    if (
      this.state.myText[last] !== znak &&
      this.state.myText[last] !== undefined
    ) {
      if (znaki.some(v => this.state.myText[last].includes(v))) {
        this.setState(previousState => ({
          myText: previousState.myText.slice(0, -1) + znak,
        }));
      } else {
        this.setState(previousState => ({myText: previousState.myText + znak}));
      }
    }
  };

  clear = () => {
    this.setState(previousState => ({myText: ''}));
  };
  addSign = T => {
    this.setState(previousState => ({myText: previousState.myText + T}));
  };
  result = () => {
    try {
      this.setState({myText: '' + Parser.eval(this.state.myText)});
    } catch (err) {
      this.setState({myText: 'error'});
    }
  };
  buildView = () => {
    return this.buttons.map(item => {
      return (
        <TouchableOpacity
          disabled={item.disabled}
          key={item.title}
          style={item.style}
          onPress={() => item.onPress()}>
          <Text style={styles.headerText}>{item.title}</Text>
        </TouchableOpacity>
      );
    });
  };
  buildView2 = () => {
    return this.LandscapeButtons.map(item => {
      return (
        <TouchableOpacity
          key={item.title}
          style={item.style}
          onPress={() => item.onPress()}>
          <Text style={LandscapeStyles.headerText}>{item.title}</Text>
        </TouchableOpacity>
      );
    });
  };
  render() {
    if (this.state.orientation === 'portrait') {
      return (
        <View
          style={styles.container}
          onLayout={this.DetectOrientation.bind(this)}>
          <View style={styles.operations}>
            <Text style={styles.OperationsText}>{this.state.myText}</Text>
          </View>
          <View style={styles.rowG}>{this.buildView()}</View>
        </View>
      );
    } else {
      return (
        <View
          style={LandscapeStyles.container}
          onLayout={this.DetectOrientation.bind(this)}>
          <View style={LandscapeStyles.operations}>
            <Text style={LandscapeStyles.OperationsText}>
              {this.state.myText}
            </Text>
          </View>
          <View style={LandscapeStyles.rowG}>{this.buildView2()}</View>
        </View>
      );
    }
  }
}
