/* JSX 中 嵌入表达式，{嵌入表达式} */

function formatName(userName) {
  return user.firstName + ' ' + user.lastName;
};

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)} !
  </h1>
);

function FormatName() {
  return (
    element
  )
};

export default FormatName;
