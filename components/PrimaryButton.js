import {Text, View, Pressable, StyleSheet} from "react-native";

function PrimaryButton({children}) {
    pressHandler = () => {
        console.log('Pressed');
    }
    return (

        <View style={styles.buttonOuterContainer}>
            <Pressable
                onPress={pressHandler}
                style={({pressed}) =>
                    pressed
                        ? [styles.buttonInnerContainer, styles.pressed]
                        : styles.buttonInnerContainer
                }
                android_ripple={{color: '#72063c'}}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>


    );
}
export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        alignItems: 'center',
        borderRadius: 8,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: '#ddb52f',
        padding: 16,
        marginVertical: 8,
        borderRadius: 8,
        width: '100%',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,
        backgroundColor: '#72063c',
    },
});