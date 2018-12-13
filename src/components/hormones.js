import React, { Component } from 'react';
import HormoneNav from './hormonenav';
import Topic from './topic';
import chemical from '../images/chemical.png';

class Hormones extends Component {

  render() {
    var section_list = ['Overview', 'Estrogen types in HRT', 'Blood levels', 'Dosages', 'Which estrogenic drug is right for you'];

    var introduction = <div><p>Estrogen (oestrogen) is a core part of MTF Hormone Replacement Therapy (HRT). It causes a more feminine appearance due to skin softening, fat distribution changes, breast growth, as well as many other factors.</p>
    <p>Estrogen not only causes physical changes – estrogen receptors are found in many places including the liver, bone marrow, adipose tissue and brain, and so impact many bodily systems including the nervous system[1]. </p>
    <p>The role of estrogen drugs in HRT is to achieve stable, female levels of estrogen in the tissues. There are multiple methods of taking these drugs which suit certain patients. Most modern drugs are very safe[2], but all carry a slightly increased risk of blood clot and other cardiovascular problems. </p></div>;

    var ETH = 
    <div>
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

    var blood_levels = 
    <div>
      <p>If you wish to feminize your appearance through taking estradiol, the goal is to achieve female range estradiol levels in the bloodstream. This is even more successful if the levels are very stable[4]. Female range levels of blood estrogen are as follows:</p>

      <table className='container' style={{margin: '30px 0 60px 0'}}>
        <thead>
          <tr>
              <th></th>
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
            <td className='text-center'>1200 - 1500</td>
            <td className='text-center'>50 – 410</td>
          </tr>
        </tbody>
      </table>

      <p>Where stable dose refers to having a consistent dose, while cycling/injections refers to altering your blood levels through the month. Cycling is sometimes done to mimic the levels seen in a typical menstrual cycle. A graph of blood estradiol levels during the menstrual cycle can be seen below:</p>
      <img className='space-around image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Estradiol_during_menstrual_cycle.png/1920px-Estradiol_during_menstrual_cycle.png' alt='estradiol-graph'></img>
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
        <Topic name='Estrogen' list={section_list} sections={[introduction, ETH, blood_levels, dosage, wery]}/>
      </div>
    );
  }
}


export default Hormones;