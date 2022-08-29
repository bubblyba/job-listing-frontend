import SignUpForm from "./SignUpForm"
import {useNavigate} from 'react-router-dom'
import Button from "./Button";
import InputBox from "./InputBox";
import { RadioGroup, RadioButton } from 'react-radio-buttons';

import React, { useEffect, useState,useMemo } from "react";
import "./Form.css"
import CountrySelector from "./CountrySelector";
import Select, { components } from 'react-select'
import countryList from 'react-select-country-list'
import CurrencyFormat from 'react-currency-format';

function WorkerProfilePage() {
   
    const [selectedOptions, setSelectedOptions] = useState();

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = '/login'; 
    navigate(path);
  }
  const optionList = [
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
    { value: "javascript", label: "Javascript" },
    { value: "c#", label: "C#" },
    { value: "c++", label: "C++" },
    { value: "html", label: "Html" },
    { value: "css", label: "CSS" }


  ];
  const locationChangeHandler = value => {
      setLocationValue(value)
    setLocation(value['label'])
    console.log(value['label'])
  }
  const nationalityChangeHandler = value => {
      setNationalityValue(value)
      setNationality(value['label'])
      console.log(value['label'])


  }
  const residenceChangeHandler = value => {
    setResidenceValue(value)
    setResidence(value['label'])
    console.log(value['label'])


}
  const annualChangeHandler = value => {
    setPreferredAnnualPay(value['value'])


}
const monthlyChangeHandler = value => {
    setPreferredMonthlyPay(value['value'])


}
  const [locationValue, setLocationValue] = useState('')
  const [nationalityValue, setNationalityValue] = useState('')
  const [residenceValue, setResidenceValue] = useState('')


  const options = useMemo(() => countryList().getData(), [])
  const[displayName,setDisplayName] = useState('')
  const[radioColor,setRadioColor] = useState('rgb(158, 158, 158)')
  const[bio,setBio] = useState('')
  const[githubUsername,setGithubUsername] = useState('')
  const[gender,setGenderType] = useState('')
  const[location,setLocation] = useState('')
  const[nationality,setNationality] = useState('')
  const[preferredAnnualPay,setPreferredAnnualPay] = useState('')
  const[preferredMonthlyPay,setPreferredMonthlyPay] = useState('')
  const[residence,setResidence] = useState('')
  const[skills,setSkills] = useState('')
  const[website,setWebsite] = useState('')
    let username = sessionStorage.getItem('email')
    var accessToken = sessionStorage.getItem('accessToken');

   let profileInfo = {bio,displayName,gender,githubUsername,location,nationality,preferredAnnualPay,preferredMonthlyPay,residence,skills,username,website,accessToken}
   async function updateProfile(profileInfo) {
    let response = await fetch("https://job-listing-rest.herokuapp.com/api/addWorkerProfile",{
          method: "POST",
          headers: {"Content-Type":"application/json"},
          body: JSON.stringify(profileInfo)
  
      })
      .catch((error) => {
        
        navigate("/internal")

      })
      .then (response=>response.text())
      console.log(response)
        if(response === "profile created"){
        var profileCreated=true;
        var token = sessionStorage.getItem('accessToken');
        var updatedConditions = {username,token,profileCreated};
        updateProfileCreated(updatedConditions)}
        else if(response === "invalid credentials"){
            navigate("/login")

        }
       

    }

    async function updateProfileCreated(updatedConditions) {
        let response = await fetch("https://job-listing-rest.herokuapp.com/api/updateUserProfileCreated",{
              method: "POST",
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(updatedConditions)
      
          })
          .catch((error) => {
            
            navigate("/internal")
    
          })
          .then (response=>response.text())
          console.log(response)
            if(response === "profile updated"){
                navigate("/dashboard")
            }
            else{
                navigate("/login")
            }

    
        }
  async function handleClick(e){
    e.preventDefault()
    console.log("clicked")
    updateProfile(profileInfo)
  }
  function handleSelect(data) {
    setSelectedOptions(data);
    let skillsTotal = ""

    for (var i = 0; i < data.length; i++) {

        skillsTotal += data[i]['value'] + "^$$"
    }
    setSkills(skillsTotal)
    
  }

  function handleRadio(value){
    setGenderType(value)
    console.log(value)
    console.log(gender)
  }
  
  
  return (

        <div>
      <div className="title">Profile</div>

              <form>
              <div className="form">
              <div>
              <InputBox className="displayName" placeholder="Display Name" value={displayName} id="displayName"  onChange={(e)=>setDisplayName(e.target.value)}></InputBox>
                </div>
                <div>
              <InputBox className="bio" placeholder="Bio" value={bio} id="bio"  onChange={(e)=>setBio(e.target.value)}></InputBox>
                </div>
                <div>
              <InputBox className="githubUsername" placeholder="Github Username" value={githubUsername} id="githubUsername"  onChange={(e)=>setGithubUsername(e.target.value)}></InputBox>
                </div>
                <div>
              <div>

              <Select className="select" options={options} value={locationValue} onChange={locationChangeHandler} placeholder="Location..."></Select>
              </div>
              <Select className="select" options={options} value={nationalityValue} onChange={nationalityChangeHandler} placeholder="Nationality..."></Select>
              <Select className="select" options={options} value={residenceValue} onChange={residenceChangeHandler} placeholder="Residence..."></Select>

                </div>
                <CurrencyFormat className="moneyInput" placeholder="Preffered Annual Pay" thousandSeparator={true} prefix={'$'}  onValueChange={annualChangeHandler}/>
                <CurrencyFormat className="moneyInput" placeholder="Preffered Monthly Pay" thousandSeparator={true} prefix={'$'}  onValueChange={monthlyChangeHandler}/>

                {/* <div>
                                
                <CurrencyInput
                className="moneyInput"
                prefix="$"
                id="input-example"
                name="input-name"
                placeholder="Preffered Annual Pay"
                decimalsLimit={2}
                onValueChange={annualChangeHandler}
                />
                                </div>
                <div>

                <CurrencyInput
                className="moneyInput"
                prefix="$"
                id="input-example"
                name="input-name"
                placeholder="Preffered Monthly Pay"
                decimalsLimit={2}
                onValueChange={monthlyChangeHandler}
                />
                </div> */}

                <div className="dropdown-container">
                <Select 
                className="skillsList"
                    options={optionList}
                    placeholder="Skills"
                    value={selectedOptions}
                    onChange={handleSelect}
                    isSearchable={true}
                    isMulti
                />
                </div>
               
                <div>
              <InputBox className="website" placeholder="Personal Website" value={website} id="website"  onChange={(e)=>setWebsite(e.target.value)}></InputBox>
                </div>
                </div>
               <div style={{width:"118%"}}>
        <RadioGroup onChange={handleRadio} horizontal>
  <RadioButton value="male" pointColor="black" rootColor={radioColor}>
   Male
  </RadioButton>
  <RadioButton value="female" pointColor="black" rootColor={radioColor}>
    Female
  </RadioButton>
  <RadioButton value="other" pointColor="black" rootColor={radioColor}>
    Other
  </RadioButton>
      </RadioGroup>
      </div>
                <div>
                  <Button text="Save Changes" value="submit" onClick={handleClick}></Button>
                </div>
        
                <div>
                
                </div>
        
              </form>
        
              
              </div>
  );
}

export default WorkerProfilePage;
