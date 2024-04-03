export class GenericData<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    get(): T {
        return this.value;
    }

    set(value: T) {
        this.value = value;
    }
}

export class Entry<K, V> {
    constructor (public key: K, public value: V) {

    }
}

export class Triple<K, V, T> {
    constructor(public first: K, public second: V, public third: T) {

    }
}

export class SimpleGeneric<T = string> {
    private value?: T;

    setValue(value: T) {
        this.value = value;
    }

    getValue(): T | undefined{
        return this.value;
    }
}