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
import estradiol_levels from '../images/estradiol_levels.png';

class Hormones extends Component {

  render() {
    var section_list = ['Overview', 'Effects of Estrogen', 'Estrogen Administration', 'Estrogen types in HRT', 'Blood levels', 'Dosages', 'Which estrogenic drug is right for you'];

    var introduction = 
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
          <div className='small-text text-center flex-tile bot30'>May have a higher risk of thromboembolism compared to other routes</div>
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

    </div>
    ;


    var ETH = 
    <div className='flex-column'>

      <div className='flex-row'>
        <div className='large-text text-center' style={{ margin: '60px 0 80px 0', width: '500px' }}>There are 3 estrogenic drugs available, and they are all versions of estradiol</div>
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
    /*
      <p>There are 3 types of estrogen in drugs that are currently prescribed as HRT – these are:</p>
      <ul>
        <li><a href='https://en.wikipedia.org/wiki/Estradiol'>Estradiol</a><b></b></li>
        <li><a href='https://en.wikipedia.org/wiki/Estradiol_valerate'>Estradiol valerate</a><b></b></li>
        <li><a href='https://en.wikipedia.org/wiki/Estradiol_cypionate'>Estadiol cypionate</a><b></b></li>
      </ul>
      <p>There are many drugs on the market, but each has one of these as the active ingredient. The drug names themselves only impact the other aspects of the drug – primarily the administration route. Therefore, the most important aspect when choosing a drug is knowing the active ingredient.</p>
      <p>You may notice that these are all estradiol. Other forms of estrogen exist, but estradiol is the only form of active estrogen found in adult females[3]. For this reason, only estradiol is needed to achieve feminization.  </p>
      <p>Side note: Another, highly potent form, <b>ethinyl-estadiol</b> was previously offered to some patients but is no longer recommended due to high risk of blood clotting and cardiovascular problems, large side effects on liver with prolonged use, and differing effectiveness between patients. This should no longer be prescribed by any health practitioner. </p>
    </div>;
    */

    var blood_levels = 
    <div className='flex-column'>

       <div className='flex-row'>
        <div className='large-text text-center' style={{ margin: '60px 0 50px 0', width: '500px' }}>If you wish to medically transition, the goal is to achieve female range estradiol levels</div>
      </div>

      <div className='flex-row'>
        <div className='text-center' style={{ margin: '0 0 70px 0', width: '500px' }}>Additionally, keeping these levels stable and consistent across the day is the most similar to hormone release in the average female[cite].</div>
      </div>

      <div className='flex-row'>
        <div className='flex-tile'><img src={estradiol_levels} alt='effects' className='image' style={{width: '735px', height: 'auto', margin: '0 0 20px 0'}}></img></div>
      </div>

      <div className='flex-row'>
        <table style={{ width: '600px', margin: '0 0 50px 0' }}>
          <thead>
            <tr>
                <th>Target estradiol levels</th>
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
              <td className='text-center'>300 – 600</td>
              <td className='text-center'>80 – 165</td>
            </tr>
            <tr>
              <td><b>Cycling/Injections</b></td>
              <td className='text-center'>200 - 1500</td>
              <td className='text-center'>55 – 410</td>
            </tr>
          </tbody>
        </table>
      </div>

      

      <p>Where stable dose refers to having a consistent dose, while cycling/injections refers to altering your blood levels through the month. Cycling is sometimes done to mimic the levels seen in a typical menstrual cycle. A graph of blood estradiol levels during the menstrual cycle can be seen below:</p>
      
      <p className='container center'>Image taken from Wikipedia</p>
      <br></br>
      <p>From the graph above, blood estrogen shouldn’t stay below 100 pmol/L if you want to have feminizing results. For a consistent dose, levels in the range of 300-600 pmol/L would be appropriate. If you wish to cycle (follow menstrual cycle estradiol levels), you need to take blood tests in order to know how taking certain amounts of estradiol influences your blood levels. </p>
      <p>It is important to not exceed 1600 pmol/L. This can happen by taking many tablets at the same time (8mg+ estradiol valerate in one dose).</p>
    </div>;

  var dosage = <div><p>Dosages will vary from person to person. Someone who is small may need only 1/8 or ¼ of someone who is larger to achieve the same blood levels. For this reason, it is extremely important to monitor blood estradiol levels via frequent blood tests, to ensure that your dose is correct. It is extremely useful to accurately know what dosage is needed to achieve the levels you are aiming for, in order to achieve optimal results while staying safe.</p></div>;

  var wery = 
  <div>
    <p><b>Which one does your body respond to the best </b></p>
    <p>This refers to what your blood estrogen levels are. The target ranges are shown below, and it is optimal to achieve this range by taking the minimum dose so as to not put undue stress on the liver. </p>
    <p><b>Which one has your preferred form of administration</b></p>
    <p>Different forms of estrogenic drugs come with a different range of administration methods: The main methods are oral (pills), intravenous (injectable), and transdermal (patches). A certain drug may offer only one of these, or there may be options for all these methods.</p>
    <p><b>Which is cheaply available in your region</b></p>
    <p>Each region has different policies and medical price schemes. There is no clear ‘better’ drug and so it is a good idea to choose a drug to start with that is in your budget for your location. </p>
    <p><b>Most importantly: which makes you feel the best</b></p>
    <p>As each drug has a certain delivery method, active ingredient and bioavailability (what percentage of the substance is absorbed into the blood), you may feel different between certain estradiol drugs. It is important to find one that achieves your goals in terms of blood levels, while also making you feel good.</p>
  </div>;

    return (
      <div className='container'>
        <div className='title'>Hormones<img src={chemical} className='title-icon' alt='hormones'></img></div>
        <HormoneNav />
        <Topic name='Estrogen' list={section_list} sections={[introduction, effects, administration, ETH, blood_levels, dosage, wery]}/>
      </div>
    );
  }
}


export default Hormones;