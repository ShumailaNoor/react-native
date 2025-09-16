function delayFunction(seconds) {
    return new Promise(resolve => {
        setTimeout(resolve, seconds * 1000); 
    });
}
async function waitFunction() {
    
    await delayFunction(2);
    
    console.log('Waited 2 seconds');
}

waitFunction();