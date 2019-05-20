//'http://localhost:3005/api/queries/selectInsureeDelayInsurancePolicies?insureeId=resource%3Aorg.insurance.Insuree%23john%40jmail.com'
//"resource:org.insurance.Insuree#john@jmail.com"
export const mockInsureePolicies = [{
  "$class": "org.insurance.DelayInsurancePolicy",
  "delayInsurancePolicyId": "SJ1557591139667",
  "escrow": 0,
  "insurer": "resource:org.insurance.Insurer#admin@safeflight.com",
  "insuree": "resource:org.insurance.Insuree#john@jmail.com",
  "policyState": "CANCELLED",
  "flightDetails": {
    "$class": "org.insurance.FlightDetails",
    "flightStatus": "UNDEFINED",
    "flightDesignator": "LH400",
    "departureDate": "2019-04-22T18:42:11.941Z",
    "departureAirport": "MAD"
  }
}, {
  "$class": "org.insurance.DelayInsurancePolicy",
  "delayInsurancePolicyId": "SJ1557591363444",
  "escrow": 10,
  "insurer": "resource:org.insurance.Insurer#admin@safeflight.com",
  "insuree": "resource:org.insurance.Insuree#john@jmail.com",
  "policyState": "INITIATED",
  "flightDetails": {
    "$class": "org.insurance.FlightDetails",
    "flightStatus": "ONSCHEDULE",
    "flightDesignator": "LH401",
    "departureDate": "2019-04-22T18:42:11.941Z",
    "departureAirport": "MAD"
  }
}, {
  "$class": "org.insurance.DelayInsurancePolicy",
  "delayInsurancePolicyId": "SJ1557592181294",
  "escrow": 10,
  "insurer": "resource:org.insurance.Insurer#admin@safeflight.com",
  "insuree": "resource:org.insurance.Insuree#john@jmail.com",
  "policyState": "INITIATED",
  "flightDetails": {
    "$class": "org.insurance.FlightDetails",
    "flightStatus": "UNDEFINED",
    "flightDesignator": "LH402",
    "departureDate": "2019-04-22T18:42:11.941Z",
    "departureAirport": "MAD"
  }
}, {
  "$class": "org.insurance.DelayInsurancePolicy",
  "delayInsurancePolicyId": "SJ1557592499874",
  "escrow": 100,
  "insurer": "resource:org.insurance.Insurer#admin@safeflight.com",
  "insuree": "resource:org.insurance.Insuree#john@jmail.com",
  "policyState": "PENDING",
  "flightDetails": {
    "$class": "org.insurance.FlightDetails",
    "flightStatus": "ONSCHEDULE",
    "flightDesignator": "LH403",
    "departureDate": "2019-04-22T18:42:11.941Z",
    "departureAirport": "MAD"
  }
}, {
  "$class": "org.insurance.DelayInsurancePolicy",
  "delayInsurancePolicyId": "SJ1557592513500",
  "escrow": 100,
  "insurer": "resource:org.insurance.Insurer#admin@safeflight.com",
  "insuree": "resource:org.insurance.Insuree#john@jmail.com",
  "policyState": "PENDING",
  "flightDetails": {
    "$class": "org.insurance.FlightDetails",
    "flightStatus": "DELAYED",
    "flightDesignator": "LH404",
    "departureDate": "2019-04-22T18:42:11.941Z",
    "departureAirport": "MAD"
  }
}, {
  "$class": "org.insurance.DelayInsurancePolicy",
  "delayInsurancePolicyId": "SJ3357592513500",
  "escrow": 100,
  "insurer": "resource:org.insurance.Insurer#admin@safeflight.com",
  "insuree": "resource:org.insurance.Insuree#john@jmail.com",
  "policyState": "PENDING",
  "flightDetails": {
    "$class": "org.insurance.FlightDetails",
    "flightStatus": "ONTIME",
    "flightDesignator": "LH405",
    "departureDate": "2019-04-22T18:42:11.941Z",
    "departureAirport": "MAD"
  }
}, {
  "$class": "org.insurance.DelayInsurancePolicy",
  "delayInsurancePolicyId": "SJ3357689513500",
  "escrow": 100,
  "insurer": "resource:org.insurance.Insurer#admin@safeflight.com",
  "insuree": "resource:org.insurance.Insuree#john@jmail.com",
  "policyState": "PENDING",
  "flightDetails": {
    "$class": "org.insurance.FlightDetails",
    "flightStatus": "CANCELLED",
    "flightDesignator": "LH406",
    "departureDate": "2019-04-22T18:42:11.941Z",
    "departureAirport": "MAD"
  }
}, {
  "$class": "org.insurance.DelayInsurancePolicy",
  "delayInsurancePolicyId": "SJ3357689513780",
  "escrow": 0,
  "insurer": "resource:org.insurance.Insurer#admin@safeflight.com",
  "insuree": "resource:org.insurance.Insuree#john@jmail.com",
  "policyState": "PAIDTOINSURER",
  "flightDetails": {
    "$class": "org.insurance.FlightDetails",
    "flightStatus": "ONTIME",
    "flightDesignator": "LH407",
    "departureDate": "2019-04-22T18:42:11.941Z",
    "departureAirport": "MAD"
  }
}, {
  "$class": "org.insurance.DelayInsurancePolicy",
  "delayInsurancePolicyId": "SJ3357689993780",
  "escrow": 0,
  "insurer": "resource:org.insurance.Insurer#admin@safeflight.com",
  "insuree": "resource:org.insurance.Insuree#john@jmail.com",
  "policyState": "PAIDTOINSUREE",
  "flightDetails": {
    "$class": "org.insurance.FlightDetails",
    "flightStatus": "DELAYED",
    "flightDesignator": "LH408",
    "departureDate": "2019-04-22T18:42:11.941Z",
    "departureAirport": "MAD"
  }
}, {
  "$class": "org.insurance.DelayInsurancePolicy",
  "delayInsurancePolicyId": "SJ3357689993780",
  "escrow": 0,
  "insurer": "resource:org.insurance.Insurer#admin@safeflight.com",
  "insuree": "resource:org.insurance.Insuree#john@jmail.com",
  "policyState": "CANCELLED",
  "flightDetails": {
    "$class": "org.insurance.FlightDetails",
    "flightStatus": "CANCELLED",
    "flightDesignator": "LH409",
    "departureDate": "2019-04-22T18:42:11.941Z",
    "departureAirport": "MAD"
  }
} ];

//'http://localhost:3005/api/queries/selectInsurerDelayInsurancePolicies?insureeId=resource%3Aorg.insurance.Insurer%23admin%40safeflight.com'
//"resource:org.insurance.Insurer#admin@safeflight.com"
export const mockInsurerPolicies = [{
  "$class": "org.insurance.DelayInsurancePolicy",
  "delayInsurancePolicyId": "SJ1557591139667",
  "escrow": 0,
  "insurer": "resource:org.insurance.Insurer#admin@safeflight.com",
  "insuree": "resource:org.insurance.Insuree#john@jmail.com",
  "policyState": "CANCELLED",
  "flightDetails": {
    "$class": "org.insurance.FlightDetails",
    "flightStatus": "UNDEFINED",
    "flightDesignator": "LH400",
    "departureDate": "2019-04-22T18:42:11.941Z",
    "departureAirport": "MAD"
  }
}, {
  "$class": "org.insurance.DelayInsurancePolicy",
  "delayInsurancePolicyId": "SJ1557591363444",
  "escrow": 10,
  "insurer": "resource:org.insurance.Insurer#admin@safeflight.com",
  "insuree": "resource:org.insurance.Insuree#john@jmail.com",
  "policyState": "INITIATED",
  "flightDetails": {
    "$class": "org.insurance.FlightDetails",
    "flightStatus": "ONSCHEDULE",
    "flightDesignator": "LH401",
    "departureDate": "2019-04-22T18:42:11.941Z",
    "departureAirport": "MAD"
  }
}, {
  "$class": "org.insurance.DelayInsurancePolicy",
  "delayInsurancePolicyId": "SJ1557592181294",
  "escrow": 10,
  "insurer": "resource:org.insurance.Insurer#admin@safeflight.com",
  "insuree": "resource:org.insurance.Insuree#john@jmail.com",
  "policyState": "INITIATED",
  "flightDetails": {
    "$class": "org.insurance.FlightDetails",
    "flightStatus": "UNDEFINED",
    "flightDesignator": "LH402",
    "departureDate": "2019-04-22T18:42:11.941Z",
    "departureAirport": "MAD"
  }
}, {
  "$class": "org.insurance.DelayInsurancePolicy",
  "delayInsurancePolicyId": "SJ1557592499874",
  "escrow": 100,
  "insurer": "resource:org.insurance.Insurer#admin@safeflight.com",
  "insuree": "resource:org.insurance.Insuree#john@jmail.com",
  "policyState": "PENDING",
  "flightDetails": {
    "$class": "org.insurance.FlightDetails",
    "flightStatus": "ONSCHEDULE",
    "flightDesignator": "LH403",
    "departureDate": "2019-04-22T18:42:11.941Z",
    "departureAirport": "MAD"
  }
}, {
  "$class": "org.insurance.DelayInsurancePolicy",
  "delayInsurancePolicyId": "SJ1557592513500",
  "escrow": 100,
  "insurer": "resource:org.insurance.Insurer#admin@safeflight.com",
  "insuree": "resource:org.insurance.Insuree#john@jmail.com",
  "policyState": "PENDING",
  "flightDetails": {
    "$class": "org.insurance.FlightDetails",
    "flightStatus": "DELAYED",
    "flightDesignator": "LH404",
    "departureDate": "2019-04-22T18:42:11.941Z",
    "departureAirport": "MAD"
  }
}, {
  "$class": "org.insurance.DelayInsurancePolicy",
  "delayInsurancePolicyId": "SJ3357592513500",
  "escrow": 100,
  "insurer": "resource:org.insurance.Insurer#admin@safeflight.com",
  "insuree": "resource:org.insurance.Insuree#john@jmail.com",
  "policyState": "PENDING",
  "flightDetails": {
    "$class": "org.insurance.FlightDetails",
    "flightStatus": "ONTIME",
    "flightDesignator": "LH405",
    "departureDate": "2019-04-22T18:42:11.941Z",
    "departureAirport": "MAD"
  }
}, {
  "$class": "org.insurance.DelayInsurancePolicy",
  "delayInsurancePolicyId": "SJ3357689513500",
  "escrow": 100,
  "insurer": "resource:org.insurance.Insurer#admin@safeflight.com",
  "insuree": "resource:org.insurance.Insuree#john@jmail.com",
  "policyState": "PENDING",
  "flightDetails": {
    "$class": "org.insurance.FlightDetails",
    "flightStatus": "CANCELLED",
    "flightDesignator": "LH406",
    "departureDate": "2019-04-22T18:42:11.941Z",
    "departureAirport": "MAD"
  }
}, {
  "$class": "org.insurance.DelayInsurancePolicy",
  "delayInsurancePolicyId": "SJ3357689513780",
  "escrow": 0,
  "insurer": "resource:org.insurance.Insurer#admin@safeflight.com",
  "insuree": "resource:org.insurance.Insuree#john@jmail.com",
  "policyState": "PAIDTOINSURER",
  "flightDetails": {
    "$class": "org.insurance.FlightDetails",
    "flightStatus": "ONTIME",
    "flightDesignator": "LH407",
    "departureDate": "2019-04-22T18:42:11.941Z",
    "departureAirport": "MAD"
  }
}, {
  "$class": "org.insurance.DelayInsurancePolicy",
  "delayInsurancePolicyId": "SJ3357689993780",
  "escrow": 0,
  "insurer": "resource:org.insurance.Insurer#admin@safeflight.com",
  "insuree": "resource:org.insurance.Insuree#john@jmail.com",
  "policyState": "PAIDTOINSUREE",
  "flightDetails": {
    "$class": "org.insurance.FlightDetails",
    "flightStatus": "DELAYED",
    "flightDesignator": "LH408",
    "departureDate": "2019-04-22T18:42:11.941Z",
    "departureAirport": "MAD"
  }
}, {
  "$class": "org.insurance.DelayInsurancePolicy",
  "delayInsurancePolicyId": "SJ3357689993780",
  "escrow": 0,
  "insurer": "resource:org.insurance.Insurer#admin@safeflight.com",
  "insuree": "resource:org.insurance.Insuree#john@jmail.com",
  "policyState": "CANCELLED",
  "flightDetails": {
    "$class": "org.insurance.FlightDetails",
    "flightStatus": "CANCELLED",
    "flightDesignator": "LH409",
    "departureDate": "2019-04-22T18:42:11.941Z",
    "departureAirport": "MAD"
  }
}, {
  "$class": "org.insurance.DelayInsurancePolicy",
  "delayInsurancePolicyId": "SK1557597316660",
  "escrow": 10,
  "insurer": "resource:org.insurance.Insurer#admin@safeflight.com",
  "insuree": "resource:org.insurance.Insuree#kyle@jmail.com",
  "policyState": "INITIATED",
  "flightDetails": {
    "$class": "org.insurance.FlightDetails",
    "flightStatus": "UNDEFINED",
    "flightDesignator": "LH410",
    "departureDate": "2019-04-22T18:42:11.941Z",
    "departureAirport": "MAD"
  }
}]

  export const airports = [{
      "name": "Hartsfield-Jackson Atlanta International Airport",
      "code": "ATL"
    }, {
      "name": "Beijing Capital Airport",
      "code": "PEK"
    }, {
      "name": "Dubai International Airport",
      "code": "DXB"
    }, {
      "name": "Los Angeles International Airport",
      "code": "LAX"
    }, {
      "name": "Tokyo International Airport",
      "code": "HND"
    }, {
      "name": "Chicago O'Hare International Airport",
      "code": "ORD"
    }, {
      "name": "London Heathrow Airport",
      "code": "LHR"
    }, {
      "name": "Hong Kong International Airport",
      "code": "HKG"
    }, {
      "name": "Pudong International Airport",
      "code": "PVG"
    }, {
      "name": "Charles de Gaulle International Airport",
      "code": "CDG"
    }, {
      "name": "Schiphol Airport",
      "code": "AMS"
    }, {
      "name": "Indira Gandhi International Airport",
      "code": "DEL"
    }, {
      "name": "Frankfurt International Airport",
      "code": "FRA"
    }, {
      "name": "New Incheon International Airport",
      "code": "ICN"
    }, {
      "name": "Ataturk Hava Limani Airport",
      "code": "IST"
    }, {
      "name": "Jakarta International Airport",
      "code": "CGK"
    }, {
      "name": "Singapore Changi Airport",
      "code": "SIN"
    }, {
      "name": "Bangkok International Airport",
      "code": "BKK"
    }, {
      "name": "Kuala Lumpur International Airport",
      "code": "KUL"
    }, {
      "name": "Barajas Airport",
      "code": "MAD"
    }, {
      "name": "San Francisco International Airport",
      "code": "SFO"
    }

  ];

export const mockInsuree = [{
  "$class": "org.insurance.Insuree",
  "insureeId": "john@jmail.com",
  "firstName": "John",
  "lastName": "Doe",
  "balance": 50
  }];  


export const mockInsurer = [{
  "$class": "org.insurance.Insurer",
  "insurerId": "admin@safeflight.com",
  "name": "Safe Flight",
  "balance": 540
  }];    

export const mockInsurers = [
{
  "$class": "org.insurance.Insurer",
  "insurerId": "admin@safeflight.com",
  "name": "Safe Flight",
  "balance": 500
},
{
  "$class": "org.insurance.Insurer",
  "insurerId": "admin@micropolicies.com",
  "name": "MicroPolicies",
  "balance": 510
},
{
  "$class": "org.insurance.Insurer",
  "insurerId": "admin@redcross.com",
  "name": "Red Cross",
  "balance": 540
}


];      