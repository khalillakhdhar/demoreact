import React, { Component } from 'react';
import { Text,  View } from 'react-native';

class PropState extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            myState:"this is my initial state"
        }
        this.updateState=this.updateState.bind(this);
    

    }
    updateState = ()=>this.setState({ myState: 'The state is updated' })
  
    
  render() {
   
    return (
      <>
      <View>
       <Text> {this.props.message}</Text>
      </View>
      <View>
        
            <Text onPress={this.updateState}>{this.state.myState}</Text>
        </View>
        
        </>
    );
  }
}

export default PropState;