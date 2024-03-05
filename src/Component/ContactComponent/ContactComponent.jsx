import React, { useState } from 'react'
import './contactStyle.css'

const ContactComponent = () => {

let [person,setPerson] = useState(
  {
    fullname : "",
    mail :"",
    username:"",
    pass :""
}
);

let [myerror,setMyerror] = useState({
  fullname : "",
  mail :"",
  username:"",
  pass :""
});

let [myresult,setMyresult] = useState({
  fullname : "",
  mail :"",
  age :"",
  username:"",
});
let [matchError, setMatchError] = useState("");
let [matchInput,setMatchInput] = useState("");

let [myarry ,setMyarry] = useState([]);

// *********INPUT ONCHANGE********
// *********INPUT ONCHANGE********
let handleForm = (e)=> {

    let {name,value} = e.target;
    setPerson({...person,
      [name]:value
    })
    console.log(person);

};
// *********INPUT ONCHANGE********
// *********INPUT ONCHANGE********

let handleSubmit = ()=>{
  
  // ***********condition for Error**********
  // ***********condition for Error**********
  if(person.mail == "" ||person.fullname == "" || person.username == ""){
    setMyerror({mail:"Name is Required" ,fullname:"Name is Required",username:"username is Required"});
  }else{setMyerror({mail:"",fullname:"",pass:"",username:""})};

  let myArry2 = [...myarry];
  myArry2.push({
    fullname: person.fullname , mail: person.mail , pass: person.pass, username:person.username
  });
  setMyarry(myArry2)

  console.log(myArry2);
  console.log(myarry);
  

 
  // ***********condition for Error**********
  // ***********condition for Error**********

// **************card result********
  setMyresult({fullname:person.fullname , mail:person.mail , pass:person.pass, username:person.username})
  console.log(person.username);
};

let hnadleMatchInput = (e)=>{
  setMatchInput(e.target.value)
  console.log(matchInput);
};
let matchesss = ()=>{
  let nam = person.fullname.slice(0, (person.fullname.length));
  let matchnam = matchInput.slice(0, (matchInput.length));
  let logName = nam.toLocaleLowerCase()
  console.log(logName);
  console.log(matchnam);

  if(nam == matchnam){
    console.log("true");
  }else{
    console.log("false");
  };

};


  return (
    <>
      <div id="contact">
        <div className="contain">

          <div className="signupForm">
            <h2>Sign Up</h2>

            {/* ********name input***** */}
            <label htmlFor="Fullname">Full Name</label><br />
            <input id='Fullname' onChange={handleForm} name="fullname" placeholder='fullname' />
            <p>{myerror.fullname}</p>
            <br />

            {/* ********name input***** */}
            <label htmlFor="Mails">Mail</label><br />
            <input  onChange={handleForm} name="mail" placeholder='Email' id='Mails'/>
            <p>{myerror.mail}</p>
            <br/>

            {/* ********username input***** */}
            <label htmlFor="UserNmae">Username</label><br />
            <input id='UserName' onChange={handleForm} name='username' placeholder='username' />
            <p>{myerror.username}</p>
            <br />

            {/* ********password input***** */}
            <label htmlFor="Pass">Password</label><br />
            <input id='Pass' onChange={handleForm} name="pass" placeholder='Pa $$ w 0 rd' type='password' />
            <p>{myerror.pass}</p>
            <br />
            {/* ***********handle Submit************ */}
            <button onClick={handleSubmit} className='submit'>submit</button>


            {/* ===========login============ */}
            <div className="login">
              
              <input onChange={hnadleMatchInput} type="text" placeholder='check you result' />
              <input onChange={hnadleMatchInput} type="text" placeholder='check you password' />

              <br />
              <button onClick={matchesss}>match</button>

              <span>{matchError}</span>
            </div>



          </div>


          <div className="output">
            
              {
                myarry.map(item=>(
                  <ul>
                    <li>{myresult.fullname}</li>
                    <li>{myresult.mail}</li>
                    <li>{myresult.pass}</li>
                    <li>{myresult.username}</li>
                  </ul>
                ))
              }

          </div>
  
        </div>
      </div>
    </>
  )
}

export default ContactComponent
