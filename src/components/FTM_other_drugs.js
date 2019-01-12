import React, { Component } from 'react';
import Topic from './topic';

class OtherDrugsFTM extends Component {

  render() {

    var overview = 
    <div className='flex-column' style={{ marginBottom: '100px' }}>

      <div className='flex-row'>
        <div className='large-text text-center' style={{ margin: '60px 0 50px 0', width: '600px' }}>Overview</div>
      </div>

    </div>;


    var progestagen = 
    <div className='flex-column' style={{ marginBottom: '100px' }}>

      <div className='flex-row'>
        <div className='large-text text-center' style={{ margin: '60px 0 50px 0', width: '600px' }}>Progestagen</div>
      </div>

    </div>;

    

    var minoxidil = 
    <div className='flex-column' style={{ marginBottom: '100px' }}>

      <div className='flex-row'>
        <div className='large-text text-center' style={{ margin: '60px 0 50px 0', width: '600px' }}>Minoxidil</div>
      </div>

      <div className='flex-row'>
        <div className='small-text text-center' style={{ margin: '10px 0 20px 0', width: '600px' }}>Minoxidil is also commonly used to encourage facial hair growth, especially beard growth.</div>
      </div>

      <div className='flex-row' style={{ marginTop: '70px', justifyContent: 'space-around' }}>
        <div className='flex-tile'><i className="material-icons large" style={{ color: '#ff8f1f' }}>flag</i></div>
        <div className='flex-tile'><i className="material-icons large" style={{ color: '#f222fe' }}>colorize</i></div>
        <div className='flex-tile'><i className="material-icons large" style={{ color: '#ff2976' }}>healing</i></div>
        <div className='flex-tile'><i className="material-icons large" style={{ color: '#8d1eff' }}>priority_high</i></div>
      </div>

      <div className='flex-row' style={{ marginTop: '10px', justifyContent: 'space-around' }}>
        <div className='med-text text-center' style={{ width: '250px' }}>Purpose</div>
        <div className='med-text text-center' style={{ width: '250px' }}>Administration</div>
        <div className='med-text text-center' style={{ width: '250px' }}>Drugs & Dosage</div>
        <div className='med-text text-center' style={{ width: '250px' }}>Side Effects</div>
      </div>

      <div className='flex-row' style={{ marginTop: '10px', justifyContent: 'space-around' }}>
        <div className='small-text text-center' style={{ width: '250px' }}>Facial hair growth</div>
        <div className='small-text text-center' style={{ width: '250px' }}>Topical foam/gels</div>
        <div className='small-text text-center' style={{ width: '250px' }}><b>Drugs</b><br></br>Rogaine<br></br>Many other generic brands available<br></br><br></br><b>Dosage</b><br></br>Varies according to specific brand</div>
        <div className='small-text text-center' style={{ width: '250px' }}>Generally well tolerated but can cause some irritation/itching/burning on the application site.</div>
      </div>


      <div className='flex-row' style={{ marginTop: '70px', justifyContent: 'space-around' }}>
        <div className='flex-tile'><i className="material-icons large" style={{ color: '#2bcbba' }}>assignment</i></div>
      </div>

      <div className='flex-row'>
        <div className='med-text text-center' style={{ margin: '10px 0 0 0', width: '600px' }}>Notes</div>
      </div>

      <div className='flex-row'>
        <div className='small-text text-center' style={{ margin: '10px 0 0 0', width: '600px' }}>-</div>
      </div>

    </div>;
    
    var list = ['Overview', 'Progestagen', 'Minoxidil'];
    var sections = [overview, progestagen, minoxidil];

    return (
      <div className='container'>
        <Topic name='Other Drugs' list={list} sections={sections}/>
      </div>
    );
  };
};

export default OtherDrugsFTM;