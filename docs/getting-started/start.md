# Getting Started

This section provides the basic information required to begin integrating healthcare systems with the **Health Data Universal (HDU)** platform.

Before implementing HDU APIs, integrating systems should understand the prerequisites, the overall integration workflow, and the authentication mechanism used to access the HDU services.



## Prerequisite Knowledge

To successfully integrate with the **HDU API**, implementers are expected to have knowledge of:

- RESTful APIs  
- JSON payload structures  
- HTTP request methods such as **GET**, **POST**, **PUT**, and **PATCH**  
- Health information system workflows  
- Facility-based health data capture processes  

Familiarity with healthcare coding standards such as **ICD-10** and **LOINC** may also be helpful when working with standardized health data.



## Integration Workflow

The **HDU platform** enables communication between facility-level health systems and national health information platforms.

The general integration workflow follows the sequence below:

```text
EMR/EHR → Health Information Mediator (HIM) → HDU API → Beneficiary Systems
```

### Step 1: Data Generation at Health Facilities

Facility systems such as **EMR**, **EHR**, or **Laboratory Information Systems** capture clinical and service data during healthcare delivery.

These systems structure the captured information using the **HDU Data Template standard**.



### Step 2: Data Transmission through the Health Information Mediator (HIM)

The structured data is transmitted through **Web APIs** to the **Health Information Mediator (HIM)**.

The HIM acts as an **interoperability gateway** responsible for routing requests and validating communication between systems.



### Step 3: Processing by the HDU API

After validation by the **HIM**, the payload is forwarded to the **HDU API Core**, where it undergoes:

- Data validation  
- Standard code verification  
- Data processing  
- Storage of health records  



### Step 4: Distribution to Beneficiary Systems

Once processed, the data can be aggregated or forwarded to national health information systems such as:

- **HMIS (DHIS2)**
- **eIDSR**
- Other national health reporting systems

This workflow enables **automated and standardized health data exchange** between systems.



## Authentication

All **HDU API endpoints** are secured to ensure authorized access to health data.

Integrating systems must **authenticate every request** before interacting with the HDU API.

Currently, the HDU platform uses **Basic Authentication**.

Authentication credentials are issued to each integrating system and must be included in the request headers when making API calls.

These credentials are provided during the **system integration process**.



## Supported Authentication Methods

The HDU platform is designed to support multiple authentication mechanisms, including:

- Basic Authentication  
- Token-based Authentication  
- Bearer Authentication  
- Certificate-based Authentication  

At present, **Basic Authentication** is the officially supported method for all integrations.

Other authentication mechanisms may be introduced in future versions of the platform.

## Next Step

After understanding the integration workflow and authentication requirements, the next step is to learn how **HDU structures health data using Data Templates**.

The next section, **DataTemplate Overview**, explains:

- What a **DataTemplate** is
- Why **DataTemplate blocks** exist
- How **MTUHA registers** shaped the template structure