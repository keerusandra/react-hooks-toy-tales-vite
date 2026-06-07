Toy Tales
Overview

Toy Tales is a React application that allows users to manage a collection of toys. Users can view toys, add new toys, delete toys, and like toys. Data is persisted using a JSON server.

Setup Instructions
1. Install dependencies
npm install
2. Start backend server
npm run server

Backend runs at:

http://localhost:3001
3. Start frontend application
npm run dev

Frontend runs at:

http://localhost:3000
4. Run tests
npm run test
API Endpoints
GET /toys

Fetch all toys.

Response:

[
  {
    "id": 1,
    "name": "Toy Name",
    "image": "image-url",
    "likes": 5
  }
]
POST /toys

Create a new toy.

Headers:

{
  "Content-Type": "application/json"
}

Body:

{
  "name": "string",
  "image": "string",
  "likes": number
}
DELETE /toys/:id

Delete a toy by ID.

PATCH /toys/:id

Update toy likes.

Body:

{
  "likes": number
}

Features / User Stories
1. View Toys
On page load, the app fetches all toys from /toys
Toys are stored in React state
Each toy is displayed using a ToyCard component
2. Add Toy
Users can submit the ToyForm
Sends a POST request to /toys
Newly created toy is added to state and rendered immediately
3. Delete Toy
Clicking “Donate to GoodWill” deletes a toy
Sends DELETE request to /toys/:id
Removes toy from UI after successful response
4. Like Toy
Clicking “Like” increases toy likes
Sends PATCH request to /toys/:id
Updates likes in both backend and UI

Technical Notes
State is managed in the top-level component (App)
Uses useEffect for initial data fetching
Implements controlled form inputs
Uses inverse data flow (props passed down, functions passed up)
All updates sync with backend via REST API

Project Structure
App.jsx – Main state and API logic
ToyContainer.jsx – Renders list of toys
ToyCard.jsx – Displays individual toy
ToyForm.jsx – Handles toy creation form
Header.jsx – Static header component
