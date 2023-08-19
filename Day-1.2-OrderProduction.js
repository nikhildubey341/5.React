const placeorder = (callback) => {
    setTimeout(() => {
        console.log("Order is Taken")
        callback();
    }, 2000);
};
const statProduction = (callback) => {
    setTimeout(() => {
        console.log("Order is placed")
        callback();
    }, 1000);
};
const printLinux = (callback) => {
    setTimeout(() => {
        console.log(" Linux")
        callback();
    }, 2000);
};
const printGitHub = (callback) => {
    setTimeout(() => {
        console.log(" GitHub")
        callback();
    }, 2000);
};
const printHTML = (callback) => {
    setTimeout(() => {
        console.log("HTML")
        callback();
    }, 2000);
};
const printCSS = (callback) => {
    setTimeout(() => {
        console.log("pass to CSS")
        callback();
    }, 2000);
};
const printJavaScript = (callback) => {
    setTimeout(() => {
        console.log("JavaScript")
        callback();
    }, 2000);
};
const printBootStrap = (callback) => {
    setTimeout(() => {
        console.log(" Bootstarp")
        callback();
    }, 2000);
};
const printReact = (callback) => {
    setTimeout(() => {
        console.log("React is started")
        callback();
    }, 2000);
};





console.log("order is now going to take");
placeorder(() => {
    console.log('pass to production');
    statProduction(() => {
        console.log('pass to Linux')
        printLinux(() => {
            console.log('pass to github')
            printGitHub(() => {
                console.log('pass to HTML')
                printHTML(() => {
                    console.log("pass to CSS")
                    printCSS(() => {
                        console.log('pass to JavaScript')
                        printJavaScript(() => {
                            console.log('pass to Bootsrtap')
                            printBootStrap(() => {
                                console.log('pass to React')
                                printReact(() => {
                                    console.log('paasing is ended and completed')
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})