import { TextInput, View, StyleSheet } from 'react-native';
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} maxLength={2} keyboardType={"number-pad"} autoCapitalize={"none"} autoCorrect={false}/>
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 24,
        marginTop: 100,
        padding: 16,
        backgroundColor: '#72063c',
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
    },
    textInput: {
        borderBottomColor: '#ddb52f',
        width: 50,
        borderBottomWidth: 2,
        height: 50,
        textAlign: 'center',
        fontSize: 32,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
    },
});