const user = {
  firstName: 'Harper',
  lastName: 'Perez'
}

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

function getGreeting(user) {
  if (user) {
    // if语句代码块使用 JSX，可以作变量、参数、还能做返回值
    return <h1>Hello, {formatName(user)}</h1>;
  }
  return <h1>Hello, Stranger</h1>
}

function GetGreeting() {
  return getGreeting(user);
}

export default GetGreeting;
