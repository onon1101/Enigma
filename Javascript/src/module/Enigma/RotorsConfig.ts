type TMapping = {
    [key: string]: string | undefined;
    turnovers: string;
}


type TOrder = {
    [key: string]: number;
}

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase();

const MappingTable: TMapping = {
    rotorOne: "ekmflgdqvzntowyhxuspaibrcj",
    rotorTwo: "zouesydkfwpciqxhmvblgnjrat",
    rotorThree: "ehrvxgaobqusimzflynwktpdjc",
    turnovers: "ejmzalyxvbwfcrquontspikhgd",
}

let RotorNumbers: TOrder = {
    rotorOne: 0,
    rotorTwo: 0,
    rotorThree: 0,
}

export {MappingTable, RotorNumbers, alphabet, TMapping, TOrder};
