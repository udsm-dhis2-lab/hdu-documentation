# Updating Client Records

The Client Registry allows existing client records to be updated either by replacing the full client profile or by modifying specific attributes only.  

Both update operations require the unique client identifier (`hcr-id`) together with the identifier type (`idType`) as part of the request.



## Update Full Client Record (PUT)

This operation is used to replace the entire client profile with updated information. It is recommended when multiple demographic or administrative fields have changed.

**Method:** PUT  
**Endpoint:** `/api/v1/hduApi/cr/clients/{hcr-id}?idType={idType}` 
**Description:**  
Updates the existing client record by submitting a complete client object.

**Common use cases include:**
- Updating demographic information  
- Correcting identifiers  
- Modifying address or contact details  



## Update Specific Client Attributes (PATCH)

This operation is used to update only selected fields of a client record without replacing the full profile.

**Method:** PATCH  
**Endpoint:** `/api/v1/hduApi/cr/clients/{hcr-id}?idType={idType}`

**Description:**  
Updates specific attributes of the existing client record.

**Common use cases include:**
- Updating phone number or email  
- Adding a new identifier  
- Correcting a single demographic field  



### Implementation Notes

- The `hcr-id` represents the unique client identifier assigned by the HDU Client Registry.  
- The `idType` parameter specifies the identifier type being used (e.g. MRN, HCRCODE, NIDA).  
- Authentication is required for all update operations using Basic Authentication.