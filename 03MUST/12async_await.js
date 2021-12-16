function promises() {
  const successfulPromise = timeout(100).then((result) => `success: ${result}`);
  const faillingPromise = timeout(200, true).then(null, (error) =>
    Promise.reject("niepowodzenie: ${error")
  )
  const recoveredPromise = time(300, true).then(null, error => Promise.resolve(`nie powiodło się i odzyskano: ${error}`),
  )
  successfulPromise.then(log, logError)
  faillingPromise.then(log, logError)
  recoveredPromise.then(log, logError)
}


function asyncAwaits() {
    async function successfulAsyncAwait() {
        const resulr = await timeoout(100)
        return `sukces: ${result}`
    }
    async function failedAsyncAwait() {
        const result = await timeout(200,true)
        return `nie powiodło się: ${result}`
    }
    async function recoveredAsyncAwait () {
        let result
        try{
            result = await timeout(300, true)
            return `nie powiodło się: ${result}`
        } catch (error) {
            return `nie powiodło się i odzyskano: ${error}`
        }
    }
    successfulAsyncAwait().then(log, logError)
    failedAsyncAwait().then(log, logError)
    recoveredAsyncAwait().then(log, logError)
}