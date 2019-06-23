## Configuration

This project uses MapboxGL as a map provider. Therefore we need a Mapbox access key in order to make the map work.

To do so, we need to go to https://www.mapbox.com/

* Then click on your avatar icon. You should see a floating menu.
* Now, click on Account option on the floating menu
* You will be redirected to user's account page. If you scroll down a bit, you will see a card with the title Access tokens.
* Copy the value of the box named "Default public token" and paste after the REACT_APP_MAPBOX_ACCESS_TOKEN= in your .env-template file and save it.
* Finally, rename the .env-template to .env.

Example of how a `.env` should looks like:

```
REACT_APP_MAPBOX_ACCESS_TOKEN=werwerfsdf23432496YXJ0ZGluaXoiLCJhIjoiY2p4N3FraGF1MGNkMjNubGd1bGsdfsfsdfdsf.WpMj93ubpQKuParKeCCccA
REACT_APP_API=http://www.mocky.io/v2
```

## Dependencies

Execute `yarn install` inside `orkestro-dashboard` folder.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
