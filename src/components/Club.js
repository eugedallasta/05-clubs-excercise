function Club(props) {

const itemMember = props.club.members.map((member, index) => {
  return (
    <li key={index}>
      {member} 
    </li>
  );
});

  return (
    <article>
      <h2>{props.club.name}</h2>
      <i className={props.club.fa}></i>
      <h4>Members</h4>
      <ul>
          {itemMember}    
      </ul>
    </article>
  );
}

export default Club;
