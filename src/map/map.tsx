import { Link } from 'react-router-dom'
import './map.scss'



const Map = () => {

  
  return (
    <div className="bacteria">
      <h1>Interactive Map</h1>
      <div style={{ width: '100%', height: '100%', background: '#c1b8a4' }}>
      <iframe className='pantalla' title="Ypacarai Lake" src="//www.arcgis.com/apps/Embed/index.html?webmap=60f19bb8db264002934c5a07a176d93a&extent=-57.5499,-25.4287,-57.1067,-25.2012&zoom=true&previewImage=false&scale=true&disable_scroll=true&theme=light"></iframe>
   <Link to="https://drive.google.com/drive/folders/1dnTVn99TXsxkLGYEfRAwljoQoPz0k67W?usp=share_link" target="_blank"style={{textAlign: 'left', fontSize: '20px', color: "white"}}>Find our products made from Landsat 8 data here</Link>
      </div>
    </div>
  )
}

export default Map
