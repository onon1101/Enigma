

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase();


var config = {
    rotorOne: "ekmflgdqvzntowyhxuspaibrcj",
    rotorTwo: "zouesydkfwpciqxhmvblgnjrat",
    rotorThree: "ehrvxgaobqusimzflynwktpdjc",
}

let RotorNumbers = {
    rotorOne: 0,
    rotorTwo: 0,
    rotorThree: 0,
}

var turnovers = "ejmzalyxvbwfcrquontspikhgd"

const GetIndexAlphabet = (idx: string) => alphabet.indexOf(idx);
const GetIndexTurnovers = (idx: string) => turnovers.indexOf(idx);
const GetIndexRotors = (idx: string, key: string) => {
    return config[key].indexOf(idx);
};
const GetOffsetRotor = (Rotors, key) => Rotors[key];

const checkOverRotorRange = (Rotors) => {
    const keyRotor = Object.keys(Rotors);
    keyRotor.forEach((key, idx) => {
        console.log(idx, RotorNumbers[key]);
        if (idx === 2 && RotorNumbers[key] >= 26) {
            RotorNumbers[key] = 0;
        }
       if (Rotors[key] >= 26) {
           Rotors[keyRotor[idx + 1]] = Rotors[keyRotor[idx + 1]] + 1;
           Rotors[key] = 0;
       }
    });
}

const SetOffsetPlusOne = (Rotors: any) => {
    checkOverRotorRange(Rotors);
    Rotors.rotorOne = Rotors.rotorOne + 1;
}

class Enigma {
    constructor(string: string) {
        // console.log(Enigma.encrypt("aa", config, RotorNumbers));
        // console.log(Enigma.encrypt('a', config, RotorNumbers));
        // console.log(Enigma.encrypt('a', config, RotorNumbers));
        // console.table(RotorNumbers);
        return Enigma.encrypt(string, config, RotorNumbers);
    }

    static encrypt(str: string, rotors: any, rotorsOffset: Object) {
        const encryptChar = (char: string) => {
            let result = char;
            const keyRotorForward = Object.keys(config);
            const keyRotorReverse = Object.keys(config).reverse();

            // 順向
            keyRotorForward.forEach((key) => {
                result = rotors[key][(GetIndexAlphabet(result) + GetOffsetRotor(rotorsOffset, key)) % 26];
                // console.log(result);
            });

            // 反射板
            result = alphabet[GetIndexTurnovers(result)];

            // 逆向
            keyRotorReverse.forEach((key) => {
                result = alphabet[(GetIndexRotors(result, key) + GetOffsetRotor(rotorsOffset, key)) % 26];
                // console.log(result);
            })

            SetOffsetPlusOne(rotorsOffset);
            // console.log(result);
            console.table(RotorNumbers);
            return result;
        }

        return [...str].map((char) => {
            return encryptChar(char);
        });
    }
}

export default Enigma;