import { createSelector } from 'reselect';

export const getDataSelector = state => state.data.data;

export default createSelector([getDataSelector]);
