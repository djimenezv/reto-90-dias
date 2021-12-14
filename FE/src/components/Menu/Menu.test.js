import React from 'react';
import { render, screen, waitFor, getByText, fireEvent } from '@testing-library/react';
import Menu from './Menu';
//import {fireEvent} from '@testing-library/svelte';

describe('<Menu>', () => {
  
    test('Should show open/close button', () => {
    render(<Menu/>);

    // Act
    const element = screen.getByRole("button");

    // Asert
    expect(element).toBeInTheDocument();

    });

    test('After click the button the menu should show options Mis Retos, Crear Reto, salir', async () => {
      render(<Menu/>);

      // Arrange
      const openCloseButton = screen.getByRole("button");
      
      // Act
      fireEvent.click(openCloseButton);
      const misRetorsItem = await screen.findByText('Mis Retos');
      const crearRetoItem = await screen.findByText('Crear Reto');
      const salirItem = await screen.findByText('Salir');

      // Assert
      expect(misRetorsItem).toBeInTheDocument();
      expect(crearRetoItem).toBeInTheDocument();
      expect(salirItem).toBeInTheDocument();

    });

});


