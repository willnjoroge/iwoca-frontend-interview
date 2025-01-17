# Code Review

## What does this do?

Implement rendering of Applications retrieved from the Backend

## Where to start?

- **Applications.tsx** - add API call to Backend to fetch applications with query parameters
- **SingleApplication.tsx** - format data values and edit template
- **SingleApplication.module.css** - align styling of each application with Figma

## Any tests?

# Assumptions

- Currency is assumed to always be £
- Date follows format of DD-MM-YYYY

# Future Improvements

- State: implement some form of state management (Redux)
- Validations: the application date can be after the expiry date which would be an invalid application (though this would most likely be corrected in the BE)
