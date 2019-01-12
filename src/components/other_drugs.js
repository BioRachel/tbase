import React, { Component } from 'react';
import Topic from './topic';

class OtherDrugs extends Component {

  render() {

    var overview = 
    <div className='flex-column' style={{ marginBottom: '100px' }}>

      <div className='flex-row'>
        <div className='large-text text-center' style={{ margin: '60px 0 50px 0', width: '600px' }}>The following drugs are not a core part of feminizing HRT</div>
      </div>

      <div className='flex-row'>
        <div className='med-text text-center' style={{ margin: '20px 0 0px 0', width: '600px' }}>But they are often prescribed alongside HRT to produce certain feminizing results</div>
      </div>

    </div>;

    var progesterone = 
    <div className='flex-column' style={{ marginBottom: '100px' }}>

      <div className='flex-row'>
        <div className='large-text text-center' style={{ margin: '60px 0 50px 0', width: '600px' }}>Progesterone</div>
      </div>

      <div className='flex-row'>
        <div className='small-text text-center' style={{ margin: '10px 0 20px 0', width: '600px' }}>Progesterone is present in the second half of the menstrual cycle. It has been reported to increase breast growth and improve energy in people who are on HRT</div>
      </div>

      <div className='flex-row' style={{ marginTop: '70px', justifyContent: 'space-around' }}>
        <div className='flex-tile'><i className="material-icons large" style={{ color: '#ff8f1f' }}>flag</i></div>
        <div className='flex-tile'><i className="material-icons large" style={{ color: '#f222fe' }}>colorize</i></div>
        <div className='flex-tile'><i className="material-icons large" style={{ color: '#ff2976' }}>healing</i></div>
        <div className='flex-tile'><i className="material-icons large" style={{ color: '#8d1eff' }}>priority_high</i></div>
      </div>

      <div className='flex-row' style={{ marginTop: '10px', justifyContent: 'space-around' }}>
        <div className='med-text text-center' style={{ width: '300px' }}>Purpose</div>
        <div className='med-text text-center' style={{ width: '300px' }}>Administration</div>
        <div className='med-text text-center' style={{ width: '300px' }}>Drugs & Dosage</div>
        <div className='med-text text-center' style={{ width: '300px' }}>Side Effects</div>
      </div>

      <div className='flex-row' style={{ marginTop: '10px', justifyContent: 'space-around' }}>
        <div className='small-text text-center' style={{ width: '300px' }}>Increased breast growth and improved energy </div>
        <div className='small-text text-center' style={{ width: '300px' }}>Soft tablet, Sub-dermal implant</div>
        <div className='small-text text-center' style={{ width: '300px' }}><b>Drugs</b><br></br> Prometrium (soft tablet)<br></br> implanon (implant)<br></br><br></br><b>Dose (tablet)</b><br></br>50mg/day<br></br>or<br></br>0mg/day for 2 weeks then 100mg/day for 2 weeks</div>
        <div className='small-text text-center' style={{ width: '300px' }}>May causes headaches and skin problems among other side effects. Can cause mood swings.</div>
      </div>



      <div className='flex-row' style={{ marginTop: '70px', justifyContent: 'space-around' }}>
        <div className='flex-tile'><i className="material-icons large" style={{ color: '#2bcbba' }}>assignment</i></div>
      </div>

      <div className='flex-row'>
        <div className='med-text text-center' style={{ margin: '10px 0 0 0', width: '600px' }}>Notes</div>
      </div>

      <div className='flex-row'>
        <div className='small-text text-center' style={{ margin: '10px 0 0 0', width: '600px' }}>The dosage can be consistent or cycled as above. During the first 2 weeks of a menstrual cycle, progesterone is absent, but appears for the second 2 weeks at an average level of 21nmol/L (7ng/mL). <br></br><br></br>Progesterone only has a moderate success rate as it seems to help some people and not others. Many people try progesterone, then stop taking it if they don't see changes or the side effects are particularly strong in their situation. </div>
      </div>

    </div>;

    var finasteride = 
    <div className='flex-column' style={{ marginBottom: '100px', padding: '0 50px' }}>

      <div className='flex-row'>
        <div className='large-text text-center' style={{ margin: '50px 0', width: '600px' }}>Finasteride</div>
      </div>

      <div className='flex-row'>
        <div className='small-text text-center' style={{ margin: '10px 0 20px 0', width: '600px' }}>Finasteride is predominantly prescribed for people with male-pattern baldness. Alongside estrogen, it can be relatively effective at restoring hair growth to the head</div>
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
        <div className='small-text text-center' style={{ width: '250px' }}>Hair regrowth (often for male pattern hair loss)</div>
        <div className='small-text text-center' style={{ width: '250px' }}>Oral Pill</div>
        <div className='small-text text-center' style={{ width: '250px' }}>Proscar: 1 x 5mg tablet/day<br></br>Propecia: 1 x 1mg tablet/day</div>
        <div className='small-text text-center' style={{ width: '250px' }}>Linked to anxiety and depression</div>
      </div>

      <div className='flex-row' style={{ marginTop: '70px', justifyContent: 'space-around' }}>
        <div className='flex-tile'><i className="material-icons large" style={{ color: '#2bcbba' }}>assignment</i></div>
      </div>

      <div className='flex-row'>
        <div className='med-text text-center' style={{ margin: '10px 0 0 0', width: '600px' }}>Notes</div>
      </div>

      <div className='flex-row'>
        <div className='small-text text-center' style={{ margin: '10px 0 0 0', width: '600px' }}>Finasteride also acts as an anti-androgen and so so may benefit the effects of your prescribed anti-androgen. <br></br><br></br> Finasteride has moderate effect in patients not on HRT. In most cases patients often experiencing some hair regrowth and resistance to losing further hair, while full hair regrowth is unlikely.</div>
        
      </div>

    </div>;

    var minoxidil = 
    <div className='flex-column' style={{ marginBottom: '100px' }}>

      <div className='flex-row'>
        <div className='large-text text-center' style={{ margin: '60px 0 50px 0', width: '600px' }}>Minoxidil</div>
      </div>

      <div className='flex-row'>
        <div className='small-text text-center' style={{ margin: '10px 0 20px 0', width: '600px' }}>Minoxidil is also commonly used to restore hair growth to the head</div>
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
        <div className='small-text text-center' style={{ width: '250px' }}>Hair regrowth (specifically for androgenic alopecia))</div>
        <div className='small-text text-center' style={{ width: '250px' }}>Topical foam/gels</div>
        <div className='small-text text-center' style={{ width: '250px' }}><b>Drugs</b><br></br>Rogaine<br></br>Many other generic brands available<br></br><br></br><b>Dosage</b><br></br>Varies according to specific brand</div>
        <div className='small-text text-center' style={{ width: '250px' }}>Generally well tolerated but can cause some irritation/itching/burning on the application site. <br></br><br></br><b>Can cause hair growth elsewhere on the body or make the hair loss worse in some rare cases</b></div>
      </div>


      <div className='flex-row' style={{ marginTop: '70px', justifyContent: 'space-around' }}>
        <div className='flex-tile'><i className="material-icons large" style={{ color: '#2bcbba' }}>assignment</i></div>
      </div>

      <div className='flex-row'>
        <div className='med-text text-center' style={{ margin: '10px 0 0 0', width: '600px' }}>Notes</div>
      </div>

      <div className='flex-row'>
        <div className='small-text text-center' style={{ margin: '10px 0 0 0', width: '600px' }}>May not be as effective as finasteride as approximately only 40-60% of patients notice hair regrowth.<br></br><br></br>Do not apply Minoxidil to other body parts as it can cause or increase hair growth in many areas of the body.</div>
      </div>

    </div>;


    var list = ['Overview', 'Progesterone', 'Finasteride', 'Minoxidil'];
    var sections = [overview, progesterone, finasteride, minoxidil];

    return (
      <div className='container'>
        <Topic name='Other Drugs' list={list} sections={sections}/>
      </div>
    )
  }

}

export default OtherDrugs;