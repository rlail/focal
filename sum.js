const args = process.argv.slice(2);
const sum = args.reduce((total, arg) => total + parseInt(arg), 0);
console.log(sum);

