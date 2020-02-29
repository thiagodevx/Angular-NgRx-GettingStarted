import * as fromRoot from '../../app.state';

export interface UserState {
  maskUserName: boolean;
}

export interface State extends fromRoot.State {
  users: UserState;
}

