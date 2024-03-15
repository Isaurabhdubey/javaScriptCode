const execSync = require('child_process').execSync,
arg = process.argv[2];
console.log("running "+arg);

execSync('ts-node ' + arg, {stdio:[0, 1, 2]});