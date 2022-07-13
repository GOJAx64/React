import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Tests in 08-imp-exp', () => {  
    
    test('getHeroById should return a hero by ID', () => { 
        const id = 1;
        const hero = getHeroeById(id);
        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
    });

    test('getHeroById should return undefined if hero by ID does not exists', () => { 
        const id = 100;
        const hero = getHeroeById(id);
        expect(hero).toBeFalsy();
    });

    test('getHeroesByOwner should return an array of heroes by Owner DC', () => { 
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toBe(3);
        expect(heroes).toEqual([
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            }
        ]);
        expect(heroes).toEqual( heroes.filter( (heroe) => heroe.owner === owner) );
    });

    test('getHeroesByOwner should return an array of heroes by Owner Marvel', () => { 
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toBe(2);
        expect(heroes).toEqual([
            {
                id: 2,
                name: 'Spiderman',
                owner: 'Marvel'
            },
            {
                id: 5,
                name: 'Wolverine',
                owner: 'Marvel'
            },
        ]);
        expect(heroes).toEqual( heroes.filter( (heroe) => heroe.owner === owner) );
    });
});