import { Link } from "react-router-dom";
import "./species.scss";


const Species = () => {
  return (
    <div className="species">
      <div style={{ width: '100%', height: '100%', background: '#c1b8a4' }}>
<section className="parallax-containersp">
<div className="color2">
      <h1 className="color">Saving the Ypacaraí Ecosystem</h1>
      </div>
      <p className="color2">
        The Ypacaraí Lake is known for its vast ecosystem, fauna and flora are abundant on it. 
        However, with the recent conditions of the lake said ecosystem has been greatly affected. 
        These are some animal species living in the lake and surrounding areas are at risk.
      </p>
      <Link to="https://apps.mades.gov.py/siam/doc-area-protegida/archivo/137" style={{textAlign: 'left', fontSize: '20px', color: "#ff4500"}}>View More Species Affected</Link>
    </section>

    <section className="buffer"></section>

    <section className="parallax-containersp parallax-containersp2">
      <div className="card">
        <div className="card-img"></div>
        <h3 style={{color: 'black'}}>Corvina</h3>
        
      </div>
      <div className="card">
        <div className="card-img"></div>
        <h3 style={{color: 'black'}}>Mandi'i - Bagre</h3>
        
      </div>
      <div className="card">
        <div className="card-img"></div>
        <h3 style={{color: 'black'}}>River Stingray</h3>
        
      </div>
      <div className="card">
        <div className="card-img"></div>
        <h3 style={{color: 'black'}}>River Piranha</h3>
        
      </div>
      <div className="card">
        <div className="card-img"></div>
        <h3 style={{color: 'black'}}>Majorra</h3>
        
      </div>
    </section>

    <section className="buffer"></section>
    <section className="parallax-containersp parallax-containersp2">
      <div className="card">
        <div className="card-img2"></div>
        <h3 style={{color: 'black'}}>Capybara</h3>
        
      </div>
      <div className="card">
        <div className="card-img2"></div>
        <h3 style={{color: 'black'}}>Yetapa'i</h3>
        <p style={{color: "#ff4500"}}>
        ENDANGERED
      </p>
      </div>
      <div className="card">
        <div className="card-img2"></div>
        <h3 style={{color: 'black'}}>Chestnut Seedeater</h3>
        <p style={{color: "#ff4500"}}>
        VULNERABLE
      </p>
      </div>
      <div className="card">
        <div className="card-img2"></div>
        <h3 style={{color: 'black'}}>Hummingbird</h3>
        
      </div>
      <div className="card">
        <div className="card-img2"></div>
        <h3 style={{color: 'black'}}>Teju Hu</h3>
        
      </div>
    </section>

    <section className="buffer"></section>
    </div>
    </div>
  );
};

export default Species;
