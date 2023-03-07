const user = {
  firstName: 'Harper',
  lastName: 'Perez'
}

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const element = (
  <div className="FormatName">
    <h1>{formatName(user)}</h1>
    <span>1 + 2 = {1 + 2}</span>
  </div>
);

function FormatName() {
  return element;
}

export default FormatName;
