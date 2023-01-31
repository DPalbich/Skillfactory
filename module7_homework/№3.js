function createEmptyObject() {
    return {};
}

const emptyObject = createEmptyObject();

console.log(Object.getPrototypeOf(emptyObject)); 