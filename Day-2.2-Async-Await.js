function Delay(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time)
    })
}

async function placeorder() {
    await Delay(2000)
    console.log("order is taken")
}
async function startProduction() {
    await Delay(2000)
    console.log("Prouction started")
}
async function printID() {
    await Delay(2000)
    console.log("ID printed")
}
async function productDescription() {
    await Delay(2000)
    console.log("Description")
}
async function productComplete() {
    await Delay(2000)
    console.log("order complete")
}



async function main() {

    console.log("order is now going to take")
    await placeorder();
    console.log("product in production...")
    await startProduction();
    console.log("ID printing started..")
    await printID();
    console.log("Product Description....")
    await productDescription();
    console.log("Now order is completion state....")
    await productComplete();

}
main()