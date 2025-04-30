import { AppRegistry } from "react-native";
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, ScrollView } from "react-native";
import { useState } from "react";

export default function App(){
    const [primeiroNumero, setPrimeiroNumero] = useState(0);
    const [segundoNumero, setSegundoNumero]   = useState(0);
    const [resultado, setResultado]           = useState(0);

    function somar(){
        setResultado(parseFloat(primeiroNumero) + parseFloat(segundoNumero));
        return setResultado;
    }//fim do método somar

    function subtrair(){
        setResultado(parseFloat(primeiroNumero) - parseFloat(segundoNumero));
        return setResultado;
    }//fim do método subtrair

    function multiplicar(){
        setResultado(parseFloat(primeiroNumero) * parseFloat(segundoNumero));
        return setResultado;
    }//fim do método subtrair

    function dividir(){
        if(parseFloat(segundoNumero) <= 0)
        {
            setResultado("Impossível dividir por zero!");
        }
        else
        {
            setResultado(parseFloat(primeiroNumero) / parseFloat(segundoNumero));
        }
        return setResultado;
    }//fim do método subtrair

    function limpar(){
        setPrimeiroNumero(0);
        setSegundoNumero(0);
        setResultado(0);
    }//fim do método

    return (
        <View style={styles.tela}>
            
            <Text style={styles.tituloPrograma}>Calculadora</Text>

            <ScrollView>
            <View style={styles.primeiroCampo}>
                
                <TextInput style={styles.input} value={primeiroNumero} onChangeText={novoNumero => setPrimeiroNumero(novoNumero)} placeholder="Informe um número: "/>
            </View>

            <View style={styles.segundoCampo}>
                <TextInput style={styles.input} value={segundoNumero} onChangeText={novoNumero => setSegundoNumero(novoNumero)} placeholder="Informe outro Número: "/>
            </View>

            
            <View style={styles.areaBotoes}>
                <TouchableOpacity style={styles.botao} onPress={somar}>
                    <Text style={styles.texto}>Somar</Text>
                </TouchableOpacity>
                    
                <TouchableOpacity style={styles.botao} onPress={subtrair}>
                    <Text style={styles.texto}>Subtrair</Text>
                </TouchableOpacity>
            </View>          

            <View style={styles.areaBotoes}>
                <TouchableOpacity style={styles.botao} onPress={multiplicar}>
                    <Text style={styles.texto}>Multiplicar</Text>
                </TouchableOpacity>
                    
                <TouchableOpacity style={styles.botao} onPress={dividir}>
                    <Text style={styles.texto}>Dividir</Text>
                </TouchableOpacity>
            </View>
            

            <View style={styles.areaLimpar}>
                <TouchableOpacity style={styles.botao} onPress={limpar}>
                    <Text style={styles.texto}>Limpar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.areaResultado}>
                <Text style={styles.textoResultado}>{resultado}</Text>
            </View> 
            </ScrollView>
            
        </View>
    );
}

const styles = StyleSheet.create({
    tela:{
        backgroundColor: "#898989",
        height: "100%",
        
    },
    tituloPrograma:{
        marginTop: 50,
        textAlign: "center",
        fontSize: 50,
        fontWeight: 800,
        color: "#000aaa",
    },
    primeiroCampo:{
        backgroundColor: "#89af00",
        margin: 10,
        padding: 10,
        borderRadius: 100,
        marginTop: 25,
        width: "90%",
    }, 
    segundoCampo:{
        backgroundColor: "#89af00",
        margin: 10,
        padding: 10,
        borderRadius: 100,
        marginTop: 5,
        width: "90%",
    }, 
    input: {
        textAlign: "center",
        fontSize: 15,
        color: "#fff",
    },
    botao:{
        borderColor: "#000",
        borderWidth: 2,
        width: "50%",
        padding: 20,    
    },  
    //Faço comentário assim
    areaBotoes:{
       display: "flex",
       marginTop: 10,
       flexDirection: "row",
           
    },
    areaResultado:{
        marginTop: 40, 
        borderWidth: 2,
        borderColor: "#fff",
        width: "100%",
        padding: 50,
    },
    textoResultado: {
        color: "#fff",
        fontSize: 30,
        textAlign: "center",
    },
    areaLimpar:{
        marginTop: 10,
        width: 785,

    },
    texto:{
        textAlign: "center",
        fontSize: 15,
        color: "#aff",
    },
});

AppRegistry.registerComponent('main', () => App);