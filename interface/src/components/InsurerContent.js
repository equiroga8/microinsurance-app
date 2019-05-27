import React, {useState, useEffect} from 'react';
import PolicyList from './PolicyList';
import {mockInsurerPolicies} from '../assets/mock-data';
let request = require('request-promise');

function InsurerContent(props) {


   const [policies, setPolicies] = useState(mockInsurerPolicies);

  useEffect( () =>{ 
    getPolicies();
    console.log("useEffect policies");
  }, [props.refreshPolicies]);

   async function getPolicies() {
    let getOptions = {
      uri: 'http://localhost:3005/api/queries/selectInsurerDelayInsurancePolicies?insureeId=resource%3Aorg.insurance.Insurer%23admin%40safeflight.com',
      headers: {
        'Accept': 'application/json'
      },
      json: true
    };
    try {
      let response = await request(getOptions);
      console.log("fetching Policies", response);
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

        <PolicyList 
          idIs="pl-pending" 
          headerTitle="Not accepted" 
          policyList={getPoliciesByStatus(["INITIATED"])} 
          buttonDisabled={false} 
          reloadDisabled={false} 
          buttonText="Accept policy" 
          isInsurer={props.isInsurer}
          setRefreshParticipant={props.setRefreshInsurer}
          refreshParticipant={props.setRefreshInsurer}
          setRefreshPolicies={props.setRefreshPolicies}
          refreshPolicies={props.refreshPolicies}
        />
   
        <PolicyList 
          idIs="pl-ongoing" 
          headerTitle="On going" 
          policyList={getPoliciesByStatus(["PENDING"])} 
          buttonDisabled={false} reloadDisabled={false} 
          buttonText="Finalize policy" 
          isInsurer={props.isInsurer}
          setRefreshParticipant={props.setRefreshInsurer}
          refreshParticipant={props.setRefreshInsurer}
          setRefreshPolicies={props.setRefreshPolicies}
          refreshPolicies={props.refreshPolicies}        
        />
        
        <PolicyList 
          idIs="pl-finished" 
          headerTitle="Finished" 
          policyList={getPoliciesByStatus(["CANCELLED","PAIDTOINSUREE", "PAIDTOINSURER"])} 
          buttonDisabled={true} 
          reloadDisabled={true} 
          buttonText={false} 
          isInsurer={props.isInsurer}
          setRefreshParticipant={props.setRefreshInsurer}
          refreshParticipant={props.setRefreshInsurer}
          setRefreshPolicies={props.setRefreshPolicies}
          refreshPolicies={props.refreshPolicies}
        />

    </div>      
  );
}

export default InsurerContent;