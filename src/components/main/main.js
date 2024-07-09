import { Children } from 'react'
import ads from '../../asset/image/ADS.png'


const Main = (props) => {
    return(
        <div className="main items-center">
            <div className="main-container">
                <div className="main-ads main flex justify-between">
                    <img src={ads} className='max-h-full max-w-full'/>
                    <div className='main-ct w-full'>
                        <div className='main-content max-w-full h-full m-3'>
                            {props.children}
                        </div>
                    </div>
                    <img src={ads} className='max-h-full max-w-full'/>
                </div>
            </div>
        </div>
    )
}
export default Main