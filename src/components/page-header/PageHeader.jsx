/* eslint-disable react/prop-types */
import './page-header.scss'

import bg from '../../assets/poster-bg.jpg'


const PageHeader = props => {
  return (
    <>
    <div className='page-header' style={{ backgroundImage: `url(${bg})` }}>
        <h2>{props.children}</h2>
    </div>
    <div className="overlay"></div>
    </>
  )
}

export default PageHeader