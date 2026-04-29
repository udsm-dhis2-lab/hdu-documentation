# Troubleshooting & Errors

This section helps developers identify and resolve common issues encountered when integrating with the HDU API.

When a request fails, the HDU API returns a structured error response indicating the cause of the failure and, where possible, guidance on how to fix it.

## Common Errors
| Error                      | Possible Cause                                    | Recommended Solution                            |
| -------------------------- | ------------------------------------------------- | ----------------------------------------------- |
| 401 Unauthorized           | Missing or incorrect authentication credentials   | Verify username and password in request headers |
| 400 Bad Request            | Invalid JSON structure or missing required fields | Validate payload format and required blocks     |
| 404 Not Found              | Incorrect API endpoint                            | Confirm the API URL and endpoint path           |
| 500 Internal Server Error  | Server-side issue                                 | Retry request or contact support                |
| Missing `visitDetails`     | Required block not included                       | Ensure `visitDetails` is provided               |
| Invalid `clientIdentifier` | Client not registered or incorrect ID             | Register client first or verify identifier      |
| Invalid standardized code  | Incorrect ICD/LOINC/SNOMED code                   | Use valid and mapped standard codes             |

## Example Error Response
```json
{
  "status": "ERROR",
  "statusCode": 400,
  "message": "Invalid DataTemplate structure",
  "errors": [
    "visitDetails is required",
    "Invalid diagnosis code"
  ]
}
```

## How to Troubleshoot

When an error occurs, follow these steps:

### 1. Check the status code
- 4xx → Issue with the request  
- 5xx → Issue on the server  

### 2. Review the error message
- Identify which field or block caused the issue  

### 3. Validate your payload
- Ensure JSON format is correct  
- Confirm required blocks are included  

### 4. Verify identifiers
- Ensure `clientIdentifier` exists  
- Ensure `visitId` is correct and consistent  

### 5. Check authentication
- Confirm credentials are correct  
- Ensure headers are properly set  



## Debugging Tips

- Use tools like Postman or cURL to test requests  
- Log both request payloads and responses in your system  
- Start with a minimal working payload, then expand  
- Reuse known working examples from the documentation  



## When to Contact Support

If the issue persists after troubleshooting:

- Provide the request payload  
- Include the error response  
- Share the timestamp of the request  

This helps in faster diagnosis and resolution.