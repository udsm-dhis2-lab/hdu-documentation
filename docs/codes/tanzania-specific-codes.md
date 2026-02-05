# Tanzania-Specific Standard Codes

The HDU API provides a set of general and country-specific standard code lists used for billing, insurance, clinical services, public health programs, and administrative classifications.

These codes support consistent reporting and interoperability across national health systems.

## General Standard Codes APIs

### Financial & Insurance Codes

| API | Method | Description |
|----|-------|-------------|
| /generalCodes/insurances | GET | Retrieve insurance providers |
| /generalCodes/exemptions | GET | Retrieve exemption types |
| /generalCodes/billings | GET | Retrieve standard billing codes |

### Clinical & Service Codes

| API | Method | Description |
|----|-------|-------------|
| /generalCodes/radiology | GET | Radiology test codes |
| /generalCodes/vaccinations | GET | Vaccination codes (LOINC-based) |
| /generalCodes/prophylaxes | GET | Prophylaxis codes |
| /generalCodes/allergies | GET | Allergy codes |
| /generalCodes/chronicConditions | GET | Chronic condition codes |

### Program & Facility Codes

| API | Method | Description |
|----|-------|-------------|
| /generalCodes/deliveryMethods | GET | Delivery method codes |
| /generalCodes/birthComplications | GET | Birth complication codes |
| /generalCodes/familyPlanningMethods | GET | Family planning methods |
| /generalCodes/productLists | GET | Product/MSD codes |
| /generalCodes/providerSpecialities | GET | Provider specialties |
| /generalCodes/standardBodySystems | GET | Body system references |
| /generalCodes/identifierTypes | GET | Identifier types |
