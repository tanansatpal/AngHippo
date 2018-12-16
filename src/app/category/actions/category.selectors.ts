import { createSelector } from '@ngrx/store';
import { AppState } from '@app/app.state';
import { CategoryState } from '@app/category/reducers/category.state';

const getCategoryState = (state: AppState) => state.category;
const currentCategory = (state: CategoryState) => state.category;
const currentFilters = (state: CategoryState) => state.filters;
const currentSort = (state: CategoryState) => state.sort;
const currentPageSize = (state: CategoryState) => state.page_size;
export const getCurrentCategory = createSelector(getCategoryState, currentCategory);
export const getCategoryFilters = createSelector(getCategoryState, currentFilters);
export const getCategorySort = createSelector(getCategoryState, currentSort);
export const getCategoryPageSize = createSelector(getCategoryState, currentPageSize);
