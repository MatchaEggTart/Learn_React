const user = {
  firstName: 'Harper',
  lastName: 'Perez'
}

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

/*
const element = (
  <div>
    <h1>
      {formatName(user)}
    </h1>
    <h2>
      1 + 2 = {1 + 2}
    </h2>
  </div>
)
*/

function element() {
  return (
    <div>
      <h1>
	{formatName(user)}
      </h1>
      <h2>
	1 + 2 = {1 + 2}
      </h2>
    </div>    
  )
}

function FormatName() {
  // return element;
  return element();
}

export default FormatName;
