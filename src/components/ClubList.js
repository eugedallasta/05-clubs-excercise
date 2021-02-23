import Club from "./Club";

function ClubList(props) {
    console.log(props.clubs);
    const item = props.clubs.map((clubItem, index) => {
        return (
            <li key={index}>
                <Club club={clubItem}/>
            </li>
    ) });
     
    
    return (
        <div>
            <ul>
                {item}
            </ul>
        </div>
    )
}

export default ClubList;