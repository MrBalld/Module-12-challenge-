const cardStyle = {
    img:{
        width: '350px',
        height: '250px'
    }
  };

export default function Project(props) {
    return (
    <div className="card" style={cardStyle}>
        <h2>{props.name}</h2>
        <a href={props.repoLink}>
            <img src={props.imageLink} alt={props.altText} style={cardStyle}/>
        </a>
        <a href={props.deployLink}>Link to deployed aplication</a>
    </div>
    );
}
