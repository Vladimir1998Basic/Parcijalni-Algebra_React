import PropTypes from 'prop-types';
import RepoList from './RepoList';

const UserDetails = ({ user, repos, reset }) => {
  return (
    <div>
      <h2>Detalji korisnika</h2>
      <img src={user.avatar_url} alt={`${user.name}'s avatar`} width="100" />
      <p>
        <strong>Ime:</strong> {user.name || 'Nema imena'}
      </p>
      <p>
        <strong>Lokacija:</strong> {user.location || 'Nema lokacije'}
      </p>
      <p>
        <strong>Bio:</strong> {user.bio || 'Nema biosa'}
      </p>
      <h3>Repozitoriji:</h3>
      <RepoList repos={repos} />
      <button onClick={reset}>Reset</button>
    </div>
  );
};

UserDetails.propTypes = {
  user: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
  reset: PropTypes.func.isRequired,
};

export default UserDetails;
