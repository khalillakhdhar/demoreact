import React, { Component } from 'react';
import { Text,  View } from 'react-native';

class Second extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            age: 30,
            address:'Tunisie',
            telephone:'+216999111'
        }
        this.updateAge=this.updateAge.bind(this);
    

    }
    updateAge()
    {
        this.setState({age:33})
    }
    
  render() {
   
    return (
      <><View>
            <Text>Nom:  {this.props.user}</Text>
        </View>
        <View>
            <Text onClick={this.updateAge}>Age: {this.state.age}</Text>

        </View>
        <View>
            <Text>Adresse: {this.state.address}</Text>
        </View>
        <View>
            <Text>Telephone: {this.state.telephone}</Text>
        </View>

        </>
    );
  }
}

export default Second;