import UserInfo from './UserInfo';

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};

function formatDate(date) {
  return date.toLocaleDateString();
}

function Comment() {
  return (
    <div className="Comment">
      <UserInfo user={comment.author}/>
      <div className="Comment-text">
	{comment.text}
      </div>
      <div className="Comment-date">
	{formatDate(comment.date)}
      </div>
    </div>
  )
}

export default Comment;
