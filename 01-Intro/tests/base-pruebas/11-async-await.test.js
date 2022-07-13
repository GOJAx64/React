import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Tests in 11-async-await', () => {
    test('should return an error if we do not have an API Key or image URL if we have API KEY', async () => { 
        const url = await getImagen();
        expect(typeof url).toBe('string');
    });
});