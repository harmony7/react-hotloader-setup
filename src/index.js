const wait1000Ms = () => {
    
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
    
};

const myApp = {
    async start() {
        console.log("start");
        await wait1000Ms();
        console.log("waited 1000ms");
    }
};

Object.assign(window, { myApp });
