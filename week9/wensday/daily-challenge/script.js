const showPromise = async () => {
    try {
        var promise1 = await Promise.resolve(3);
        var promise2 = await Promise.resolve(32);
        var promise3 = await Promise.resolve('foo');
        var result = [promise1, promise2, promise3]
        return result
    } catch (error) {
        console.log(error);
    }
}
showPromise()
    .then(data => {
        console.log(data)
    })


