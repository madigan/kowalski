const fs = require('fs');
const moment = require('moment');

const today = () => moment().format("YYYY-MM-DD");
const safeDate = date => date || today();
const safeTime = time => time || moment().format("hh:mm:ss");
const BASE = "data/journal";

const writeToJournal = (day, entry) => fs.appendFileSync(`${BASE}/${safeDate(day)}.md`, entry);

const log = async ({day, time, entryWords}) => writeToJournal(day, `\n${safeTime(time)} LOG: ${entryWords.join(' ')}`);
const todo = async ({day, time, entryWords}) => writeToJournal(day, `${safeTime(time)} TODO [ ]: ${entryWords.join(' ')}`);
module.exports = {
    log,
    todo
}