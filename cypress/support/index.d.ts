declare namespace Cypress {
    // interface example
    interface searchObject {
        'pigu.lt': string,
        '220.lv': string,
        'kaup24.ee': string,
        'sexShop': {
            'pigu.lt': string,
            '220.lv': string
        }
    }
    //////////
    
    interface Chainable {
        // commands example
        checkout(options: unknown): Chainable;
        openRandomProductFromLeaf(): Chainable;
        openSexShop(): Chainable;
        openHomePage(): Chainable;
        searchFor(searchPhrases: searchObject): Chainable;
        //////////
    }
}