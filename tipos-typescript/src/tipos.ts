// 1. Type Alias - Definindo tipos reutilizáveis
function testTypeAlias() {
    // Definindo um alias de tipo
    type ID = string | number;

    let id: ID = 'dfsd';
    console.log(id);

    function findById(id: ID): ID {
        return id;
    }
    console.log('1. Type Alias - Definindo tipos reutilizáveis');
    console.log(findById(1));
    console.log('\n');

}
testTypeAlias();

// 2. Evitando 'any' com validação de tipo
function testAvoidAny() {
    const showLog = (message: string): void => {
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
    let megacena: Array<number> = [1, 2, 3, 45, 6];
    console.log(megacena);

    let ids: (number | string)[] = [1, 'string'];
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

    let published: boolean;
    published = true;

    console.log(published);
    console.log('\n');

}
testBooleanTypes();

// 5. Enums
function testEnums() {
    console.log('5. Enums');

    enum StatusEnum {
        Published,
        Draft,
    }
    console.log(StatusEnum);

    function changeStatus(status: StatusEnum) {
        console.log(status);
    }
    changeStatus(StatusEnum.Published);

    enum OptionsEnum {
        op1 = 'OP1',
        op2 = 'OP2',
        op3 = 12,
    }
    const changeOptions = (option: OptionsEnum) => console.log(option);
    changeOptions(OptionsEnum.op2);
    console.log('\n');

}
testEnums();

// 6. Interfaces e Classes
function testInterfacesAndClasses() {
    console.log('6. Interfaces e Classes');

    interface LocationMapInterface {
        readonly latitude: number;
        longitude?: number;
    }

    const getLocation = (location: LocationMapInterface): string => {
        return `${location.latitude} ${location.longitude}`;
    };

    let location2: LocationMapInterface = {
        latitude: 12313,
        longitude: 321312,
    };
    console.log(getLocation(location2));

    interface LocationInterface {
        readonly latitude: number;
        longitude?: number;

        getLocation: (address: string) => {
            lat: number;
            long?: number;
        };
    }

    class Localization implements LocationInterface {
        readonly latitude: number;
        longitude?: number;

        constructor(la: number, lg?: number) {
            this.latitude = la;
            this.longitude = lg;
        }

        getLocation(address: string): { lat: number; long?: number } {
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

    let example: number;

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
    let employee: { firstName: string; lastName: string; score: number; isActive: boolean } = {
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
    let firstName: string = 'Carlos';
    let lastName: string = 'Ferreira';
    const fullName = `${firstName} ${lastName}`;

    console.log('9. Trabalhando com strings');
    console.log(fullName.toUpperCase());
    console.log('\n');

}
testStringTypes();

// 10. Trabalhando com literais de string
function testStringLiterals() {
    let mouseEvent: 'click' | 'mouseup' | 'mousedown' | 'dblclick';
    mouseEvent = 'mouseup';
    console.log('10. Trabalhando com literais de string');
    console.log(mouseEvent);
    console.log('\n');

}
testStringLiterals();

// 11. Tuplas
function testTuples() {
    const userData: [string, number] = ['Carlos', 900];
    console.log('11. Tuplas');
    console.log(userData);

    let users: [string, string, number, boolean][] = [
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

    const showLog = (message: string): void => {
        console.log(message);
    };
    showLog('test void');

    function showLogAndException(message: string): never {
        console.log(message);
        throw new Error('Example never');
    }

    // showLogAndException('test never');
}
testFunctionReturnTypes();
