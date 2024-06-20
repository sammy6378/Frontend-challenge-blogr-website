import deskt from '../images/deskt.svg'

function Section2(){
    return(
       
        <div className='sectionContent'>
            <div className="image">
                <img src={deskt} alt="" />
            </div>
            <div className="info">
            <div className="text-about">
                <h2>Free,Open,Simple</h2>
                <p>Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
            </div>
            <div className="text-about">
                <h2>Powerful tooling</h2>
                <p>Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.</p>
            </div>
            </div>
        </div>
       
    )
}

export default Section2;