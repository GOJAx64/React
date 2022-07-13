import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';

describe('Tests in 09-promesas', () => { 
    test('should  get a hero by ID', (done) => { //we must use this parameter 
        const id = 100;
        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toBeFalsy();
                done();
            })
            .catch( error => {
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            }); 
    });
 });