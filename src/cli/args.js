const parseArgs = () => {
    const args = process.argv.slice(2)

    args.forEach((arg, i, arr) => {
        if (arg.slice(0,2) === '--') {
            console.log(`${arg.slice(2)} is ${arr[i + 1]}`)
        }
    })
};

parseArgs();