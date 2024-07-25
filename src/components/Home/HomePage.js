import videoHome from '../../assets/hero.mp4'
import videoHome1 from '../../assets/hero.webm'

const HomePage = (props) => {
    return (
        <div className='app-content'>
            <video autoPlay muted loop>
                <source data-testid="currentWebmVideo" src={videoHome1} type="video/webm"/>
                    <source data-testid="currentDefaultVideo" src={videoHome}  type="video/mp4"/>
            </video>

            <div className='homepage-content'>
                <div className='title-1'>Make forms <br></br>worth filling out</div>
                <div className='title-2'><span>Get more data—like signups, feedback, and anything else—with forms designed to be <strong>refreshingly different</strong>.</span></div>
                <div className='title-3'>
                    <button className='btn-get'>Get started—it's free</button>
                </div>
            </div>
        </div>
    )
}

export default HomePage