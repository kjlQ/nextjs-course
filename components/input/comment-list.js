import classes from "./comment-list.module.css";

function CommentList({ items }) {
  if (!items) return null;
  return (
    <ul className={classes.comments}>
      {items.map((item) => (
        <li>
          <p>{item.text}</p>
          <div>
            By <address>{item.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
