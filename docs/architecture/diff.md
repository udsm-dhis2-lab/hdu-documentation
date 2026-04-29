# Difference Between Client Registry DataTemplate API and DataTemplate API

The HDU platform provides multiple APIs that use the DataTemplate structure for exchanging health information. Two of the most commonly used APIs are:

- Client Registry DataTemplate API
- General DataTemplate API

Although both APIs use the DataTemplate structure, they serve different purposes in the HDU ecosystem.

Understanding the difference between these APIs is important for correct system integration.



## Client Registry DataTemplate API

The Client Registry DataTemplate API is used to manage client identity and demographic information.

This API is responsible for:

- Registering new clients
- Updating client demographic information
- Managing client identifiers
- Preventing duplicate client records
- Ensuring consistent client identification across facilities

The Client Registry serves as the central source of truth for client identity within the HDU ecosystem.

Typical blocks used with this API include:

| Block | Purpose |
|------|---------|
| facilityDetails | Identifies the facility submitting the request |
| demographicDetails | Contains client demographic information |
| visitDetails | Identifies the encounter associated with the client |



## General DataTemplate API

The General DataTemplate API is used to submit clinical and service-related information associated with a client.

This API is used after a client has already been identified in the system.

It allows healthcare systems to submit various types of healthcare service data, including:

- Clinical observations
- Diagnoses
- Laboratory requests and results
- Medications and treatments
- Radiology services
- Billing information
- Referral information

These records are stored within the Shared Health Records system.



## Key Differences

| Feature | Client Registry DataTemplate API | General DataTemplate API |
|-------|----------------------------------|---------------------------|
| Primary Purpose | Manage client identity | Submit clinical and service data |
| Data Type | Demographic information | Clinical and service records |
| System Component | Client Registry | Shared Health Records |
| When Used | During client registration or update | During service delivery reporting |



## Recommended Integration Approach

For proper integration with the HDU platform, healthcare systems should follow this workflow:

1. Register the client using the Client Registry DataTemplate API.  
2. Submit clinical service data using the General DataTemplate API.  
3. Update or extend records by submitting additional DataTemplate blocks for the same visit.

This workflow ensures that all clinical records are correctly linked to a valid client identity.



## Important Developer Guidance

⚠️ **Important**

Developers are advised to use the **Client Registry DataTemplate API** for all client-related operations, including:

- Creating new clients
- Updating client demographic details
- Managing client identifiers

The **General DataTemplate API** should only be used for submitting clinical or service data associated with an existing client.

Using the correct API ensures that client identities remain consistent and prevents duplicate records within the system.