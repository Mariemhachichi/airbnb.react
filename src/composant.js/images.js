
function Images(props){

    return(<div>
        <div> {props.child1.map(ville=> <div className="d-flex flex-wrap flexi">
            <img src={ville.image} alt="img" className="image" />
            <div className="my-3 ml-3">
            <p>  {ville.name} <br></br> {ville.temp} </p>
            </div>
            </div>
            )}
            
        </div>

    </div>)
}

export default Images
