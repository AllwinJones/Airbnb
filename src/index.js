import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index_css.css'; 
import { faHome } from "../node_modules/@fortawesome/free-solid-svg-icons";
import { faMapMarker } from "../node_modules/@fortawesome/free-solid-svg-icons";
import { faLink  } from "../node_modules/@fortawesome/free-solid-svg-icons";
import { faBook  } from "../node_modules/@fortawesome/free-solid-svg-icons";
import { faCube  } from "../node_modules/@fortawesome/free-solid-svg-icons";
import { faUser  } from "../node_modules/@fortawesome/free-solid-svg-icons";
import { faTasks  } from "../node_modules/@fortawesome/free-solid-svg-icons";
import { faCircle  } from "../node_modules/@fortawesome/free-solid-svg-icons";
import { faStar  } from "../node_modules/@fortawesome/free-solid-svg-icons";
import { faCode  } from "../node_modules/@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome";

var userButtons = [
    {
        title: 'incubator-superset',
        type: 'Sources',
        language: 'CSS',
		rating: '6.6'
    },
    {
        title: 'buck',
        type: 'Mirrors',
        language: 'CSS',
		rating: '4.5'
    },
	{
        title: 'istio-test-infra',
        type: 'Sources',
        language: 'HTML',
		rating: '7.1'
    },
	{
        title: 'istio',
        type: 'Mirrors',
        language: 'CSS',
		rating: '2.5'
    },
	{
        title: 'okbuck',
        type: 'Sources',
        language: 'CSS',
		rating: '9.1'
    },
	{
        title: 'etcd',
        type: 'Mirrors',
        language: 'HTML',
		rating: '1.9'
    },
	{
        title: 'node-memwatch',
        type: 'Sources',
        language: 'CSS',
		rating: '5.7'
    }
];


function Repositories() {
	
const myfirstelement = 
<body>
<div className='header_div'>

<table>
<tr>
<td rowspan="3"><img src="airbnb.png" alt="Girl in a jacket" className='main_logo'/></td>
<td className='header_title'>Airbnb</td>
</tr>

<tr style={{fontSize:"13px"}}>
<td><FontAwesomeIcon icon={faMapMarker} />  San Francisco</td>
<td style={{paddingLeft:"30px"}}><FontAwesomeIcon icon={faLink} />  https://airbnb.io</td>
<td style={{paddingLeft:"30px"}}><button className='ppl_button'><font style={{color:"green"}}>Verified</font></button></td>
</tr>
</table>

<table className='tab_headings' style={{paddingTop:"30px"}}>
<tr>
<td style={{paddingLeft:"50px"}}><button style={{color:"#000000", fontSize:"17px", borderBottomColor: "coral"}} className="button" onClick={Repositories}><FontAwesomeIcon icon={faBook} />  Repositories</button></td>
<td style={{paddingLeft:"50px"}}><button className="button" onClick={Packages}><FontAwesomeIcon icon={faCube} />  Packages</button></td>
<td style={{paddingLeft:"50px"}}><button className="button" onClick={People}><FontAwesomeIcon icon={faUser} />  People</button></td>
<td style={{paddingLeft:"50px"}}><button className="button" onClick={Projects}><FontAwesomeIcon icon={faTasks} />  Projects</button></td>
</tr>
</table>

</div>

<div style={{paddingTop:"50px"}}></div>

<div className='repo_body'>
<p>Pinned repositories</p>

<div className='repository_box'>
<div style={{paddingTop:"13px"}}></div>
<b><FontAwesomeIcon icon={faBook} style={{color:"#a6a6a6"}}/>  javascript</b>
<p>JavaScript Style Guide JavaScript Style Guide</p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faCircle} style={{color:"#ffff4d"}}/>  PHP</p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faStar} style={{color:"#737373"}}/>  97.7k</p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faCode} style={{color:"#737373"}}/>  19k</p>
</div>

<div className='repository_box'>
<div style={{paddingTop:"13px"}}></div>
<b><FontAwesomeIcon icon={faBook} style={{color:"#a6a6a6"}}/>  react-dates</b>
<p>An easily internationalizable, mobile-friendly datepicker library for the web </p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faCircle} style={{color:"#ffff4d"}}/>  HTML</p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faStar} style={{color:"#737373"}}/>  10.7k</p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faCode} style={{color:"#737373"}}/>  1.5k</p>
</div>

<div className='repository_box'>
<div style={{paddingTop:"13px"}}></div>
<b><FontAwesomeIcon icon={faBook} style={{color:"#a6a6a6"}}/>  lottie-android</b>
<p>Render After Effects animations natively on Android and React Native </p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faCircle} style={{color:"#ffff4d"}}/>  Java</p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faStar} style={{color:"#737373"}}/>  29.2k</p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faCode} style={{color:"#737373"}}/>  4.7k</p>
</div>

<div className='repository_box'>
<div style={{paddingTop:"13px"}}></div>
<b><FontAwesomeIcon icon={faBook} style={{color:"#a6a6a6"}}/>  lottie-ios</b>
<p>An iOS library to natively render After Effects vector animations </p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faCircle} style={{color:"#ffff4d"}}/>  Swift</p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faStar} style={{color:"#737373"}}/>  19.9k</p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faCode} style={{color:"#737373"}}/>  2.8k</p>
</div>

<div className='repository_box'>
<div style={{paddingTop:"13px"}}></div>
<b><FontAwesomeIcon icon={faBook} style={{color:"#a6a6a6"}}/>  react-sketchapp</b>
<p>render React components to Sketch to Sketch</p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faCircle} style={{color:"#ffff4d"}}/>  React</p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faStar} style={{color:"#737373"}}/>  14.5k</p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faCode} style={{color:"#737373"}}/>  832</p>
</div>

</div>
</body>

const myfilter = 
<div className='filter_body'>
<div className='filter_select'>
<br/><br/><br/>
  <select id='type'>
    <option onClick={select_all_type}>All</option>
    <option onClick={select_sources}>Sources</option>
    <option onClick={select_mirrors}>Mirrors</option>
  </select>

  <select id='language'>
    <option onClick={select_all_language}>All</option>
    <option onClick={select_html}>HTML</option>
    <option onClick={select_css}>CSS</option>
  </select><br/><br/><br/>
  
<hr style={{height:"1px",borderWidth:"0",color:"#d9d9d9",backgroundColor:"#d9d9d9"}}/>

<div>
{userButtons.map(name => (

<table>
<tr>
<td style={{width:"600px"}}><p style={{color:"blue",fontSize:"17px"}}><FontAwesomeIcon icon={faBook} style={{color:"#a6a6a6"}}/>  {name.title}</p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faCircle} style={{color:"#339966"}}/>  {name.type}</p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faStar} style={{color:"#cc6600"}}/>  {name.language}</p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faCode} style={{color:"#666699"}}/>  {name.rating}k</p></td>
</tr>
<hr style={{height:"1px",width:"900px",borderWidth:"0",color:"#d9d9d9",backgroundColor:"#d9d9d9"}}/>
</table>

))}
</div>


</div>
</div>

ReactDOM.render(myfirstelement, document.getElementById('root'));
ReactDOM.render(myfilter, document.getElementById('filter'));
}

function Packages() {
	
const myfilter = <div></div>
	
const myfirstelement = 
<body>
<div className='header_div'>
<table>
<tr>
<td rowspan="3"><img src="airbnb.png" alt="Girl in a jacket" className='main_logo'/></td>
<td className='header_title'>Airbnb</td>
</tr>
<tr style={{fontSize:"13px"}}>
<td><FontAwesomeIcon icon={faMapMarker} />  San Francisco</td>
<td style={{paddingLeft:"30px"}}><FontAwesomeIcon icon={faLink} />  https://airbnb.io</td>
<td style={{paddingLeft:"30px"}}><button className='ppl_button'><font style={{color:"green"}}>Verified</font></button></td>
</tr>
</table>
<table className='tab_headings' style={{paddingTop:"30px"}}>
<tr>
<td style={{paddingLeft:"50px"}}><button className="button" onClick={Repositories}><FontAwesomeIcon icon={faBook} />  Repositories</button></td>
<td style={{paddingLeft:"50px"}}><button style={{color:"#000000", fontSize:"17px", borderBottomColor: "coral"}} className="button" onClick={Packages}><FontAwesomeIcon icon={faCube} />  Packages</button></td>
<td style={{paddingLeft:"50px"}}><button className="button" onClick={People}><FontAwesomeIcon icon={faUser} />  People</button></td>
<td style={{paddingLeft:"50px"}}><button className="button" onClick={Projects}><FontAwesomeIcon icon={faTasks} />  Projects</button></td>
</tr>
</table>
</div>

<div style={{paddingTop:"50px"}}></div>

<div className='repo_body'>

<div className='package_box'>
<div style={{paddingTop:"13px"}}></div>
<center>
<FontAwesomeIcon icon={faCube}  style={{fontSize:"70px",paddingTop:"30px",color:"#99ccff"}}/><br/><br/>
<b style={{fontSize:"20px"}}>There aren’t any packages here</b>
<p>With GitHub Packages you can safely publish and consume packages.</p>
<p><a href="#">Learn</a> more about GitHub Packages</p>
</center>
</div>

</div>
<hr style={{height:"1px",width:"950px",borderWidth:"0",color:"#d9d9d9",backgroundColor:"#d9d9d9"}}/>
</body>
ReactDOM.render(myfirstelement, document.getElementById('root'));
ReactDOM.render(myfilter, document.getElementById('filter'));
}

function People() {
	
const myfilter = <div></div>
	
const myfirstelement = 
<body>
<div className='header_div'>
<table>

<tr>
<td rowspan="3"><img src="airbnb.png" alt="Girl in a jacket" className='main_logo'/></td>
<td className='header_title'>Airbnb</td>
</tr>

<tr style={{fontSize:"13px"}}>
<td><FontAwesomeIcon icon={faMapMarker} />  San Francisco</td>
<td style={{paddingLeft:"30px"}}><FontAwesomeIcon icon={faLink} />  https://airbnb.io</td>
<td style={{paddingLeft:"30px"}}><button className='ppl_button'><font style={{color:"green"}}>Verified</font></button></td>
</tr>

</table>

<table className='tab_headings' style={{paddingTop:"30px"}}>
<tr>
<td style={{paddingLeft:"50px"}}><button className="button" onClick={Repositories}><FontAwesomeIcon icon={faBook} />  Repositories</button></td>
<td style={{paddingLeft:"50px"}}><button className="button" onClick={Packages}><FontAwesomeIcon icon={faCube} />  Packages</button></td>
<td style={{paddingLeft:"50px"}}><button style={{color:"#000000", fontSize:"17px", borderBottomColor: "coral"}} className="button" onClick={People}><FontAwesomeIcon icon={faUser} />  People</button></td>
<td style={{paddingLeft:"50px"}}><button className="button" onClick={Projects}><FontAwesomeIcon icon={faTasks} />  Projects</button></td>
</tr>
</table>
</div>

<div style={{paddingTop:"50px"}}></div>

<div className='repo_body'>
<hr style={{height:"1px",borderWidth:"0",color:"#d9d9d9",backgroundColor:"#d9d9d9"}}/>

<div style={{paddingTop:"10px"}}></div>
<img src="user.png" alt="Girl in a jacket" className='ppl_img'/>
<div className='ppl_body'>

<table>
<tr>
<td style={{width:"600px"}}><p style={{color:"blue",fontSize:"17px"}}>Alejandro García Salas</p>
<p>alejandrogarciasalas</p></td>
<td><button className='ppl_button'>Follow</button></td>
</tr>
</table>

</div>
<div style={{paddingTop:"10px"}}></div>
<hr style={{height:"1px",borderWidth:"0",color:"#d9d9d9",backgroundColor:"#d9d9d9"}}/>

<div style={{paddingTop:"10px"}}></div>
<img src="user.png" alt="Girl in a jacket" className='ppl_img'/>
<div className='ppl_body'>

<table>
<tr>
<td style={{width:"600px"}}><p style={{color:"blue",fontSize:"17px"}}>Alex Li</p>
<p>alxli</p></td>
<td><button className='ppl_button'>Follow</button></td>
</tr>
</table>

</div>
<div style={{paddingTop:"10px"}}></div>
<hr style={{height:"1px",borderWidth:"0",color:"#d9d9d9",backgroundColor:"#d9d9d9"}}/>

<div style={{paddingTop:"10px"}}></div>
<img src="user.png" alt="Girl in a jacket" className='ppl_img'/>
<div className='ppl_body'>

<table>
<tr>
<td style={{width:"600px"}}><p style={{color:"blue",fontSize:"17px"}}>Dezhi “Andy” Fang</p>
<p>andyfangdz</p></td>
<td><button className='ppl_button'>Follow</button></td>
</tr>
</table>

</div>
<div style={{paddingTop:"10px"}}></div>
<hr style={{height:"1px",borderWidth:"0",color:"#d9d9d9",backgroundColor:"#d9d9d9"}}/>

<div style={{paddingTop:"10px"}}></div>
<img src="user.png" alt="Girl in a jacket" className='ppl_img'/>
<div className='ppl_body'>

<table>
<tr>
<td style={{width:"600px"}}><p style={{color:"blue",fontSize:"17px"}}>Ashley Chien</p>
<p>ashleychien</p></td>
<td><button className='ppl_button'>Follow</button></td>
</tr>
</table>

</div>
<div style={{paddingTop:"10px"}}></div>
<hr style={{height:"1px",borderWidth:"0",color:"#d9d9d9",backgroundColor:"#d9d9d9"}}/>

<div style={{paddingTop:"10px"}}></div>
<img src="user.png" alt="Girl in a jacket" className='ppl_img'/>
<div className='ppl_body'>

<table>
<tr>
<td style={{width:"600px"}}><p style={{color:"blue",fontSize:"17px"}}>Cal Stephens</p>
<p>calda</p></td>
<td><button className='ppl_button'>Follow</button></td>
</tr>
</table>

</div>
<div style={{paddingTop:"10px"}}></div>
<hr style={{height:"1px",borderWidth:"0",color:"#d9d9d9",backgroundColor:"#d9d9d9"}}/>

<div style={{paddingTop:"10px"}}></div>
<img src="user.png" alt="Girl in a jacket" className='ppl_img'/>
<div className='ppl_body'>

<table>
<tr>
<td style={{width:"600px"}}><p style={{color:"blue",fontSize:"17px"}}>ashleychien</p>
<p>backwardok</p></td>
<td><button className='ppl_button'>Follow</button></td>
</tr>
</table>

</div>
<div style={{paddingTop:"10px"}}></div>
<hr style={{height:"1px",borderWidth:"0",color:"#d9d9d9",backgroundColor:"#d9d9d9"}}/>

<div style={{paddingTop:"10px"}}></div>
<img src="user.png" alt="Girl in a jacket" className='ppl_img'/>
<div className='ppl_body'>

<table>
<tr>
<td style={{width:"600px"}}><p style={{color:"blue",fontSize:"17px"}}>Evan Carmi </p>
<p>carmi</p></td>
<td><button className='ppl_button'>Follow</button></td>
</tr>
</table>

</div>
<div style={{paddingTop:"10px"}}></div>
<hr style={{height:"1px",borderWidth:"0",color:"#d9d9d9",backgroundColor:"#d9d9d9"}}/>

</div>
</body>
ReactDOM.render(myfirstelement, document.getElementById('root'));
ReactDOM.render(myfilter, document.getElementById('filter'));
}

function Projects() {
	
const myfilter = <div></div>
	
const myfirstelement = 
<body>
<div className='header_div'>
<table>
<tr>
<td rowspan="3"><img src="airbnb.png" alt="Girl in a jacket" className='main_logo'/></td>
<td className='header_title'>Airbnb</td>
</tr>
<tr style={{fontSize:"13px"}}>
<td><FontAwesomeIcon icon={faMapMarker} />  San Francisco</td>
<td style={{paddingLeft:"30px"}}><FontAwesomeIcon icon={faLink} />  https://airbnb.io</td>
<td style={{paddingLeft:"30px"}}><button className='ppl_button'><font style={{color:"green"}}>Verified</font></button></td>
</tr>
</table>
<table className='tab_headings' style={{paddingTop:"30px"}}>
<tr>
<td style={{paddingLeft:"50px"}}><button className="button" onClick={Repositories}><FontAwesomeIcon icon={faBook} />  Repositories</button></td>
<td style={{paddingLeft:"50px"}}><button className="button" onClick={Packages}><FontAwesomeIcon icon={faCube} />  Packages</button></td>
<td style={{paddingLeft:"50px"}}><button className="button" onClick={People}><FontAwesomeIcon icon={faUser} />  People</button></td>
<td style={{paddingLeft:"50px"}}><button style={{color:"#000000", fontSize:"17px", borderBottomColor: "coral"}} className="button" onClick={Projects}><FontAwesomeIcon icon={faTasks} />  Projects</button></td>
</tr>
</table>
</div>

<div style={{paddingTop:"50px"}}></div>

<center><FontAwesomeIcon icon={faBook}  style={{fontSize:"70px",paddingTop:"30px",color:"#cccccc"}}/><br/><br/>
<p style={{fontSize:"25px", paddingBottom:"50px"}}>Airbnb doesn’t have any public projects.</p></center>
<hr style={{height:"1px",width:"1100px",borderWidth:"0",color:"#d9d9d9",backgroundColor:"#d9d9d9"}}/>
</body>
ReactDOM.render(myfirstelement, document.getElementById('root'));
ReactDOM.render(myfilter, document.getElementById('filter'));
}

const myfirstelement = 
<body>
<div className='header_div'>

<table>
<tr>
<td rowspan="3"><img src="airbnb.png" alt="Girl in a jacket" className='main_logo'/></td>
<td className='header_title'>Airbnb</td>
</tr>

<tr style={{fontSize:"13px"}}>
<td><FontAwesomeIcon icon={faMapMarker} />  San Francisco</td>
<td style={{paddingLeft:"30px"}}><FontAwesomeIcon icon={faLink} />  https://airbnb.io</td>
<td style={{paddingLeft:"30px"}}><button className='ppl_button'><font style={{color:"green"}}>Verified</font></button></td>
</tr>
</table>

<table className='tab_headings' style={{paddingTop:"30px"}}>
<tr>
<td style={{paddingLeft:"50px"}}><button style={{color:"#000000", fontSize:"17px", borderBottomColor: "coral"}} className="button" onClick={Repositories}><FontAwesomeIcon icon={faBook} />  Repositories</button></td>
<td style={{paddingLeft:"50px"}}><button className="button" onClick={Packages}><FontAwesomeIcon icon={faCube} />  Packages</button></td>
<td style={{paddingLeft:"50px"}}><button className="button" onClick={People}><FontAwesomeIcon icon={faUser} />  People</button></td>
<td style={{paddingLeft:"50px"}}><button className="button" onClick={Projects}><FontAwesomeIcon icon={faTasks} />  Projects</button></td>
</tr>
</table>

</div>

<div style={{paddingTop:"50px"}}></div>

<div className='repo_body'>
<p>Pinned repositories</p>

<div className='repository_box'>
<div style={{paddingTop:"13px"}}></div>
<b><FontAwesomeIcon icon={faBook} style={{color:"#a6a6a6"}}/>  javascript</b>
<p>JavaScript Style Guide JavaScript Style Guide</p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faCircle} style={{color:"#ffff4d"}}/>  PHP</p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faStar} style={{color:"#737373"}}/>  97.7k</p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faCode} style={{color:"#737373"}}/>  19k</p>
</div>

<div className='repository_box'>
<div style={{paddingTop:"13px"}}></div>
<b><FontAwesomeIcon icon={faBook} style={{color:"#a6a6a6"}}/>  react-dates</b>
<p>An easily internationalizable, mobile-friendly datepicker library for the web </p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faCircle} style={{color:"#ffff4d"}}/>  HTML</p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faStar} style={{color:"#737373"}}/>  10.7k</p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faCode} style={{color:"#737373"}}/>  1.5k</p>
</div>

<div className='repository_box'>
<div style={{paddingTop:"13px"}}></div>
<b><FontAwesomeIcon icon={faBook} style={{color:"#a6a6a6"}}/>  lottie-android</b>
<p>Render After Effects animations natively on Android and React Native </p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faCircle} style={{color:"#ffff4d"}}/>  Java</p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faStar} style={{color:"#737373"}}/>  29.2k</p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faCode} style={{color:"#737373"}}/>  4.7k</p>
</div>

<div className='repository_box'>
<div style={{paddingTop:"13px"}}></div>
<b><FontAwesomeIcon icon={faBook} style={{color:"#a6a6a6"}}/>  lottie-ios</b>
<p>An iOS library to natively render After Effects vector animations </p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faCircle} style={{color:"#ffff4d"}}/>  Swift</p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faStar} style={{color:"#737373"}}/>  19.9k</p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faCode} style={{color:"#737373"}}/>  2.8k</p>
</div>

<div className='repository_box'>
<div style={{paddingTop:"13px"}}></div>
<b><FontAwesomeIcon icon={faBook} style={{color:"#a6a6a6"}}/>  react-sketchapp</b>
<p>render React components to Sketch to Sketch</p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faCircle} style={{color:"#ffff4d"}}/>  React</p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faStar} style={{color:"#737373"}}/>  14.5k</p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faCode} style={{color:"#737373"}}/>  832</p>
</div>

</div>

<div style={{paddingTop:"130px"}}></div>




</body>

const myfilter = 
<div className='filter_body'>
<div className='filter_select'>
<br/><br/><br/>
  <select id='type'>
    <option onClick={select_all_type}>All</option>
    <option onClick={select_sources}>Sources</option>
    <option onClick={select_mirrors}>Mirrors</option>
  </select>

  <select id='language'>
    <option onClick={select_all_language}>All</option>
    <option onClick={select_html}>HTML</option>
    <option onClick={select_css}>CSS</option>
  </select><br/><br/><br/>
  
<hr style={{height:"1px",borderWidth:"0",color:"#d9d9d9",backgroundColor:"#d9d9d9"}}/>

<div>
{userButtons.map(name => (

<table>
<tr>
<td style={{width:"600px"}}><p style={{color:"blue",fontSize:"17px"}}><FontAwesomeIcon icon={faBook} style={{color:"#a6a6a6"}}/>  {name.title}</p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faCircle} style={{color:"#339966"}}/>  {name.type}</p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faStar} style={{color:"#cc6600"}}/>  {name.language}</p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faCode} style={{color:"#666699"}}/>  {name.rating}k</p></td>
</tr>
<hr style={{height:"2px",width:"900px",borderWidth:"0",color:"#d9d9d9",backgroundColor:"#d9d9d9"}}/>
</table>

))}
</div>


</div>
</div>

ReactDOM.render(myfirstelement, document.getElementById('root'));
ReactDOM.render(myfilter, document.getElementById('filter'));

function select_all_type() {
const myfilter = 
<div className='filter_body'>
<div className='filter_select'>
<br/><br/><br/>
  <select id='type'>
    <option onClick={select_all_type}>All</option>
    <option onClick={select_sources}>Sources</option>
    <option onClick={select_mirrors}>Mirrors</option>
  </select>

  <select id='language'>
    <option onClick={select_all_language}>All</option>
    <option onClick={select_html}>HTML</option>
    <option onClick={select_css}>CSS</option>
  </select><br/><br/><br/>
  
<hr style={{height:"1px",borderWidth:"0",color:"#d9d9d9",backgroundColor:"#d9d9d9"}}/>

<div>
{userButtons.map(name => (

<table>
<tr>
<td style={{width:"600px"}}><p style={{color:"blue",fontSize:"17px"}}><FontAwesomeIcon icon={faBook} style={{color:"#a6a6a6"}}/>  {name.title}</p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faCircle} style={{color:"#339966"}}/>  {name.type}</p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faStar} style={{color:"#cc6600"}}/>  {name.language}</p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faCode} style={{color:"#666699"}}/>  {name.rating}k</p></td>
</tr>
<hr style={{height:"1px",width:"900px",borderWidth:"0",color:"#d9d9d9",backgroundColor:"#d9d9d9"}}/>
</table>

))}
</div>


</div>
</div>
ReactDOM.render(myfilter, document.getElementById('filter'));
}

function select_sources() {
const myfilter = 
<div className='filter_body'>
<div className='filter_select'>
<br/><br/><br/>
  <select id='type'>
    <option onClick={select_all_type}>All</option>
    <option onClick={select_sources}>Sources</option>
    <option onClick={select_mirrors}>Mirrors</option>
  </select>

  <select id='language'>
    <option onClick={select_all_language}>All</option>
    <option onClick={select_html}>HTML</option>
    <option onClick={select_css}>CSS</option>
  </select><br/><br/><br/>
  
<hr style={{height:"1px",borderWidth:"0",color:"#d9d9d9",backgroundColor:"#d9d9d9"}}/>

<div>
{userButtons.map(name => (
name.type=='Sources'?
<table>
<tr>
<td style={{width:"600px"}}><p style={{color:"blue",fontSize:"17px"}}><FontAwesomeIcon icon={faBook} style={{color:"#a6a6a6"}}/>  {name.title}</p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faCircle} style={{color:"#339966"}}/>  {name.type}</p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faStar} style={{color:"#cc6600"}}/>  {name.language}</p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faCode} style={{color:"#666699"}}/>  {name.rating}k</p></td>
</tr>
<hr style={{height:"1px",width:"900px",borderWidth:"0",color:"#d9d9d9",backgroundColor:"#d9d9d9"}}/>
</table>
: null
))}
</div>


</div>
</div>
ReactDOM.render(myfilter, document.getElementById('filter'));
}

function select_mirrors() {
const myfilter = 
<div className='filter_body'>
<div className='filter_select'>
<br/><br/><br/>
  <select id='type'>
    <option onClick={select_all_type}>All</option>
    <option onClick={select_sources}>Sources</option>
    <option onClick={select_mirrors}>Mirrors</option>
  </select>

  <select id='language'>
    <option onClick={select_all_language}>All</option>
    <option onClick={select_html}>HTML</option>
    <option onClick={select_css}>CSS</option>
  </select><br/><br/><br/>
  
<hr style={{height:"1px",borderWidth:"0",color:"#d9d9d9",backgroundColor:"#d9d9d9"}}/>

<div>
{userButtons.map(name => (
name.type=='Mirrors'?
<table>
<tr>
<td style={{width:"600px"}}><p style={{color:"blue",fontSize:"17px"}}><FontAwesomeIcon icon={faBook} style={{color:"#a6a6a6"}}/>  {name.title}</p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faCircle} style={{color:"#339966"}}/>  {name.type}</p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faStar} style={{color:"#cc6600"}}/>  {name.language}</p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faCode} style={{color:"#666699"}}/>  {name.rating}k</p></td>
</tr>
<hr style={{height:"1px",width:"900px",borderWidth:"0",color:"#d9d9d9",backgroundColor:"#d9d9d9"}}/>
</table>
: null
))}
</div>


</div>
</div>
ReactDOM.render(myfilter, document.getElementById('filter'));
}

function select_all_language() {
const myfilter = 
<div className='filter_body'>
<div className='filter_select'>
<br/><br/><br/>
  <select id='type'>
    <option onClick={select_all_type}>All</option>
    <option onClick={select_sources}>Sources</option>
    <option onClick={select_mirrors}>Mirrors</option>
  </select>

  <select id='language'>
    <option onClick={select_all_language}>All</option>
    <option onClick={select_html}>HTML</option>
    <option onClick={select_css}>CSS</option>
  </select><br/><br/><br/>
  
<hr style={{height:"1px",borderWidth:"0",color:"#d9d9d9",backgroundColor:"#d9d9d9"}}/>

<div>
{userButtons.map(name => (

<table>
<tr>
<td style={{width:"600px"}}><p style={{color:"blue",fontSize:"17px"}}><FontAwesomeIcon icon={faBook} style={{color:"#a6a6a6"}}/>  {name.title}</p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faCircle} style={{color:"#339966"}}/>  {name.type}</p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faStar} style={{color:"#cc6600"}}/>  {name.language}</p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faCode} style={{color:"#666699"}}/>  {name.rating}k</p></td>
</tr>
<hr style={{height:"1px",width:"900px",borderWidth:"0",color:"#d9d9d9",backgroundColor:"#d9d9d9"}}/>
</table>

))}
</div>


</div>
</div>
ReactDOM.render(myfilter, document.getElementById('filter'));
}

function select_html() {
const myfilter = 
<div className='filter_body'>
<div className='filter_select'>
<br/><br/><br/>
  <select id='type'>
    <option onClick={select_all_type}>All</option>
    <option onClick={select_sources}>Sources</option>
    <option onClick={select_mirrors}>Mirrors</option>
  </select>

  <select id='language'>
    <option onClick={select_all_language}>All</option>
    <option onClick={select_html}>HTML</option>
    <option onClick={select_css}>CSS</option>
  </select><br/><br/><br/>
  
<hr style={{height:"1px",borderWidth:"0",color:"#d9d9d9",backgroundColor:"#d9d9d9"}}/>

<div>
{userButtons.map(name => (
name.language=='HTML'?
<table>
<tr>
<td style={{width:"600px"}}><p style={{color:"blue",fontSize:"17px"}}><FontAwesomeIcon icon={faBook} style={{color:"#a6a6a6"}}/>  {name.title}</p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faCircle} style={{color:"#339966"}}/>  {name.type}</p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faStar} style={{color:"#cc6600"}}/>  {name.language}</p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faCode} style={{color:"#666699"}}/>  {name.rating}k</p></td>
</tr>
<hr style={{height:"1px",width:"900px",borderWidth:"0",color:"#d9d9d9",backgroundColor:"#d9d9d9"}}/>
</table>
: null
))}
</div>


</div>
</div>
ReactDOM.render(myfilter, document.getElementById('filter'));
}

function select_css() {
const myfilter = 
<div className='filter_body'>
<div className='filter_select'>
<br/><br/><br/>
  <select id='type'>
    <option onClick={select_all_type}>All</option>
    <option onClick={select_sources}>Sources</option>
    <option onClick={select_mirrors}>Mirrors</option>
  </select>

  <select id='language'>
    <option onClick={select_all_language}>All</option>
    <option onClick={select_html}>HTML</option>
    <option onClick={select_css}>CSS</option>
  </select><br/><br/><br/>
  
<hr style={{height:"1px",borderWidth:"0",color:"#d9d9d9",backgroundColor:"#d9d9d9"}}/>

<div>
{userButtons.map(name => (
name.language=='CSS'?
<table>
<tr>
<td style={{width:"600px"}}><p style={{color:"blue",fontSize:"17px"}}><FontAwesomeIcon icon={faBook} style={{color:"#a6a6a6"}}/>  {name.title}</p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faCircle} style={{color:"#339966"}}/>  {name.type}</p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faStar} style={{color:"#cc6600"}}/>  {name.language}</p>
<p className='repository_box_inside'><FontAwesomeIcon icon={faCode} style={{color:"#666699"}}/>  {name.rating}k</p></td>
</tr>
<hr style={{height:"1px",width:"900px",borderWidth:"0",color:"#d9d9d9",backgroundColor:"#d9d9d9"}}/>
</table>
: null
))}
</div>


</div>
</div>
ReactDOM.render(myfilter, document.getElementById('filter'));
}
