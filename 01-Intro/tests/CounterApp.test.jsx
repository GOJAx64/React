import { render, screen, fireEvent } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Tests in <CounterApp/>', () => {  

    const initialValue = 0;

    test('should do match with the SnapShot', () => { 
        const { container } = render(<CounterApp value={ initialValue } />);
        expect(container).toMatchSnapshot();
    });

    test('should show the initial value as 100', () => { 
        render(<CounterApp value={ 100 } />);
        expect(screen.getByText(100)).toBeTruthy();
    });

    test('should increase with the +1 button', () => { 
        render(<CounterApp value={ initialValue} />);
        fireEvent.click( screen.getByText('+1') );
        expect( screen.getByText('1') ).toBeTruthy();
    });

    test('should decrease with the -1 button', () => {
        render( <CounterApp value={ initialValue } /> );
        fireEvent.click( screen.getByText('-1') );
        expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain('-1');
        //expect( screen.getByText('-1') ).toBeTruthy();
    });

    test('should works the reset button', () => {
        render( <CounterApp value={ 355 } /> );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('Reset') );
        //fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
        expect( screen.getByText( 355 ) ).toBeTruthy();
    });
});