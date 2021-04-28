function City(props){

    return(<div>
        <div> {props.child2.map(Citys=> <div className="d-flex flex-wrap flexi">
            <img src={Citys.image} alt="img" />
            <p>  {Citys.name} </p>
            </div>
            )}
            
        </div>

    </div>)
}

export default City