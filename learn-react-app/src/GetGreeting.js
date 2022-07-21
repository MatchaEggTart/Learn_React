/* JSX 也是一个表达式 , {可以传入参数，即在函数内，读取函数的参数} */

function formatName(userName) {
  return userName.firstName + ' ' + userName.lastName;
}

const user = {
  firstName: "John",
  lastName: "Ben"
};

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)} !</h1>
  }
  return <h1>Hello, Stranger.</h1>
}

function GetGreeting() {
  return (
    getGreeting(user)
  )
}

export default GetGreeting;
