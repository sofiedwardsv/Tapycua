import './bacteria.scss'
import { Link } from "react-router-dom"


const Bacteria = () => {

  
  return (
    <div className="bacteria">
      <h1>Bacteria</h1>
      <div style={{ width: '100%', height: '100%', background: '#c1b8a4' }}>
      <iframe className='pantalla' src="https://mrlasagna07-tapycuaic.hf.space"></iframe>
      </div>
      <a href="https://apps.mades.gov.py/siam/portal/denuncia-publica" target="_blank" style={{textAlign: 'left', fontSize: '20px'}}>Click Here to make an official report</a>
      
      <Link to="../species/" style={{textAlign: 'left', fontSize: '20px', color: "#ff4500"}}>Species Affected by the Lake Contamination</Link>
    </div>
  )
}

export default Bacteria