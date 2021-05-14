const {random, includesAll } = require(`./listUtils`);

describe(`random`, () => {
    test(`returns an entry from the list`, () => {
        const given = ["eggs", "ham", "jam", "spam"];
        expect(given).toContain(random(given));
    });

    test(`returns "null" for empty list`, () => {
        expect(random([])).toBeNull();
    });
});

describe(`includesAll`, () => {
    test(`returns "true" when all items are included`, () => {
        expect(includesAll(["eggs", "ham"])(["eggs", "ham", "spam"])).toBeTruthy();
    });

    test(`returns "true" when no items are provided`, () => {
        expect(includesAll()(["frogs"])).toBeTruthy();
    });

    test(`returns "true" if the items array is empty`, () => {
        expect(includesAll([])(["spam"])).toBeTruthy();
    });

    test(`returns "false" if an item is missing`, () => {
        expect(includesAll(["eggs", "ham"])(["eggs", "pancakes"])).toBeFalsy();
    })
});
