import { render, screen, waitFor, getByText } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../../App';
import store from '../../state/store';
import { getProfileEndPoints } from '../../helpers/test/api';

const server = getProfileEndPoints();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('<Header> after load ', () => {
  
    test('Should show picture', async () => {
    render(
      <Provider store={store}>
        <App/>
      </Provider>
    );

    // Act
    const element = await screen.findByAltText("user1",{ exact:true });

    // Asert
    expect(element).toBeInTheDocument();
    expect(element).toHaveProperty('src','https://user1picture/');

    });

});


