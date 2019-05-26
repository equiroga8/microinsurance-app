import React, {useState, useEffect} from 'react';
import PolicyForm from './PolicyForm';
import PolicyList from './PolicyList';
import {mockInsureePolicies} from '../assets/mock-data';
let request = require('request-promise');


function InsureeContent(props) {
  
  const [policies, setPolicies] = useState(mockInsureePolicies);

  useEffect( () =>{ 
    getPolicies();
    console.log("useEffect policies");
  }, [props.refreshPolicies]);

   async function getPolicies() {
    props.setRefreshPolicies(false);
    let getOptions = {
      uri: 'http://localhost:3005/api/queries/selectInsureeDelayInsurancePolicies?insureeId=resource%3Aorg.insurance.Insuree%23john%40jmail.com',
      headers: {
        'Accept': 'application/json'
      },
      json: true
    };
    try {
      let response = await request(getOptions);
      console.log("fetching Policies");
      setPolicies(response);
    } catch (error) {
      console.log(error);
    }
  }

  function getPoliciesByStatus(statuses){
    let policyList = [];
    for(let policy of policies){
      for(let status of statuses){
      if (policy.policyState === status) {
        policyList.push(policy);
      }
    }
    }
    return policyList;
  }

  return (
      <div id="app-container"> 
        <div id="create-form-item"> 
        <PolicyForm  setRefreshInsuree={props.setRefreshInsuree} setRefreshPolicies={props.setRefreshPolicies}/>
        </div>

        <PolicyList 
          idIs="pl-pending" 
          headerTitle="Pending" 
          policyList={getPoliciesByStatus(["INITIATED"])} 
          buttonDisabled={true} 
          reloadDisabled={false} 
          buttonText="Policy pending" 
          isInsurer={props.isInsurer}
          setRefreshPolicies={props.setRefreshPolicies}
        />
   
        <PolicyList 
          idIs="pl-ongoing" 
          headerTitle="On going" 
          policyList={getPoliciesByStatus(["PENDING"])} 
          buttonDisabled={false} 
          reloadDisabled={false} 
          buttonText="Finalize Policy" 
          isInsurer={props.isInsurer}
          setRefreshPolicies={props.setRefreshPolicies}
        />
        
        <PolicyList 
          idIs="pl-finished" 
          headerTitle="Finished" 
          policyList={getPoliciesByStatus(["CANCELLED","PAIDTOINSUREE", "PAIDTOINSURER"])} 
          buttonDisabled={true} 
          reloadDisabled={true} 
          buttonText="Finalize policy" 
          isInsurer={props.isInsurer} 
          buttonText={false}
          setRefreshPolicies={props.setRefreshPolicies} 
        />

    </div>      
  );
}

export default InsureeContent;