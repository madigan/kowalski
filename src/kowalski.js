const Vorpal = require('vorpal');

const { log, todo } = require('./journal');

module.exports = args => {
    const cli = new Vorpal();
    cli.delimiter("kowalski$").show();

    cli.command(`log <entryWords...>`)
        .option('-d --day', "Which day the entry is for")
        .option('-t --time', "The time the entry takes place at")
        .action(log);
    cli.command(`todo create <entryWords...>`)
            .option('-d --day', "Which day the entry is for")
            .option('-t --time', "The time the entry takes place at")
            .action(todo);
}
