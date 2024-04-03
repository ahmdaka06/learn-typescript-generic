describe('no generic', () => {

    class Data {
        value: any;

        constructor(value: any) {
            this.value = value;
        }

    }

    it('should accept all values', () => {
    
        const data = new Data('Andika');
        // data.value = 123;

        console.info(data.value.toUpperCase());

    });

}) ;