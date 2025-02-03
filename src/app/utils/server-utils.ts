import 'server-only';

export const serverSideFunction = () => {
    console.log(`
        use multiple libraries, use enviorment variables, interact with a database, process confidentail information
    `)
    return 'server result'
}