import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from './user.state';

const usersFeatureSelector = createFeatureSelector<UserState>('users');

export const getUserMask = createSelector(usersFeatureSelector, state => state.maskUserName);
