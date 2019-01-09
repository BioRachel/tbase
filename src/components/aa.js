import React, { Component } from 'react';
import Topic from './topic';
import spironolactone from '../images/spironolactone.png';
import cyproterone from '../images/Cyproterone.png';
import icon_2 from '../images/2_icon_spiro.png';
import estradiol_gray from '../images/estradiol_gray.png';
import male from '../images/male.png';
import pill from '../images/pill.png'

class AA extends Component {

  render() {
    var overview = 
    <div className='flex-column' style={{ paddingBottom: '60px' }}>

      <div className='flex-row'>
        <div className='large-text text-center' style={{ margin: '60px 0 80px 0', width: '500px' }}>There are two main components of feminizing HRT</div>
      </div>

      <div className='flex-row'>
        <div className='flex-tile'><img src={icon_2} alt='effects' className='image' style={{width: '50px', margin: '0 0 20px 0'}}></img></div>
      </div>
      
      <div className='flex-row'>
        <div className='flex-tile parallelogram' style={{ backgroundColor: 'lightgrey' }}></div>
        <div className='flex-tile parallelogram-rev'></div>
      </div>
      
      
      <div className='flex-row'>

        <div className='flex-row' style={{ margin: '40px 20px' }}>
          <div className='flex-tile icon-chem'>
            <img src={estradiol_gray} alt='effects' className='image'></img>
          </div>
          <div className='flex-tile'>
            <div className='flex-row'>
              <div className='arrow' style={{ backgroundColor: 'lightgrey' }}></div>
              <div className='med-text' style={{ width: '200px' }}>
                <span style={{color: 'lightgrey', fontWeight: 700}}>Estrogen</span> 
                <br></br> 
                Raises blood estrogen
              </div>
            </div>
          </div>
        </div>

        <div className='flex-row' style={{ margin: '40px 0px' }}>
          <div className='flex-tile icon-chem'>
            <img src={spironolactone} alt='effects' className='image'></img>
          </div>
          <div className='flex-tile'>
            <div className='flex-row'>
              <div className='arrow-down' style={{ backgroundColor: '#2bcbba', marginLeft: '10px' }}></div>
              <div className='med-text' style={{ width: '200px' }}>
                <span style={{color: '#2bcbba', fontWeight: 700}}>Anti-androgens</span> 
                <br></br> 
                Reduce testosterone
              </div>
            </div>
          </div>
        </div>
      
      </div>
      
      <div className='container flex-row med-text text-center' style={{width: '500px'}}>
        <p>For those wishing to transition, these drugs are used to <span style={{color: 'lightgrey'}}>elevate</span> estrogen and <span style={{color: '#2bcbba'}}>lower</span> testosterone to average female levels.</p>
      </div> 

    </div>;


    var effects = 
    <div className='flex-column' style={{ paddingBottom: '60px' }}>

      <div className='flex-row'>
        <div className='large-text text-center' style={{ margin: '30px 0 50px 0', width: '500px' }}>Anti-androgens can prevent or reverse some male secondary sex characteristics</div>
      </div>

      <div className='flex-row'>
        <div className='flex-column'>
          <img src={male} alt='effects' className='image' style={{ height: '400px', marginRight: '50px' }}></img>
        </div>
        <table style={{ width: '600px', margin: '20px 0 10px 0' }}>
          <thead>
            <tr>
                <th></th>
                <th className='text-center'>Time to maximum effect</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ color: '#8d1eff' }}><b>Facial/body hair thinning</b></td>
              <td className='text-center'>3 years</td>
            </tr>

            <tr>
              <td style={{ color: '#ff8f1f' }}><b>Decreased muscle mass</b></td>
              <td className='text-center'>1 - 2 years</td>
            </tr>

            <tr>
              <td>Fewer/infrequent erections</td>
              <td className='text-center'>3 - 6 months</td>
            </tr>

            <tr>
              <td>Smaller prostate, testes</td>
              <td className='text-center'></td>
            </tr>

            <tr>
              <td>Reduced sperm count and quality</td>
              <td className='text-center'></td>
            </tr>

            <tr>
              <td>Possible infertility</td>
              <td className='text-center'></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>;


    var blood_levels = 
    <div className='flex-column' style={{ marginBottom: '100px' }}>

      <div className='flex-row'>
        <div className='large-text text-center' style={{ margin: '60px 0 50px 0', width: '600px' }}>If you wish to medically transition, the goal is to reduce testosterone to female range</div>
      </div>

      <div className='flex-row'>
        <div className='small-text text-center' style={{ margin: '0 0 50px 0', width: '600px' }}>This is done by taking a consistant dose of an anti-androgen.</div>
      </div>

      <div className='flex-row'>
        <table style={{ width: '300px', margin: '0 0 10px 0' }}>
          <thead>
            <tr>
                <th colSpan="2" className='text-center'>Target tesosterone levels</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='text-center'>nmol/L</td>
              <td className='text-center'>pg/mL</td>
            </tr>
            <tr>
              <td className='text-center'>0.25 - 2.00</td>
              <td className='text-center'>8-60</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>;


    var drugs = 
    <div className='flex-column' style={{ marginBottom: '80px' }}>

      <div className='flex-row'>
        <div className='large-text text-center' style={{ margin: '60px 0 80px 0', width: '500px' }}>There are 2 anti-androgen drugs available</div>
      </div>


      <div className='flex-row'>
        <div className='flex-row' style={{ margin: '20px 0', width: '70%' }}>
          <div className='flex-column' style={{ flex: 1, margin: '0 15px' }}>
            <img src={spironolactone} alt='effects' className='image' style={{ width: '150px' }}></img>
            <div className='title-small'>Spironolactone</div>
          </div>
          <div className='flex-column' style={{ flex: 1, margin: '0 15px' }}>
            <img src={cyproterone} alt='effects' className='image' style={{ width: '150px' }}></img>
            <div className='title-small'>Cyproterone</div>
          </div>
        </div>  
      </div>

      <div className='flex-row'>
        <div className='flex-row' style={{ width: '70%' }}>
          <div className='flex-column' style={{ flex: 1, margin: '0 15px', justifyContent: 'start' }}>
            <div className='text-center flex-tile'>Available as</div>
            <img src={pill} alt='effects' className='image' style={{ width: '35px', marginBottom: '60px' }}></img>
            <div className='small-text text-center flex-tile top20'>Sold as Aldactone, CaroSpir</div>
            <div className='small-text text-center flex-tile top20'>+ Most commonly used anti-androgen</div>
            <div className='small-text text-center flex-tile top20'>+ Can lower blood pressure</div>
            <div className='small-text text-center flex-tile top20'>- Has diuretic effect - potassium levels must be monitored, may cause the patient to drink lots of water and crave salt</div>
          </div>
          <div className='flex-column' style={{ flex: 1, margin: '0 15px', justifyContent: 'start' }}>
            <div className='text-center flex-tile'>Available as</div>
            <img src={pill} alt='effects' className='image' style={{ width: '35px', marginBottom: '60px' }}></img>
            <div className='small-text text-center flex-tile top20'>Sold as Androcur, Cyprostat</div>
            <div className='small-text text-center flex-tile top20'>+ Very effective at reducing testosterone</div>
            <div className='small-text text-center flex-tile top20'>- Not widely available in USA</div>
            <div className='small-text text-center flex-tile top20'>- Has been linked to depression</div>
            <div className='small-text text-center flex-tile top20'>- Toxic to liver at very high dose</div>
          </div>
        </div>
      </div>

    </div>;

    var dosage = 
    <div className='flex-column' style={{ paddingBottom: '60px' }}>

      <div className='flex-row'>
        <div className='large-text text-center' style={{ margin: '30px 0 100px 0', width: '500px' }}>Dosage needed varies from person to person</div>
      </div>

      <div className='flex-row' style={{ marginBottom: '40px' }}>
        <div className='flex-column'>
          <div className='flex-row'><i className="material-icons large" style={{ color: '#ff8f1f' }}>assignment</i></div>
          <div className='med-text text-center' style={{ margin: '30px 0 80px 0', width: '480px' }}>The only way to accurately know what your dosage should be is by taking blood tests</div>
        </div>
      </div>

      <div className='flex-row'>

        <div className='flex-column' style={{ justifyContent: 'start', maxWidth: '220px', margin: '0px 10px' }}>
          <div className='flex-row'><i className="material-icons medium" style={{ color: '#8d1eff' }}>build</i></div>
          <div className='med-text text-center' style={{ margin: '30px 0 50px 0' }}>A blood test is taken, then your doctor will adjust your dosage based on the results</div>
        </div>

        <div className='flex-column' style={{ justifyContent: 'start', maxWidth: '220px', margin: '0px 10px' }}>
          <div className='flex-row'><i className="material-icons medium" style={{ color: '#f222fe' }}>access_time</i></div>
          <div className='med-text text-center' style={{ margin: '30px 0 50px 0' }}>Blood tests should be taken half-way between doses so that levels shown are not disproportionally high or low</div>
        </div>

        <div className='flex-column' style={{ justifyContent: 'start', maxWidth: '220px', margin: '0px 10px' }}>
          <div className='flex-row'><i className="material-icons medium" style={{ color: '#ff8f1f' }}>priority_high</i></div>
          <div className='med-text text-center' style={{ margin: '30px 0 50px 0' }}>Someone who is small may need only ¼ or ½ of someone who is larger to achieve the same blood levels. </div>
        </div>

        <div className='flex-column' style={{ justifyContent: 'start', maxWidth: '220px', margin: '0px 10px' }}>
          <div className='flex-row'><i className="material-icons medium" style={{ color: '#ff2976' }}>trending_down</i></div>
          <div className='med-text text-center' style={{ margin: '30px 0 50px 0' }}>Try to achieve your desired levels using the smallest, most stable dose of estradiol to avoid possible side effects.</div>
        </div>

      </div>

      <div className='flex-row'>
        <div className='small-text text-center' style={{ margin: '20px 0 50px 0', width: '500px' }}>This being said, typical starting doses are as follows:</div>
      </div>

      <div className='flex-row'>
        <table style={{ width: '400px', margin: '0 0 10px 0' }}>
          <tbody>
            <tr>
              <td className='text-center'><b>Spironolactone</b></td>
              <td className='text-center'>50 - 200mg/day</td>
            </tr>
            <tr>
              <td className='text-center'><b>Cyproterone</b></td>
              <td className='text-center'>25 - 50mg/day</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>;

    var pick = 
    <div className='flex-column' style={{ padding: '0 40px 60px 40px' }}>

      <div className='flex-row'>
        <div className='large-text text-center' style={{ margin: '30px 0 70px 0', width: '600px' }}>Pick a drug which makes you feel good and achieves your goals</div>
      </div>

      <div className='flex-row' style={{ justifyContent: 'space-around', margin: '0 0 30px 0' }}>
        <div className='flex-tile'><i className='material-icons large' style={{ color: '#ff8f1f' }}>insert_emoticon</i></div>
        <div className='flex-tile'><i className='material-icons large' style={{ color: '#8d1eff' }}>location_searching</i></div>
      </div>

      <div className='flex-row' style={{ justifyContent: 'space-around' }}>
        <div className='flex-column' style={{ justifyContent: 'start', width: '320px' }}>
          <div className='med-text text-center'>Feeling good</div>
          <div className='small-text text-center' style={{ margin: '20px 0' }}>Due to possible hepatotoxicity and depression factors of cyproterone, it may be a good idea to start with spironolactone.</div>
          <div className='small-text text-center' style={{ margin: '0 0 50px 0' }}>If you are having issues with the diuretic effect of spironolactone, talk to your doctor about switching to cyproterone as it doesn't have these side effects.</div>
        </div>

        <div className='flex-column' style={{ justifyContent: 'start', width: '320px' }}>
          <div className='med-text text-center'>Target levels</div>
          <div className='small-text text-center' style={{ margin: '20px 0' }}>Cyproterone is very potent for most people and can reduce testosterone very effectively.</div>
          <div className='small-text text-center' style={{ margin: '0 0 50px 0' }}>If you are on spironolactone and your blood levels aren't quite where you want them to be, you may want to talk to your doctor about switching to cyproterone.</div>
        </div>
      </div>
    </div>;

    var list = ['Overview', 'Effects', 'Blood Levels', 'Drugs', 'Dosage', 'How to Pick'];
    var sections = [overview, effects, blood_levels, drugs, dosage, pick];

    return (
      <Topic name='Anti-androgen' list={list} sections={sections} />
    )
  }

  

  

}

export default AA;


