# Hdu Components and Roles


This section describes the core components of the HDU API ecosystem and their responsibilities.

## HDU API Core

The HDU API Core is the central engine of the HDU API system. It is responsible for:

- Defining data templates
- Providing APIs for retrieving data templates
- Storing standardized codes
- Centralizing system mappings
- Validating and storing data templates received from EMRs
- Performing daily data aggregation using stored mappings
- Performing periodic data aggregation (weekly, monthly, etc.)
- Pushing processed data to destination systems
- Periodic storage and cleaning of client records
- Communicating with the Console for workflow processing

## HDU API Console

The HDU API Console serves as a dynamic workflow processing engine. Its responsibilities include:

- Storing workflows
- Scheduling workflows
- Processing workflows
- Communicating with the HDU API Core to facilitate data requests

