function List(props) {
    return (
        <div onClick={() => props.handleClick(props.id)}>
            <li>{props.name}</li>
        </div>
    );
}

export default List;
