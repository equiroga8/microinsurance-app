//'http://localhost:3005/api/queries/selectInsureeDelayInsurancePolicies?insureeId=resource%3Aorg.insurance.Insuree%23john%40jmail.com'
//"resource:org.insurance.Insuree#john@jmail.com"
export const mockInsureePolicies =[
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
]

//'http://localhost:3005/api/queries/selectInsurerDelayInsurancePolicies?insureeId=resource%3Aorg.insurance.Insurer%23admin%40safeflight.com'
//"resource:org.insurance.Insurer#admin@safeflight.com"
export const mockInsurerPolicies =[
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
]