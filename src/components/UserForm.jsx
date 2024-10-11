import PropTypes from 'prop-types';

const UserForm = ({ username, setUsername, fetchUserDetails }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUserDetails();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Unesite GitHub ime"
        required
      />
      <button type="submit">Pretraži</button>
    </form>
  );
};

UserForm.propTypes = {
  username: PropTypes.string.isRequired,
  setUsername: PropTypes.func.isRequired,
  fetchUserDetails: PropTypes.func.isRequired,
};

export default UserForm;
