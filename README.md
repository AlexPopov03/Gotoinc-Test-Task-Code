# Parcel List
---
#### Technologies that were used:

Webpack, ReactJS, Bootstrap

#### Application logic:

The user should enters the parcel data in form, as: *departure city, receiving city, type of parcel, date of dispatch and parcel description*

Then add this parcel data in parcel list under the form by using the button *'Add parcel'*. Form has **important fields (*)**, as:  *departure city, receiving city and date of dispatch* and **non important**: *type of parcel and parcel description*

If user won`t fill one of **important fields (*)**, user will have a modal window which tells the user that an error has occurred and he needs to fill in all the **important fields (*)**. User can close this modal window by using the button *'Close'* or click on backdrop (aroud the modal window)

Every parcel has *'Delete'* button, which allows the user to delete the selected parcel from the list

Same way, each package has its own *"Parcel number"*, which is displayed as the first element in the parcel


# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

To install all necessary dependencies

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
