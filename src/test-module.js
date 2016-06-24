export const sayHello = (ctx) => {
    ctx.count++;
    console.log(`hi ${ctx.count}`);
};