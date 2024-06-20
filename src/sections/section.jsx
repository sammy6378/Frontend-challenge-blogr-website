import phones from '../images/phones.svg'
import circle from '../images/circle.svg'
function Section(){
    return(
        <>
    <div className="feature" style={{backgroundImage:{circle}}}>
    <div className="imgs">
        <img src={phones} alt="" />
    </div>
    <div className="blog">
    <h2>State of the Art Infrastructure</h2>
    <p>With reliability and speed in mind,worldwide data centers provide the backbone for utra-fast connectivity.This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
    </div>
</div>
        </>
    )
}

export default Section;