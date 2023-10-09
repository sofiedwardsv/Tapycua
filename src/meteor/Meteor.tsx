import './meteor.scss'


const Meteor = () => {


  return (
    <div className="meteor">
    
        <h1>Meteorogical Data</h1>
        <div style={{ width: '100%', height: '100%', background: '#c1b8a4' }}>
        <iframe className='pantalla'
  src="https://dashboard-spaceapps.streamlit.app/?embed=true"

></iframe>
      </div>
      
    </div>
  );
};

export default Meteor;
