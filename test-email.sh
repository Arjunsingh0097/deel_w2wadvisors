#!/bin/bash

# Test email API using curl
curl -X POST http://localhost:3000/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+91 1234567890",
    "companyName": "Test Company",
    "employeeSize": "51-200",
    "services": ["Payroll Management", "HR Outsourcing"],
    "message": "This is a test message from curl"
  }'
