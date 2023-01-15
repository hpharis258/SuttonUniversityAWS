import React from 'react';
import '../App.css';
import { useState } from 'react';

const Login = () => {
  // Initial 
  // Set State 
    const [formInitialValues, setInitialFormValues] = useState({
      email: "", 
      password: ""
});
const [TeacherStudentSelectorVal, setTeacherStudentSelectorVal] = useState ({
  teacher: false,
  student: true
});
    const [isSubmiting, setisSubmiting] = useState(false);
   
    // Submit
    const submit = () => {
      console.log(formInitialValues);
    }
    async function handleSubmit(event)
    {
        event.preventDefault();
        console.log(TeacherStudentSelectorVal)
        console.log(formInitialValues);
        // //let url = window.location.href;
        // let url = "http://localhost:1337/students"
        // const res = await axios.get(url);
        // console.log(res);
    }
    // Student or Teacher Change
    const change = (e) => {
      //console.log(e);
      console.log(e.target.id)
      if(e.target.id == "studentButton")
      {
        setTeacherStudentSelectorVal({teacher: false, student: true});
        //TeacherStudentSelectorVal.student = true;
        //TeacherStudentSelectorVal.teacher = false;
        // console.log("current state!!!");
        // console.log(TeacherStudentSelectorVal);
      }
      if(e.target.id == "teacherButton")
      {
        setTeacherStudentSelectorVal({teacher: true, student: false});
        // console.log("current state!!!");
        // console.log(TeacherStudentSelectorVal);
      }
      //setTeacherStudentSelectorVal({...TeacherStudentSelectorVal, [e.target.name]: e.target.value})
    
    }  
     // Handle Change
     const handleChange = (e) => {
      setInitialFormValues({...formInitialValues, [e.target.name]: e.target.value})
     }
     // Form Submiting Handler


    return (
      <div className="App">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"></link>
        <h1>Sutton University Portal</h1>
        <button id='studentButton' type="button" name='student' onClick={change}  className="btn btn-primary">I am a Student</button>
        <button id='teacherButton' type="button" name='teacher' onClick={change} className="btn btn-secondary">I am a Teacher</button>
        <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="emailInput">Email address</label>
      <input
        type="email"
        className="form-control"
        id="emailInput1"
        name="email"
        placeholder="name@example.com"
        onChange={handleChange}
        //value={formInitialValues.email}
     
      />
    </div>
    <div className="form-group">
      <label htmlFor="passwordInput">Password</label>
      <input
        type="password"
        className="form-control"
        name="password"
        id="passwordInput1"
        placeholder="**********"
        //value={formInitialValues.password}
        onChange={handleChange}
      />
    </div>
    <button className='form-group' type='submit' onSubmit={handleSubmit}>Login</button>
    <a href={'./CannotLogin'}>Can't login?</a>
    </form>
      </div>
    )
  }

  export default Login;

 