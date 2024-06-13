import React from 'react';
import { render, screen } from '@testing-library/react';
import { within } from '@testing-library/dom';
import PropertyListing from '../PropertyListing';
import { DUMMY_PROPERTY } from '../../../mocks';

describe('PropertyListing', () => {
    it('should render five property cards', async () => {
        render(<PropertyListing properties={Array(5).fill(DUMMY_PROPERTY)} />);
        const propertiesList = screen.getByRole('list');
        const propertyCards = await within(propertiesList).findAllByRole('listitem');
        expect(propertyCards).toHaveLength(5);
    });
});
