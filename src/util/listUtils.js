module.exports = {
    random: list => list[Math.floor(Math.random() * list.length)] || null,
    includesAll: things => list => (things || []).every(thing => list.includes(thing))
}