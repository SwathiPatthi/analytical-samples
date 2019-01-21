/*
    Singleton Design Pattern Implementation
*/

const Singleton = (function() {
    let instance = null;

    const createInstance = () => {
        console.info('Instnace Created !!!')
        return Object.create({});
    }

    return {
        getInstnace: () => {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();

const singleton1 = Singleton.getInstnace();
const singleton2 = Singleton.getInstnace();
console.log(singleton1)
console.log(singleton2)