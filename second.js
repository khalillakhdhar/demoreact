import React, { Component } from 'react';
import { Text,  View } from 'react-native';

class Second extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            age: 30
        }

    }
  render() {
    return (
      <><View>
            <Text>Hello,  {this.props.user}</Text>
        </View>
        <View>
            <Text>Age: {this.state.age}</Text>

        </View>
        </>
    );
  }
}

export default Second;