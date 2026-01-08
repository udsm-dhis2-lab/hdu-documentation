## List of APIs provided by EMRs/EHRs
EMRs/EHRs should have these APIs to enable HDU API to retrieve the health records when another EMR requests HDU API, which can be found on the HDU API database.


# Table 4.2.1: List of APIs provided by EMRs/EHRs

| S/n | API                                                              | Request Type | Description |
|-----|------------------------------------------------------------------|--------------|-------------|
| 1   | `../../../api/emrHealthRecords?id={id}&idType={idType}`          | GET          | For HDU API to retrieve health records from HF EHR by query parameters `[id, idType]`. The response should reflect data template |
| 2   | `../../../api/emrHealthRecords`                                  | POST         | For HDU API to retrieve health records from HF EHR by parameters defined in a supplied payload. HF EHR will use the supplied parameters to retrieve the visit history of the client. <br /> If `numberOfVisits` is not defined, the last visit will be returned; otherwise, visits will be returned in descending order by visit date. |
| 3   | `../api/emrReceiveReferral/<hfrCode>`                            | POST         | On a daily basis/referral, the HDU API receives a data template. Once the block for `referralDetails` is filled, the HDU API triggers a payload to the destination EMR (HFR Code) following the format defined. |


# Table 4.2.2: Sample payloads supplied by HDU API to retrieve health records


| Payload | Description |
|---------|-------------|
| See sample payload (JSON) below. | `mrn` will be supplied when there is a reference for the client in the Client Registry; `otherIdentifiers` will be provided when HDU API (via the Client Registry) knows additional identifiers; if `visitId` is available it can be supplied to fetch a specific visit. |

**Sample payload (JSON):**
```json
{
  "identifier": "19980215-03453-00004-21",
  "identifierType": "NIDA",
  "mrn": "",
  "otherIdentifiers": [
    {
      "id": "34783745",
      "type": "VOTERID"
    }
  ],
  "numberOfVisits": "",
  "visitId": ""
}


