describe('Tests in <DemoComponent/>', () => { 
    test('This test does not have to fail', () => {
        // A (Inicialización)
        const message1 = 'Hello World';
        // Act (Estímulo)
        const message2 = message1.trim();
        // Assert (Obeservar) we are waiting a determinate behaviour 
        expect(message1).toBe(message2);
    });
});
