"use strict";
// 1. Type Alias - Definindo tipos reutilizáveis
function testTypeAlias() {
    let id = 'dfsd';
    console.log(id);
    function findById(id) {
        return id;
    }
    console.log('1. Type Alias - Definindo tipos reutilizáveis');
    console.log(findById(1));
    console.log('\n');
}
testTypeAlias();
// 2. Evitando 'any' com validação de tipo
function testAvoidAny() {
    const showLog = (message) => {
        console.log(message);
    };
    console.log(' 2. Evitando any com validação de tipo');
    showLog('test');
    console.log('\n');
}
testAvoidAny();
// 3. Trabalhando com arrays e tipos compostos
function testArrayTypes() {
    console.log('3. Trabalhando com arrays e tipos compostos');
    let megacena = [1, 2, 3, 45, 6];
    console.log(megacena);
    let ids = [1, 'string'];
    console.log(ids);
    console.log('\n');
}
testArrayTypes();
// 4. Trabalhando com booleanos
function testBooleanTypes() {
    console.log('4. Trabalhando com booleanos');
    let isActive = true;
    isActive = false;
    console.log(isActive);
    let published;
    published = true;
    console.log(published);
    console.log('\n');
}
testBooleanTypes();
// 5. Enums
function testEnums() {
    console.log('5. Enums');
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Published"] = 0] = "Published";
        StatusEnum[StatusEnum["Draft"] = 1] = "Draft";
    })(StatusEnum || (StatusEnum = {}));
    console.log(StatusEnum);
    function changeStatus(status) {
        console.log(status);
    }
    changeStatus(StatusEnum.Published);
    let OptionsEnum;
    (function (OptionsEnum) {
        OptionsEnum["op1"] = "OP1";
        OptionsEnum["op2"] = "OP2";
        OptionsEnum[OptionsEnum["op3"] = 12] = "op3";
    })(OptionsEnum || (OptionsEnum = {}));
    const changeOptions = (option) => console.log(option);
    changeOptions(OptionsEnum.op2);
    console.log('\n');
}
testEnums();
// 6. Interfaces e Classes
function testInterfacesAndClasses() {
    console.log('6. Interfaces e Classes');
    const getLocation = (location) => {
        return `${location.latitude} ${location.longitude}`;
    };
    let location2 = {
        latitude: 12313,
        longitude: 321312,
    };
    console.log(getLocation(location2));
    class Localization {
        constructor(la, lg) {
            this.latitude = la;
            this.longitude = lg;
        }
        getLocation(address) {
            return {
                lat: this.latitude,
                long: this.longitude,
            };
        }
    }
    let location = new Localization(123, 321);
    console.log(getLocation(location));
    console.log('\n');
}
testInterfacesAndClasses();
// 7. Trabalhando com números
function testNumberTypes() {
    console.log('7. Trabalhando com números');
    let example;
    example = 123;
    console.log(example);
    example = 12.2;
    console.log(example);
    example = 0x37cf;
    console.log(example);
    example = 0o377;
    console.log(example);
    example = 0b111001;
    console.log(example);
    console.log('\n');
}
testNumberTypes();
// 8. Trabalhando com objetos
function testObjects() {
    let employee = {
        firstName: 'Carlos',
        lastName: 'Ferreira',
        score: 900,
        isActive: true,
    };
    console.log('8. Trabalhando com objetos');
    console.log(employee.firstName);
    console.log('\n');
}
testObjects();
// 9. Trabalhando com strings
function testStringTypes() {
    let firstName = 'Carlos';
    let lastName = 'Ferreira';
    const fullName = `${firstName} ${lastName}`;
    console.log('9. Trabalhando com strings');
    console.log(fullName.toUpperCase());
    console.log('\n');
}
testStringTypes();
// 10. Trabalhando com literais de string
function testStringLiterals() {
    let mouseEvent;
    mouseEvent = 'mouseup';
    console.log('10. Trabalhando com literais de string');
    console.log(mouseEvent);
    console.log('\n');
}
testStringLiterals();
// 11. Tuplas
function testTuples() {
    const userData = ['Carlos', 900];
    console.log('11. Tuplas');
    console.log(userData);
    let users = [
        ['Carlos', 'Ferreira', 900, true],
        ['Especializa', 'TI', 950, true],
    ];
    console.log(users);
    console.log('\n');
}
testTuples();
// 12. Trabalhando com funções void e never
function testFunctionReturnTypes() {
    console.log('12. Trabalhando com funções void e never');
    const showLog = (message) => {
        console.log(message);
    };
    showLog('test void');
    function showLogAndException(message) {
        console.log(message);
        throw new Error('Example never');
    }
    // showLogAndException('test never');
}
testFunctionReturnTypes();
