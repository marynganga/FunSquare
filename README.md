# FunSquare

## Description

FunSquare is a search-and-discovery web application that displays personalized recommendations of venues such as restaurants according to the category of place and location chosen. Upon choosing a result, more details about it are shown and reviews are listed. A user then has the option to add an event to their Google Calendar.

Funsquare helps you find the perfect places to go with friends, discover the best food, nightlife, and entertainment in your area. It achieves all this by utilizing the FourSquare API. View the site at: https://funsquare-2a4e9.firebaseapp.com/

## Features
* Users can choose a category of place to search.
* Users can enter a location eg. Nairobi or Tokyo.
* A list with the recommended places is displayed.
* Users can click a recommended venue to see more inforamtion about it.
* Each venue info displays reviews by previous visitors and a google map with the venues location. 

### Built by [Mary Ng'ang'a](https://github.com/marynganga), [Virginia Ndung'u](https://github.com/VirginiaNdungu1), [Angela Gathu](https://github.com/agathu87) and [Erick Mutua](https://github.com/rickmutua)
  
## Technologies Used

 * HTML
 * CSS
 * BOOTSTRAP
 * EMBER
 
## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)


## Installation

* `git clone https://github.com/marynganga/FunSquare.git`
* `cd FunSquare`
* `npm install`
* `bower install`

## Deploying

* To deploy the application to firebase, create a new firebase project for FunSquare: https://console.firebase.google.com/u/0/
* Then in the terminal:

      * $ npm install -g firebase-tools
      * $ firebase login (login to the same gmail accout with which you created the firebase project)
      * $ firebase init (this will prompt several questions, choose the following options)
          * ? What Firebase CLI features do you want to setup for this directory? Hosting: Configure and deploy Firebase                   Hosting sites
          * ? Select a default Firebase project for this directory: Choose the firebase project you created for FunSquare
          * ? What do you want to use as your public directory? dist
          * ? Configure as a single-page app (rewrite all urls to /index.html)? No
          * ? File public/index.html already exists. Overwrite? No
      * $ firebase deploy -m "Initial Deployment" (to deploy the site to firebase, you can view the site on the hosting url provided)
* For further instructions, visit https://firebase.google.com/docs/hosting/deploying or alternatively https://medium.com/google-cloud/google-firebase-can-host-your-website-and-single-page-application-4e9c9e0c6a95.

## Running / Development

* You will need to get Client Id and Client Secret Keys from FourSquare by creating an app here:  https://foursquare.com/developers/apps (You must have deployed the app first).
* Create a .env file in the top level of the directory.
* Input your Client Id and Client Secret keys into it as such:

          in FunSquare/.env
              export CLIENT_ID="<your-client-id-key>";
              export CLIENT_SECRET="<your-client-secret-key>"
           
* `source .env`
* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Further Deployment
* After making changes to the application files, you can update the deployed firebase site as follows:
      
      * $ firebase deploy -m "<type-of-changes-made>"
      
## Code Generators

* Make use of the many generators for code, try `ember help generate` for more details.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build` (development)
* `ember build --environment production` (production)

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

## License

MIT &copy;2017 [Mary Ng'ang'a](https://github.com/marynganga), [Virginia Ndung'u](https://github.com/VirginiaNdungu1), [Angela Gathu](https://github.com/agathu87) and [Erick Mutua](https://github.com/rickmutua)
