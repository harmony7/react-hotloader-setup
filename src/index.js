const myApp = {
    async start() {
        console.log("start");

        const loadHello = async () => {
            const testModule = await System.import("./test-module");
            return testModule.sayHello;
        };

        const ctx = { count: 0 };
        let helloFunc = await loadHello();

        if (module.hot) {
            module.hot.accept('./test-module', async () => {
                helloFunc = await loadHello();
            });
        }
        
        setInterval(() => {
            helloFunc(ctx);
        }, 2000);
    }
};

Object.assign(window, { myApp });
