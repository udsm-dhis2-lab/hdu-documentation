# Difference Between Client Registry DataTemplate API and DataTemplate API

The HDU platform provides two ways of submitting data:

- Client Registry DataTemplate API  
- General DataTemplate API  

Although both use a DataTemplate structure, they serve different purposes within the HDU ecosystem.

Understanding the difference is essential for implementing correct and efficient integrations.



## Client Registry DataTemplate API

The Client Registry DataTemplate API is specifically designed for managing client (patient) demographic information.

It is used to:

- Register new clients  
- Update existing client information  
- Maintain a consistent and unique client identity across systems  

### Key Characteristics

- Focuses on `demographicDetails` and identifiers  
- Used for CREATE and UPDATE operations on clients  
- Returns a `clientIdentifier` for linking records  
- Ensures deduplication and identity management  

### Typical Use Case

- Registering a new patient before sending clinical data  
- Updating patient demographic details  



## General DataTemplate API

The General DataTemplate API is used to submit clinical and service delivery data.

It is responsible for:

- Capturing visit information  
- Recording diagnoses, treatments, and lab results  
- Supporting Shared Health Records and other modules  

### Key Characteristics

- Uses multiple blocks such as:  
  - `visitDetails`  
  - `clinicalInformation`  
  - `diagnosisDetails`  
  - `laboratoryRequestDetails`  
- Supports full payload submission and trigger-based updates  
- Handles clinical workflows and service data  

### Typical Use Case

- Submitting a patient visit  
- Sending laboratory results  
- Recording diagnosis and treatment  



## Key Differences

| Feature | Client Registry DataTemplate API | General DataTemplate API |
|--------|----------------------------------|---------------------------|
| Purpose | Manage client identity | Submit clinical and visit data |
| Main Block | demographicDetails | visitDetails + clinical blocks |
| Operations | Create and update clients | Create and update visits and records |
| Output | clientIdentifier | visit and clinical records |
| Usage | First step in integration | After client is registered |



## Recommended Approach

⚠️ **Important Guidance for Developers**

It is strongly recommended to use the:

👉 **Client Registry DataTemplate API for all client-related operations (CREATE, UPDATE)**

This ensures:

- Proper client identification  
- Avoidance of duplicate records  
- Consistency across all integrated systems  

After registering the client, developers should use the:

👉 **General DataTemplate API to submit Shared Health Records and clinical data**

## Summary Workflow

A correct integration should follow this sequence:
```text
1. Register Client → Client Registry API
2. Receive clientIdentifier
3. Submit Visit Data → DataTemplate API
4. Update records using visitId when needed
```

## Final Note

Using the correct API for the correct purpose ensures:

- Data consistency across systems
- Reliable patient tracking
- Accurate reporting and analytics