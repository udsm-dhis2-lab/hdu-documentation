## Successfully Saving Shared Records via API Response Payload

# Table 4.4.1: Successfully Saving Shared Records API Response Information

| Object              | Description                                                                 | Data type | Possible example           |
|---------------------|-----------------------------------------------------------------------------|-----------|----------------------------|
| status              | Overall status of the operation (e.g., SUCCESS, FAILURE).                   | string    | SUCCESS                    |
| statusCode          | HTTP-like status code representing the result (e.g., 200 = OK).             | number    | 200                        |
| newClients          | Number of new client records successfully created.                          | number    | 1                          |
| updatedClients      | Number of existing client records updated.                                  | number    | 0                          |
| failedClients       | Number of client records that failed to process.                            | number    | 0                          |
| ignoredClients      | Number of client records ignored by the system.                             | number    | 0                          |
| summary[].hcrCode   | Unique Health Client Registry (HCR) code assigned to the client.             | string    | HCR-M-00099-15021998       |
| summary[].message   | Message describing the outcome of client registration.                      | string    | Client registered successfully |

