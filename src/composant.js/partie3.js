function Part(props){

    return(<div>
        <div> {props.child3.map(Desc=> <div className="d-flex flex-wrap flexi">
            <img src={Desc.image} alt="img" />
            <div className="my-3 ml-3">
            <p>  {Desc.name} <br></br> {Desc.desc} </p>
            </div>
            </div>
            )}
            
        </div>

    </div>)
}

export default Part