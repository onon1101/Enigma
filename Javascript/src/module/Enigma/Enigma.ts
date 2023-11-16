import {MappingTable, RotorNumbers, alphabet, TMapping, TOrder} from './RotorsConfig';
import Functional from "./Functional";

class Enigma {
    constructor(string: string) {
        // console.log(Enigma.encrypt("aa", config, RotorNumbers));
        // console.log(Enigma.encrypt('a', config, RotorNumbers));
        // console.log(Enigma.encrypt('a', config, RotorNumbers));
        // console.table(RotorNumbers);
        return Enigma.encrypt(string, MappingTable, RotorNumbers);
    }

    static encrypt(str: string, rotors: any, rotorsOffset: Object): Array<string> {
        let funct = new Functional(MappingTable, RotorNumbers);

        const encryptChar = (char: string) => {
            let result: string = char;
            const keyRotorForward = Object.keys(MappingTable);
            const keyRotorReverse = Object.keys(MappingTable).reverse();

            // 順向
            keyRotorForward.forEach((key: string) => {
                if (key === "turnovers") {
                    return;
                }
                result = rotors[key][(funct.GetIndexAlphabet(result) + funct.GetOffsetRotor(key)) % 26];
                // console.log(result, funct.GetIndexAlphabet(result),);
            });

            // 反射板
            result = alphabet[funct.GetIndexMappingTable('turnovers', result)];

            // 逆向
            keyRotorReverse.forEach((key) => {
                if (key === "turnovers") {
                    return;
                }
                result = alphabet[(funct.GetIndexMappingTable(key, result) + funct.GetOffsetRotor(key)) % 26];
                // console.log(result);
            })

            funct.SetOffsetPlusOne();
            // console.log(result);
            // console.table(RotorNumbers);
            return result;
        }

        return [...str].map((char) => {
            return encryptChar(char);
        });
    }
}

export default Enigma;