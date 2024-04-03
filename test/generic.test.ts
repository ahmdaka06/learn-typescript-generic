import { Entry, GenericData, SimpleGeneric, Triple } from "../src/generic";

describe('generic', () => {

    it('should support multiple data type', () => {

        const data = new GenericData<number>(123);
        expect(data.value).toBe(123);

        const dataString = new GenericData<string>('Ahmad Andika');
        const dataStringUpper = dataString.value.toUpperCase();

        expect(dataStringUpper).toBe('AHMAD ANDIKA');
        

    });

    function create<T>(value: T): T {
        return value;
    }

    it('should support funtion generic', () => {
            
        const result: string = create<string>('Andika');
        expect(result).toBe('Andika');

        const resultNumber: number = create<number>(123);
        expect(resultNumber).toBe(123);
        
    });

    it('should support multiple generic', () => {
        const entry = new Entry<number, string>(1, 'Hello');
        expect(entry.key).toBe(1);
        expect(entry.value).toBe('Hello');

        const triple = new Triple<number, string, boolean>(1, 'Hello', true);
        expect(triple.first).toBe(1);
        expect(triple.second).toBe('Hello');
        expect(triple.third).toBe(true);
    });

    it('should support optional generic type', () => {

        const entry = new Entry(1, 'Hello');
        expect(entry.key).toBe(1);
        expect(entry.value).toBe('Hello');

    });

    it('should simple generic', () => {

        const simple = new SimpleGeneric();
        simple.setValue('Andika');
        // simple.setValue(123);
        // simple.setValue(true);

        expect(simple.getValue()!.toUpperCase()).toBe('ANDIKA');
        

    });

});