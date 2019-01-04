import React, { Component } from 'react';
import HormoneNav from './hormonenav';
import Topic from './topic';
import chemical from '../images/chemical.png';
import icon_2 from '../images/2_icon.png';
import female from '../images/female2.png';
import estradiol from '../images/estradiol.png';
import estradiol2 from '../images/estradiol2.png';
import estradiol_valerate from '../images/estradiol_valerate.png';
import estradiol_cypionate from '../images/estradiol_cypionate.png';
import spironolactone from '../images/spironolactone.png';
import patch from '../images/patch.png';
import pill from '../images/pill.png';
import syringe from '../images/syringe.png';
import gel from '../images/gel.png';
import estradiol_av from '../images/estradiol_availability.png';
import valerate_av from '../images/valerate_availability.png';
import cypionate_av from '../images/cypionate_availability.png';
import estradiol_levels from '../images/estradiol_cycle.png';

class Hormones extends Component {

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
        <div className='flex-tile parallelogram'></div>
        <div className='flex-tile parallelogram-rev'></div>
      </div>
      
      
      <div className='flex-row'>

        <div className='flex-row' style={{ margin: '40px 20px' }}>
          <div className='flex-tile icon-chem'>
            <img src={estradiol} alt='effects' className='image'></img>
          </div>
          <div className='flex-tile'>
            <div className='flex-row'>
              <div className='arrow' style={{ backgroundColor: '#fc54ff' }}></div>
              <div className='med-text' style={{ width: '200px' }}>
                <span style={{color: '#fc54ff', fontWeight: 700}}>Estrogen</span> 
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
        <p>For those wishing to transition, these drugs are used to <span style={{color: '#fc54ff'}}>elevate</span> estrogen and <span style={{color: '#2bcbba'}}>lower</span> testosterone to average female levels.</p>
      </div> 

    </div>;


    var effects = 
    <div className='flex-column' style={{ padding: '60px 0' }}>

      <div className='flex-row'>
        <div className='large-text text-center' style={{ margin: '0 0 50px 0', width: '500px' }}>Estrogen feminizes the body, but changes take time</div>
      </div>

      <div className='flex-row'>
        <div className='flex-column'>
          <img src={female} alt='effects' className='image' style={{ height: '400px', marginRight: '50px' }}></img>
        </div>

        <table style={{ margin: '0 0 0 40px', width: '500px' }}>
        <thead>
          <tr>
              <th></th>
              <th className='text-center'>Time to maximum effect</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td style={{ color: '#ffd31a' }}><b>Hair regrowth (baldness related)</b></td>
            <td className='text-center'>1 - 2 years</td>
          </tr>

          <tr>
            <td style={{ color: '#ff8f1f' }}><b>Mood changes</b></td>
            <td className='text-center'>Unknown</td>
          </tr>

          <tr>
            <td style={{ color: '#8d1eff' }}><b>Skin softening</b></td>
            <td className='text-center'>6 - 12 months</td>
          </tr>

          <tr>
            <td style={{ color: '#f222fe' }}><b>Fat redistribution</b></td>
            <td className='text-center'>2 - 5 years</td>
          </tr>

          <tr>
            <td style={{ color: '#ff2976' }}><b>Breast growth</b></td>
            <td className='text-center'>1 - 3 years</td>
          </tr>

          <tr>
            <td>Facial/body hair thinning</td>
            <td className='text-center'>3 years</td>
          </tr>

          <tr>
            <td>Decreased skin oilyness and acne</td>
            <td className='text-center'>6 - 12 months</td>
          </tr>

          <tr>
            <td>Decreased muscle mass</td>
            <td className='text-center'>1 - 2 years</td>
          </tr>

          <tr>
            <td>Decreased sex drive</td>
            <td className='text-center'>3 - 6 months</td>
          </tr>

          <tr>
            <td>Fewer/infrequent erections</td>
            <td className='text-center'>3 - 6 months</td>
          </tr>

        </tbody>
      </table>

      </div>
    </div>;


    var administration = 
    <div className='flex-column' style={{ margin: '20px 0 50px 0' }}>

      <div className='flex-row'>
        <div className='large-text text-center' style={{ margin: '60px 0 80px 0', width: '500px' }}>Estrogen can be given in any of the following forms. Each have advantages and disadvantages.</div>
      </div>

      <div className='flex-row' style={{ marginBottom: '30px' }}>
        <div className='flex-column' style={{ flex: 1, margin: '0 15px' }}>
          <img src={pill} alt='effects' className='image' style={{ width: '125px' }}></img>
          <div className='title-small'>Pill</div>
        </div>
        <div className='flex-column' style={{ flex: 1, margin: '0 15px' }}>
          <img src={syringe} alt='effects' className='image' style={{ width: '125px' }}></img>
          <div className='title-small'>Injection</div>
        </div>
        <div className='flex-column' style={{ flex: 1, margin: '0 15px' }}>
          <img src={patch} alt='effects' className='image' style={{ width: '125px' }}></img>
          <div className='title-small'>Patch</div>
        </div>
        <div className='flex-column' style={{ flex: 1, margin: '0 15px' }}>
          <img src={gel} alt='effects' className='image' style={{ width: '125px' }}></img>
          <div className='title-small'>Gel</div>
        </div>
      </div>

      <div className='flex-row'>

        <div className='flex-tile' style={{ flex: 1, margin: '0 15px', justifyContent: 'start', borderColor: '#f222fe' }}>
          <div className='text-center flex-tile bot-5'>Dosage</div>
          <div className='small-text text-center flex-tile bot30'>Taken everyday with dosage spread out</div>
          <div className='text-center flex-tile bot-5'>Availability</div>
          <div className='small-text text-center flex-tile bot30'>High</div>
          <div className='text-center flex-tile bot-5'>Cost</div>
          <div className='small-text text-center flex-tile bot30'>Low</div>
          <div className='text-center flex-tile bot-5'>Notes</div>
          <div className='small-text text-center flex-tile bot30'>Split up pills during the day to achieve the most stable levels.</div>
          <div className='small-text text-center flex-tile bot30'> Oral tablets may have higher risk of thromboembolism compared to other routes.</div>
        </div>

        <div className='flex-tile' style={{ flex: 1, margin: '0 15px', justifyContent: 'start', borderColor: '#ff2976' }}>
          <div className='text-center flex-tile bot-5'>Dosage</div>
          <div className='small-text text-center flex-tile bot30'>Injection once every 1 – 2 weeks depending on drug</div>
          <div className='text-center flex-tile bot-5'>Availability</div>
          <div className='small-text text-center flex-tile bot30'>Moderate</div>
          <div className='text-center flex-tile bot-5'>Cost</div>
          <div className='small-text text-center flex-tile bot30'>Low</div>
          <div className='text-center flex-tile bot-5'>Notes</div>
          <div className='small-text text-center flex-tile bot30'>Easiest to remember, levels are very predictable and stable</div>
         
        </div>

        <div className='flex-tile' style={{ flex: 1, margin: '0 15px', justifyContent: 'start', borderColor: '#8d1eff' }}>
          <div className='text-center flex-tile bot-5'>Dosage</div>
          <div className='small-text text-center flex-tile bot30'>Replace patch every few days</div>
          <div className='text-center flex-tile bot-5'>Availability</div>
          <div className='small-text text-center flex-tile bot30'>Low</div>
          <div className='text-center flex-tile bot-5'>Cost</div>
          <div className='small-text text-center flex-tile bot30'>Moderate</div>
          <div className='text-center flex-tile bot-5'>Notes</div>
          <div className='small-text text-center flex-tile bot30'>Levels are very stable as estradiol is consistently released over time.</div>
          <div className='small-text text-center flex-tile bot30'>If you experience indigestion side effects from pills, this could be a good replacement</div>
        
        </div>

        <div className='flex-tile' style={{ flex: 1, margin: '0 15px', justifyContent: 'start', borderColor: '#ff8f1f' }}>
          <div className='text-center flex-tile bot-5'>Dosage</div>
          <div className='small-text text-center flex-tile bot30'>Applied once a day after showering </div>
          <div className='text-center flex-tile bot-5'>Availability</div>
          <div className='small-text text-center flex-tile bot30'>Low</div>
          <div className='text-center flex-tile bot-5'>Cost</div>
          <div className='small-text text-center flex-tile bot30'>High?</div>
          <div className='text-center flex-tile bot-5'>Notes</div>
          <div className='small-text text-center flex-tile bot30'>Can be tricky to get levels right at the start</div>
          <div className='small-text text-center flex-tile bot30'>If you experience indigestion side effects from pills, gel could be a good replacement option</div>
        </div>

      </div>

    </div>;


    var ETH = 
    <div className='flex-column'>

      <div className='flex-row'>
        <div className='large-text text-center' style={{ margin: '60px 0 80px 0', width: '500px' }}>There are <span style={{color: '#fc54ff', fontWeight: 700}}>3</span> estrogenic drugs available, and they are all versions of <span style={{color: '#fc54ff', fontWeight: 700}}>estradiol</span> </div>
      </div>

      <div className='flex-row' style={{ margin: '20px 0' }}>
        <div className='flex-column' style={{ flex: 1, margin: '0 15px' }}>
          <img src={estradiol2} alt='effects' className='image' style={{ width: '150px' }}></img>
          <div className='title-small'>Estradiol</div>
        </div>
        <div className='flex-column' style={{ flex: 1, margin: '0 15px' }}>
          <img src={estradiol_valerate} alt='effects' className='image' style={{ width: '150px' }}></img>
          <div className='title-small'>Estradiol Valerate</div>
        </div>
        <div className='flex-column' style={{ flex: 1, margin: '0 15px' }}>
          <img src={estradiol_cypionate} alt='effects' className='image' style={{ width: '150px' }}></img>
          <div className='title-small'>Estradiol Cypionate</div>
        </div>
      </div>

      <div className='flex-row'>
        <div className='flex-column' style={{ flex: 1, margin: '0 15px', justifyContent: 'start' }}>
          <div className='text-center flex-tile'>Available as</div>
          <img src={estradiol_av} alt='Availability' className='image' style={{ width: '101px' }}></img>
          <div className='small-text text-center flex-tile top30'>+ May have lowest risk of thromboembolism</div>
          <div className='small-text text-center flex-tile top30'>- Low bioavailability when swallowed (dissolve tablet under tongue instead)</div>
        </div>
        <div className='flex-column' style={{ flex: 1, margin: '0 15px', justifyContent: 'start' }}>
          <div className='text-center flex-tile'>Available as</div>
          <img src={valerate_av} alt='Availability' className='image' style={{ width: '101px' }}></img>
          <div className='small-text text-center flex-tile top30'>+ Usually cheapest and most available</div>
          <div className='small-text text-center flex-tile top30'>- Low bioavailability when swallowed (dissolve tablet under tongue instead)</div>
        </div>
        <div className='flex-column' style={{ flex: 1, margin: '0 15px', justifyContent: 'start' }}>
          <div className='text-center flex-tile'>Available as</div>
          <img src={cypionate_av} alt='Availability' className='image' style={{ width: '33px' }}></img>
          <div className='small-text text-center flex-tile top30'>+ Has longest duration in the body</div>
          <div className='small-text text-center flex-tile top30'>+ Only small amount of drug is required to be effective</div>
          <div className='small-text text-center flex-tile top30'>- Unfortunately is only available in some areas and is only administered as an  injection</div>
        </div>
      </div>

      <div className='flex-row' style={{ margin: '50px 0 0 0' }}>
        <div className='med-text text-center flex-tile' style={{ width: '60%', justifyContent: 'start', margin: '0 10px 0 100px' }}>3 estrogenic drugs</div>
      
        <div className='med-text text-center flex-tile' style={{ width: '60%', justifyContent: 'start', margin: '0 100px 0 10px' }}>Only estradiol is needed</div>
      </div>

      <div className='flex-row' style={{ margin: '20px 0 50px 0' }}>
        <div className='small-text text-center flex-tile' style={{ width: '60%', justifyContent: 'start', margin: '0 10px 0 100px' }}>There are many drugs on the market, but only 3 types of active ingredient. The drug names themselves only impact the other aspects of the drug – primarily the administration route. </div>
      
        <div className='small-text text-center flex-tile' style={{ width: '60%', justifyContent: 'start', margin: '0 100px 0 10px' }}>You may notice that these are all estradiol. Other forms of estrogen exist, but estradiol is the only form of active estrogen found in adult females. For this reason, only estradiol is needed to achieve feminization.  </div>
      </div>

    </div>;


    var variation = 
    <div className='flex-column' style={{ marginBottom: '50px' }}>

      <div className='flex-row'>
        <div className='large-text text-center' style={{ margin: '60px 0 50px 0', width: '500px' }}>Estrogen levels vary across the month, but are mostly stable during a given day</div>
      </div>

      <div className='flex-row' style={{ marginBottom: '40px' }}>
        <div className='flex-tile'><img src={estradiol_levels} alt='effects' className='image' style={{width: '735px', height: 'auto', margin: '0 0 20px 0'}}></img></div>
      </div>

      <div className='flex-row'>
        <table style={{ width: '500px', margin: '20px 0 10px 0' }}>
          <thead>
            <tr>
                <th>Average estradiol level across cycle</th>
                <th colSpan="2" className='text-center'>Unit of Measurement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td className='text-center'>pmol/mL</td>
              <td className='text-center'>pg/mL</td>
            </tr>
            <tr>
              <td><b>Lower bound</b></td>
              <td className='text-center'>200</td>
              <td className='text-center'>55</td>
            </tr>
            <tr>
              <td><b>Average</b></td>
              <td className='text-center'>350</td>
              <td className='text-center'>95</td>
            </tr>
            <tr>
              <td><b>Upper bound</b></td>
              <td className='text-center'>500</td>
              <td className='text-center'>135</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>;


    var blood_levels = 
    <div className='flex-column' style={{ marginBottom: '50px' }}>

       <div className='flex-row'>
        <div className='large-text text-center' style={{ margin: '60px 0 50px 0', width: '600px' }}>If you wish to medically transition, the goal is to achieve female range estradiol levels</div>
      </div>

      <div className='flex-row'>
        <div className='text-center' style={{ margin: '0 0 70px 0', width: '600px' }}>This is most commonly done using a consistant daily dose, but some people choose to alter their estrogen intake to mimic the graph above. This is called cycling. </div>
      </div>

      <div className='flex-row'>
        <table style={{ width: '600px', margin: '20px 0 10px 0' }}>
          <thead>
            <tr>
                <th>Target blood estradiol levels</th>
                <th colSpan="2" className='text-center'>Unit of Measurement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td className='text-center'>pmol/mL</td>
              <td className='text-center'>pg/mL</td>
            </tr>
            <tr>
              <td><b>Consistent Dose</b></td>
              <td className='text-center'>200 – 500</td>
              <td className='text-center'>55 - 135</td>
            </tr>
            <tr>
              <td><b>Cycling</b></td>
              <td className='text-center'>200 - 1500</td>
              <td className='text-center'>55 – 410</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='flex-row' style={{ marginTop: '50px' }}>
        <div className='flex-tile' style={{ marginRight: '20px' }}><img src={pill} alt='effects' className='image' style={{ width: '50px' }}></img></div>
        <div className='med-text text-center' style={{ width: '600px' }}>For people taking oral pills, it is a good idea to spread the dosage across the day to avoid levels spiking too much. </div>
      </div>  

      <div className='flex-row' style={{ marginTop: '50px' }}>
        <div className='flex-tile' style={{ marginRight: '20px' }}><img src={syringe} alt='effects' className='image' style={{ width: '50px' }}></img></div>
        <div className='med-text text-center' style={{ width: '600px' }}>For those taking injectable estradiol, levels will be outside the range of 'consistant dose' and more similar to a cycling schedule.</div>
      </div>          

    </div>;


    var dosage = 
      <div className='flex-column' style={{ paddingBottom: '60px' }}>

        <div className='flex-row'>
          <div className='large-text text-center' style={{ margin: '30px 0 50px 0', width: '500px' }}>Dosage needed varies from person to person</div>
        </div>

        <div className='flex-row'>
          <div className='flex-tile' style={{ marginRight: '20px' }}><i className="material-icons medium" style={{ color: '#ff8f1f' }}>group</i></div>
          <div className='med-text text-center' style={{ margin: '30px 0 50px 0', width: '500px' }}>Someone who is small may need only ¼ or ½ of someone who is larger to achieve the same blood levels. </div>
        </div>

        <div className='flex-row'>
          <div className='flex-tile' style={{ marginRight: '20px' }}><i className="material-icons medium" style={{ color: '#8d1eff' }}>priority_high</i></div>
          <div className='med-text text-center' style={{ margin: '30px 0 50px 0', width: '500px' }}>For this reason, it is extremely important to monitor blood estradiol levels via frequent blood tests.</div>
        </div>

        <div className='flex-row'>
          <div className='flex-tile' style={{ marginRight: '20px' }}><i className="material-icons medium" style={{ color: '#ff2976' }}>trending_down</i></div>
          <div className='med-text text-center' style={{ margin: '30px 0 50px 0', width: '500px' }}>Try to achieve your desired levels using the smallest, most stable dose of estradiol to avoid possible side effects.</div>
        </div>
        
      </div>;


    var risk = 
    <div className='flex-column' style={{ paddingBottom: '60px' }}>

      <div className='flex-row'>
        <div className='large-text text-center' style={{ margin: '30px 0 50px 0', width: '500px' }}>When taken under medical supervision, risk of adverse effects are low.</div>
      </div>

      <div className='flex-row'>
        <table style={{ width: '600px', margin: '20px 0 10px 0' }}>
          <thead>
            <tr>
                <th>Condition</th>
                <th className='text-center'>Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>Thromboembolism (blood clot & stroke risk)</b></td>
              <td className='text-center'>1 in 100 (up to 10x average rate)</td>
            </tr>
            <tr>
              <td><b>Liver Disease</b></td>
              <td className='text-center'>No evidence of long-term increased rate</td>
            </tr>
            <tr>
              <td><b>Osteoporosis</b></td>
              <td className='text-center'>HRT may lower bone density, but no increased rate of osteoporosis</td>
            </tr>
            <tr>
              <td><b>Breast Cancer</b></td>
              <td className='text-center'>Similar occurrence to natal female</td>
            </tr>
            <tr>
              <td><b>Prostate Cancer</b></td>
              <td className='text-center'>Lower than average rate</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='flex-row'>
        <div className='med-text text-center' style={{ margin: '50px 0 0 0', width: '600px' }}>People with history of blood clot issues may need to take a lower dose, and often choose to avoid oral estradiol drugs as other administration routes may lower thromboembolism risk</div>
      </div>

      <div className='flex-row'>
        <div className='med-text text-center' style={{ margin: '50px 0 0 0', width: '600px' }}>Although risk is low, liver function screening should be done regularly. Breast cancer screening should be started as per general guidelines.</div>
      </div>

    </div>;

    var wery = 
    <div className='flex-column' style={{ padding: '0 40px 60px 40px' }}>

      <div className='flex-row'>
        <div className='large-text text-center' style={{ margin: '30px 0 70px 0', width: '600px' }}>Summary:<br></br>Pick a drug which suits your needs and habits</div>
      </div>

      <div className='flex-row' style={{ justifyContent: 'space-around', margin: '0 0 30px 0' }}>
        <div className='flex-tile'><i className='material-icons large' style={{ color: '#ff8f1f' }}>colorize</i></div>
        <div className='flex-tile'><i className='material-icons large' style={{ color: '#8d1eff' }}>attach_money</i></div>
        <div className='flex-tile'><i className='material-icons large' style={{ color: '#ff2976' }}>insert_emoticon</i></div>
      </div>

      <div className='flex-row' style={{ justifyContent: 'space-around' }}>
        <div className='flex-column' style={{ justifyContent: 'start', width: '320px' }}>
          <div className='med-text text-center'>Which one has your preferred form of administration</div>
          <div className='small-text text-center' style={{ margin: '20px 0 50px 0' }}>Depending on your prorities, one adminitration method may be better than another. For example if you know you will forget to take your prescription sometimes, try injecables. This ensures you will get a consistant dose as a top up is only needed every week or two.</div>
        </div>

        <div className='flex-column' style={{ justifyContent: 'start', width: '320px' }}>
          <div className='med-text text-center'>Which is cheaply available in your region</div>
          <div className='small-text text-center' style={{ margin: '20px 0 50px 0' }}>Each region has different policies and medical price schemes. There is no clear ‘better’ drug and so it is a good idea to choose a drug to start with that is in your budget for your location.</div>
        </div>

        <div className='flex-column' style={{ justifyContent: 'start', width: '320px' }}>
          <div className='med-text text-center'>Most importantly: Which makes you feel the best</div>
          <div className='small-text text-center' style={{ margin: '20px 0 50px 0' }}>As each drug has a certain delivery method, active ingredient, bioavailability (what percentage of the substance is absorbed into the blood), and side effects, you may feel different between certain estradiol drugs. It is important to find one that achieves your goals in terms of blood levels, while also making you feel good.</div>
        </div>
      </div>
    </div>;

  var estrogen_sections = [overview, effects, variation, blood_levels, administration, ETH, dosage, risk, wery];

  var estrogen_list = ["Estrogen Overview",  "Effects of Estrogen", "Estrogen Levels", "Blood levels", "Administration", "Estrogen types in HRT", "Dosages", "Risk Factors", "Which estrogenic drug is right for you"];
  
  var aa_list = ['Anti-androgen Overview'];

  var aa_sections = [overview];


    return (
      <div className='container'>
        <div className='title'>Hormones<img src={chemical} className='title-icon' alt='hormones'></img></div>
        <HormoneNav />
        <Topic name='Estrogen' list={estrogen_list} sections={estrogen_sections}/>
        <Topic name='Anti-androgen' list={aa_list} sections={aa_sections}/>
      </div>
    );
  }
}


export default Hormones;