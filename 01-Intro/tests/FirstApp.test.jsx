import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Tests in <FirstApp/>', () => { 
    
    test('Should do match with the snapshot', () => {
        const { container } = render(<FirstApp title={ 'Hola soy goku' } />);
        expect(container).toMatchSnapshot();
    });

    test('should show the title in  one H1', () => {  
        const title = 'Hola soy goku';
        const { container, getByText } = render(<FirstApp title={ title } />);
        expect(getByText(title)).toBeTruthy();

        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain(title);
    });
});