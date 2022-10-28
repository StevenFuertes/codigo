import sun from "../assets/icons/sun.png";

function SectionContainer(){

    return(
        <div className="section-1">
        <h4 className="title">devfinder</h4>
        <button className="btn-mode">LIGHT<img src={sun} alt="" width="15" /></button>
      </div>
    )
}

export default SectionContainer;