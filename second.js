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
        //console.log("pressed"); (verification)

        this.setState({age:33}); // possible (state => variable )
        //this.props.user="teste"; 
        // props est une constante de l'environnement (this)
    }
    
  render() {
   
    return (
      <><View>
            <Text>Nom:  {this.props.user}</Text>
        </View>
        <View>
            <Text onPress={this.updateAge}>Age: {this.state.age}</Text>

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