import { makeShort, getLinks } from './actions';
import { IShortLink } from 'src/interfaces/shortLink.interface';
import {
  createSlice,
  isFulfilled,
  isRejected,
  PayloadAction,
  AnyAction,
  isPending,
} from '@reduxjs/toolkit';

import { Order } from 'src/constants';
import { makeShortLink } from 'src/store/helpers/shortLink';

interface ShortLinkState {
  links: IShortLink[];
  isLoading: boolean;
  error: string | null;
  currentPage: number;
  itemsPerPage: number;
  order: 'asc' | 'desc' | null;
  orderBy: keyof IShortLink | null;
  search: string;
  selectedLink: string | null;
  isModalOpen: boolean;
}

const initialState: ShortLinkState = {
  links: [],
  isLoading: false,
  error: null,
  currentPage: 1,
  itemsPerPage: 10,
  order: null,
  orderBy: 'id',
  search: '',
  selectedLink: null,
  isModalOpen: false,
};

const shortLinksSlice = createSlice({
  name: 'shortLinks',
  initialState,
  reducers: {
    changeItemsPerPage(state, action: PayloadAction<number>) {
      state.itemsPerPage = action.payload;
    },
    changePage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setOrder(state, action: PayloadAction<Order>) {
      state.order = action.payload;
    },
    setOrderBy(state, action: PayloadAction<keyof IShortLink>) {
      state.orderBy = action.payload;
    },
    setSelectedLink(state, action: PayloadAction<string | null>) {
      state.selectedLink = action.payload;
    },
    changeModalOpen(state, action: PayloadAction<boolean>) {
      state.isModalOpen = action.payload;
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    resetSearch(state) {
      state.search = initialState.search;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        makeShort.fulfilled,
        (state, action: PayloadAction<IShortLink>) => {
          state.search = initialState.search;
          state.links.push(makeShortLink(action.payload));
        },
      )
      .addCase(
        getLinks.fulfilled,
        (state, action: PayloadAction<IShortLink[]>) => {
          state.search = initialState.search;
          state.links = action.payload.map(makeShortLink);
        },
      )
      .addMatcher(isPending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addMatcher(isRejected, (state, action: AnyAction) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addMatcher(isFulfilled, (state) => {
        state.error = null;
        state.isLoading = false;
      });
  },
});

export const {
  changeItemsPerPage,
  changePage,
  setOrder,
  setOrderBy,
  setSearch,
  resetSearch,
  setSelectedLink,
  changeModalOpen,
} = shortLinksSlice.actions;

export default shortLinksSlice.reducer;
