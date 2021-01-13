import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet
} from 'react-native';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            input_handler:'',
            city_name:'milan',
            data:{}
        };
        this.onPressSearchCity= this.onPressSearchCity.bind(this);
        this.handleChange= this.handleChange.bind(this);
    }

    fetch_weather(city_name){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=59d9fa0cf6743e3b7d170bf7ba5ff223&units=metric`)
        .then((res) => res.json())
        .then((json) => this.setState({data:json}))
        .catch((error) => console.error(error))
    }

    onPressSearchCity(input){
        if(input !== '') this.setState({city_name:input});
    }

    handleChange(e){
        this.setState({input_handler:e});
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.city_name !== this.state.city_name) {
            this.fetch_weather(this.state.city_name);
        }
    }

    render(){
        if(this.state.data.sys === undefined){
            return(
                <View style={styles.main_con}>
                    <View style={styles.detail_con}><Text>input name of city and touch button to search</Text></View>
                    <View style={styles.inp_con}>
                        <TextInput 
                            style={styles.inp} 
                            onChangeText ={this.handleChange}
                            placeholder="Enter City Name"
                        />
                        <Button
                            onPress={()=>this.onPressSearchCity(this.state.input_handler)}
                            title="Search City"
                            color="#841584"
                        />
                    </View>
                </View>
            );
        }else{
            return(
                <View style={styles.main_con}>
                    <View style={styles.detail_con}>
                        <Text style={styles.name}>{this.state.data.sys.country}.{this.state.data.name}</Text>
                        <Text>weather description : {this.state.data.weather[0].main}</Text>
                        <Text>current temperator : {this.state.data.main.temp}</Text>
                        <Text>wind speed : {this.state.data.wind.speed}</Text>
                    </View>
                    <View style={styles.inp_con}>
                        <TextInput 
                            style={styles.inp} 
                            onChangeText ={this.handleChange}
                            placeholder="Enter City Name"
                        />
                        <Button
                            onPress={()=>this.onPressSearchCity(this.state.input_handler)}
                            title="Search City"
                            color="#841584"
                        />
                    </View>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    main_con:{
        flex:1,
    },
    inp_con:{
        flex:1,
        width:'100%',
        alignSelf:'flex-end',
    },
    inp:{
        textAlign:'center',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    },
    detail_con:{
        alignItems:'center',
        justifyContent:'center',
        padding:'auto',
        width:'80%',
        flex:8,
        alignSelf:'center',
    },
    name: {
        fontSize: 24,
        fontWeight: '600'
    },
});

export default App;