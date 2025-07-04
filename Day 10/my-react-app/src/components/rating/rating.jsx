function Rating(props){
    let stars = props.noofstars;
        let starArray = [];
        for (let i = 0; i < stars; i++) {
          starArray.push(<i className="fa-solid fa-star" key={i} style={{ color: "gold" }}></i>);
        }
    return(
        <div>
            {starArray}
        </div>
        
    )
}

export default Rating;