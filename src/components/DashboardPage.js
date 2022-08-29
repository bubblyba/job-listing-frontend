import { useEffect, useState } from "react";
import getToken from "../App"
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
    
    let navigate = useNavigate(); 
        useEffect(() => {
            let isMounted = true

            getAccessToken();
            return () => { isMounted = false }

        }, []);
    async function getAccessToken(){

        
        let username = sessionStorage.getItem("username")
        console.log("this " + username)
        let token = sessionStorage.getItem("token")

        const creds = {username,token}
        let response = await fetch("https://job-listing-rest.herokuapp.com/api/validateAuthToken",{
              method: "POST",
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify(creds)
      
          })
          .catch((error) => {
            
            navigate("/internal")
    
          })
          .then (response=>response.json())
            console.log(response)
            if(response['username'] === "invalid token"){
            console.log('Invalid token');
            }
            else if(response['username'] === "invalid credentials"){
                console.log('Invalid credentials');
                

            }
            else if(response['username'] === "token expired"){
                console.log('token expired');
                sessionStorage.removeItem('token');
                sessionStorage.removeItem('username');
                sessionStorage.removeItem('accessToken');
                console.log("dssd")
                navigate('/login');

            }
            else{
                console.log("here")
                console.log(response)
                console.log(response.username)
                console.log(response.accessToken)

                console.log(sessionStorage.setItem('accessToken', response.accessToken));
                sessionStorage.setItem('userType', response.tokenType);

                let string = sessionStorage.getItem('accessToken')
                const creds2 = {string}
                let response2 = await fetch("https://job-listing-rest.herokuapp.com/api/getUserByAccessToken",{
                    method: "POST",
                    headers: {"Content-Type":"application/json"},
                    body: JSON.stringify(creds2)
            
                })
                .catch((error) => {
            
                    navigate("/internal")
            
                  })
                  .then (response2=>response2.json())
                  sessionStorage.setItem('email', response2.email);
                  sessionStorage.setItem('password', response2.password);
                  
                  if(sessionStorage.getItem('userType') === "job"){
                    let username = sessionStorage.getItem('email')
                    let token = sessionStorage.getItem('accessToken')

                    const creds3 = {username,token}
                    console.log(creds3)
                    let response3 = await fetch("https://job-listing-rest.herokuapp.com/api/getUserProfileCreated",{
                        method: "POST",
                        headers: {"Content-Type":"application/json"},
                        body: JSON.stringify(creds3)
                
                        })
                        .catch((error) => {
                
                            navigate("/internal")
                    
                        })

                        .then (response3=>response3.json())
                        console.log("theheh" + response3)
                        if(response3 === "invalid token")
                            navigate('/login')
                        else if(response3 === "internal issue")
                            navigate("/internal")

                        else if(response3 === false)
                            navigate('/workerProfile');
                        else
                            navigate('/dashboard');
    
            }
        }
      
          }
          
         
        
        
        
        
   
    return (
      <div>
        
    {sessionStorage.getItem('email')}
    {sessionStorage.getItem('userType')}


      </div>
    );
  
};
export default DashboardPage;