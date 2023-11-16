import type{TOrder, TMapping} from "./RotorsConfig";
import {alphabet} from "./RotorsConfig";

class Functional {
    private MappingTable: TMapping;
    private OrderTable: TOrder;

    constructor(MappingTable: TMapping, RotorNumber: TOrder) {
        this.MappingTable = MappingTable;
        this.OrderTable = RotorNumber;
    }
    GetIndexAlphabet(search: string): number {
        return alphabet.indexOf(search);
    }

    GetIndexMappingTable(key: string, search: string): number {
        const result: number | undefined = this.MappingTable[key]?.indexOf(search);


        if (typeof (result) !== undefined) {
            return (result as number);
        } else {
            throw new Error("type error");
        }
    }

    GetOffsetRotor(search: string): number {
        return this.OrderTable[search];
    }

    SetOffsetPlusOne(): void {
        const checkOverRange = (Rotors: TOrder) => {

            const keyRotor = Object.keys(Rotors);
            keyRotor.forEach((key, idx, array) => {
                // console.log(idx, RotorNumbers[key]);
                const keyRotorsLast = array[idx + 1];

                if (idx === 2 && this.OrderTable[key] >= 26) {
                    this.OrderTable[key] = 0;
                }

                if (this.OrderTable[key] >= 26) {


                    Rotors[keyRotorsLast] = Rotors[keyRotorsLast] + 1;
                    this.OrderTable[key] = 0;
                }
            });
        }

        checkOverRange(this.OrderTable);
        this.OrderTable.rotorOne = this.OrderTable.rotorOne + 1;
    }
}

export default Functional;