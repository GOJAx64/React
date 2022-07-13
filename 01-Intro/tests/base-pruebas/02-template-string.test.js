import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('Test in 02-template-string', () => { 
    
    test('getSaludo() should return "Hola Alberto"', () => { 
        const name = 'Alberto';
        const message = getSaludo(name);
        expect(message).toBe(`Hola ${name}`);
    });

 });