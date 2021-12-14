import { connect, ConnectedProps } from 'react-redux';
import { State } from '../../types/state';
import { AuthorizationStatus } from '../../const';
import UserAuth from './user-auth/user-auth';
import UserGuest from './user-guest/user-guest';

const mapStateToProps = ({ authStatus }: State) => ({
  authStatus,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function UserBlock({ authStatus }: PropsFromRedux): JSX.Element {
  return (
    <>
      {authStatus === AuthorizationStatus.Auth ? <UserAuth /> : <UserGuest />}
    </>
  );
}

export { UserBlock };
export default connector(UserBlock);
