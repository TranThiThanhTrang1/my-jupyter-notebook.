# Getting Started with your Lab Sandbox
***Important Note: This Lab Sandbox environment does not have open access to the internet.
If you'd like to use any external assets to help with overall page functionality and design
(ex: images, stylesheets, JavaScript files) please upload these files directly to the Lab Sandbox
environment by dragging and dropping them from your desktop to your Visual Studio Code lab.
You can then use relative links from your html file content (instead of "http" or "https" links)
to access these assets for your site build****

## What tools are already installed in this environment?
- Git (git --version)
- Node.js (node --version) - you will still need local npm installs however.
- Meteor - you will still need to use meteor add to build your applications.
- VSCode Browser Preview

Your development environment is set up for you as follows:
- **Text editor:** Your text editor will be Visual Studio Code.  
- **Browser:** You will be using the VSCode HTML viewer   
extension as your browser. A full-screen browser option is also available
to enable developer tool access in browser. More details can be found below.
- **Command line shell:** You will be using the **Terminal**  
in VSCode. For instructions on how to use the shell in your   
Lab Sandbox, see the Lab Sandbox Learner Resource Center article.
- **Files required for the exercises:**   
Follow the instructions given in the course. Only the files in the /home/coder/project
subfolder will persist between sessions and you should store your working files there.   

### Managing your Sandbox:
1. After opening the lab for the first time or if you have not  
 used it for a while, it opens to a blank IDE. If this is   
 the case, click on the **Explore** icon on the left column   
 (the one that looks like two sheets of paper stacked together).
 Then, click on the **Open Folder** button. In the list that   
 appears, select **project** and click **OK**

2. Through your coursework, you'll be creating and managing folders
  called **node_modules** for your web development projects.  
  If your lab has been inactive for 2 weeks, you may notice that your  
  node_modules folder is not present in your sandbox. This is expected
  in your sandbox, so please do not worry!   

  To regenerate your node_modules folder, you can:  
  1) Open your terminal and navigate (ex: "cd") to the project folder where
  you'd like the node_modules folder to be stored.   
  Note: Your package.json file should also be stored in this directory.   

  1) Run the command **"npm install"** which will restore node_modules.  

### Viewing your lab files with the VSCode live server

1)Click on Go Live icon at the bottom-right of your lab environment alongside the notification (bell) icon.
2)You should see the server starting message -"Server is Started at port : 5500"
3)Click on the Browser Preview Icon from the left menu of the lab environment.
4)A browser preview window should open for you and on the address bar type the URL - localhost:5500/
5)You should see all your lab files in the browser preview window.

### Viewing your lab files with Browser Tab Preview for full access to Dev Tools.

1. Before running the app, set the route URL using the following command:

export ROOT_URL=http://localhost:3000/lab/

2. Run meteor to run your app. This will set the app to run at:

 http://localhost:3000/lab/

NOTE: If you want to run the app back at http://localhost:3000, then you need to use below command: 
export ROOT_URL=http://localhost:3000/

3. You'll be able to preview your web content using the following path- https://<your lab id>.labs.coursera.org/lab (in a new browser tab for full browser dev tools access).
 
 Input the following "https://<your lab id>.labs.coursera.org/lab" in your URL browser toolbar, replacing <your lab id> with the value you see from the top Lab iframe "Help" icon.

### Installing Packages
Installing packages is part of the web development learning experience. This sandbox
provides an in-browser environment for you to complete the remaining installations
listed as part of this course along with your course instructor.
You can use the ***Terminal** feature of this environment to install any
packages or libraries. **Terminal > New Terminal***

## Course Specific Notes

### How to run the course lab files?

1. Download the zip files of the lab from the course, the lab files are given week-wise.
2. Upload the lab files to the lab environment.
3. Now, change the working directory to your lab folder. For example: 

If you want to work in Week1 folder then do : 
cd Week1

4. Similarly, go to the working directory where .meteor folder is available. For example: 

Week1>week_1_image_share>.meteor

cd week_1_image_share

5. Once you are in the working directory where .meteor files are available run the following commands: 

meteor npm install

and then 

meteor 

6. You should see your application running at:

App running at: http://localhost:3000/

7. Open the Browser Preview by clicking the Browser preview icon from the left menu and paste the URL http://localhost:3000/ in the address bar to see the results. 


### Changes Required to be made in the original files in case you encounter any error: 

1. Inside the course lab folder where you will find the .meteor folder, please change the following : 

a) release folder : change the version to 2.5.1 instead of 1.4.3 and Save the file.
b) packages folder: (in case you encounter version issues with the ones given in the course files)
Week 1: 
meteor-base@1.0.4             # Packages every Meteor app needs to have
mobile-experience@1.0.4       # Packages for a great mobile UX
mongo@1.1.14                   # The database Meteor supports right now
blaze-html-templates    # Compile .html files into Meteor Blaze views
reactive-var@1.0.11            # Reactive variable for tracker
jquery@1.11.10                  # Helpful client-side library
tracker@1.1.1                 # Meteor's client-side reactive programming library
standard-minifier-css  # CSS minifier run for production mode
standard-minifier-js    # JS minifier run for production mode
es5-shim@4.6.15                # ECMAScript 5 compatibility for older browsers.
ecmascript@0.6.1              # Enable ECMAScript2015+ syntax in app code
autopublish@1.0.7             # Publish all data to the clients (for prototyping)
insecure@1.0.7                # Allow all DB writes from clients (for prototyping)
shell-server
stylus

Week 2: 
autopublish
twbs:bootstrap
meteor-base
mobile-experience
mongo
blaze-html-templates
session
jquery
tracker
logging
reload
random
ejson
spacebars
check
standard-minifier-css
standard-minifier-js
shell-server
stylus
accounts-ui
edemaine:sharejs-codemirror

Week 3: 
twbs:bootstrap
accounts-password
babrahams:editable-text
meteor-base@1.0.4
mobile-experience@1.0.4
mongo@1.1.14
blaze-html-templates
session@1.1.7
jquery@1.11.10
tracker@1.1.1
logging@1.1.16
reload@1.1.11
random@1.0.10
ejson@1.0.13
spacebars
check@1.2.4
standard-minifier-css
standard-minifier-js
shell-server
stylus@=2.513.14
accounts-ui
edemaine:sharejs-codemirror

Week 4: 

twbs:bootstrap
accounts-password
babrahams:editable-text
iron:router
aldeed:autoform
aldeed:collection2
meteor-base@1.0.4
mobile-experience@1.0.4
mongo@1.1.14
blaze-html-templates
session@1.1.7
jquery@1.11.10
tracker@1.1.1
logging@1.1.16
reload@1.1.11
random@1.0.10
ejson@1.0.13
spacebars
check@1.2.4
standard-minifier-css
standard-minifier-js
stylus@2.513.8
shell-server
accounts-ui
aldeed:simple-schema


c) versions folder: change the version (in case you encounter version issues with the ones given in the course files)
Week 1: 
allow-deny@1.1.0
autopublish@1.0.7
autoupdate@1.8.0
babel-compiler@7.7.0
babel-runtime@1.5.0
base64@1.0.12
binary-heap@1.0.11
blaze@2.5.0
blaze-html-templates@1.2.1
blaze-tools@1.1.2
boilerplate-generator@1.7.1
caching-compiler@1.2.2
caching-html-compiler@1.2.0
callback-hook@1.4.0
check@1.3.1
ddp@1.4.0
ddp-client@2.5.0
ddp-common@1.4.0
ddp-server@2.5.0
diff-sequence@1.1.1
dynamic-import@0.7.2
ecmascript@0.16.0
ecmascript-runtime@0.8.0
ecmascript-runtime-client@0.12.1
ecmascript-runtime-server@0.11.0
ejson@1.1.1
es5-shim@4.8.0
fetch@0.1.1
geojson-utils@1.0.10
hot-code-push@1.0.4
html-tools@1.1.2
htmljs@1.1.1
id-map@1.1.1
insecure@1.0.7
inter-process-messaging@0.1.1
jquery@1.11.11
launch-screen@1.3.0
logging@1.3.1
meteor@1.10.0
meteor-base@1.5.1
minifier-css@1.6.0
minifier-js@2.7.1
minimongo@1.7.0
mobile-experience@1.1.0
mobile-status-bar@1.1.0
modern-browsers@0.1.7
modules@0.17.0
modules-runtime@0.12.0
mongo@1.13.0
mongo-decimal@0.1.2
mongo-dev-server@1.1.0
mongo-id@1.0.8
npm-mongo@3.9.1
observe-sequence@1.0.19
ordered-dict@1.1.0
promise@0.12.0
random@1.2.0
react-fast-refresh@0.2.0
reactive-var@1.0.11
reload@1.3.1
retry@1.1.0
routepolicy@1.1.1
shell-server@0.5.0
socket-stream-client@0.4.0
spacebars@1.2.0
spacebars-compiler@1.2.1
standard-minifier-css@1.7.4
standard-minifier-js@2.7.1
stylus@2.513.14
templating@1.4.1
templating-compiler@1.4.1
templating-runtime@1.5.0
templating-tools@1.2.0
tracker@1.2.0
ui@1.0.13
underscore@1.0.10
webapp@1.13.0
webapp-hashing@1.1.0

Week 2: 
accounts-base@2.2.0
accounts-ui@1.4.1
accounts-ui-unstyled@1.6.0
allow-deny@1.1.0
autopublish@1.0.7
autoupdate@1.8.0
babel-compiler@7.7.0
babel-runtime@1.5.0
base64@1.0.12
binary-heap@1.0.11
blaze@2.5.0
blaze-html-templates@1.2.1
blaze-tools@1.1.2
boilerplate-generator@1.7.1
caching-compiler@1.2.2
caching-html-compiler@1.2.0
callback-hook@1.4.0
check@1.3.1
ddp@1.4.0
ddp-client@2.5.0
ddp-common@1.4.0
ddp-rate-limiter@1.1.0
ddp-server@2.5.0
diff-sequence@1.1.1
dynamic-import@0.7.2
ecmascript@0.16.0
ecmascript-runtime@0.8.0
ecmascript-runtime-client@0.12.1
ecmascript-runtime-server@0.11.0
edemaine:sharejs@0.11.1
edemaine:sharejs-codemirror@5.40.0
ejson@1.1.1
es5-shim@4.8.0
fetch@0.1.1
geojson-utils@1.0.10
handlebars@1.0.7
hot-code-push@1.0.4
html-tools@1.1.2
htmljs@1.1.1
id-map@1.1.1
inter-process-messaging@0.1.1
jquery@1.11.11
launch-screen@1.3.0
less@3.0.2
localstorage@1.2.0
logging@1.3.1
meteor@1.10.0
meteor-base@1.5.1
minifier-css@1.6.0
minifier-js@2.7.1
minimongo@1.7.0
mobile-experience@1.1.0
mobile-status-bar@1.1.0
modern-browsers@0.1.7
modules@0.17.0
modules-runtime@0.12.0
mongo@1.13.0
mongo-decimal@0.1.2
mongo-dev-server@1.1.0
mongo-id@1.0.8
mongo-livedata@1.0.12
npm-mongo@3.9.1
observe-sequence@1.0.19
ordered-dict@1.1.0
promise@0.12.0
random@1.2.0
rate-limit@1.0.9
react-fast-refresh@0.2.0
reactive-dict@1.3.0
reactive-var@1.0.11
reload@1.3.1
retry@1.1.0
routepolicy@1.1.1
service-configuration@1.3.0
session@1.2.0
shell-server@0.5.0
socket-stream-client@0.4.0
spacebars@1.2.0
spacebars-compiler@1.2.1
standard-minifier-css@1.7.4
standard-minifier-js@2.7.1
stylus@2.513.14
templating@1.4.1
templating-compiler@1.4.1
templating-runtime@1.5.0
templating-tools@1.2.0
tracker@1.2.0
twbs:bootstrap@3.3.6
ui@1.0.13
underscore@1.0.10
url@1.3.2
webapp@1.13.0
webapp-hashing@1.1.0

Week 3: 

accounts-base@2.2.0
accounts-password@2.2.0
accounts-ui@1.4.1
accounts-ui-unstyled@1.6.0
allow-deny@1.1.0
autoupdate@1.8.0
babel-compiler@7.7.0
babel-runtime@1.5.0
babrahams:editable-text@0.7.16
base64@1.0.12
binary-heap@1.0.11
blaze@2.5.0
blaze-html-templates@1.2.1
blaze-tools@1.1.2
boilerplate-generator@1.7.1
caching-compiler@1.2.2
caching-html-compiler@1.2.0
callback-hook@1.4.0
check@1.3.1
dburles:mongo-collection-instances@0.3.1
ddp@1.4.0
ddp-client@2.5.0
ddp-common@1.4.0
ddp-rate-limiter@1.1.0
ddp-server@2.5.0
diff-sequence@1.1.1
djedi:sanitize-html@1.11.3
dynamic-import@0.7.2
ecmascript@0.16.0
ecmascript-runtime@0.8.0
ecmascript-runtime-client@0.12.1
ecmascript-runtime-server@0.11.0
edemaine:sharejs@0.11.1
edemaine:sharejs-codemirror@5.40.0
ejson@1.1.1
email@2.2.0
es5-shim@4.8.0
fetch@0.1.1
geojson-utils@1.0.10
gwendall:body-events@0.1.7
handlebars@1.0.7
hot-code-push@1.0.4
html-tools@1.1.2
htmljs@1.1.1
id-map@1.1.1
inter-process-messaging@0.1.1
jquery@1.11.11
launch-screen@1.3.0
less@3.0.2
localstorage@1.2.0
logging@1.3.1
meteor@1.10.0
meteor-base@1.5.1
minifier-css@1.6.0
minifier-js@2.7.1
minimongo@1.7.0
mobile-experience@1.1.0
mobile-status-bar@1.1.0
modern-browsers@0.1.7
modules@0.17.0
modules-runtime@0.12.0
mongo@1.13.0
mongo-decimal@0.1.2
mongo-dev-server@1.1.0
mongo-id@1.0.8
mongo-livedata@1.0.12
npm-mongo@3.9.1
observe-sequence@1.0.19
ordered-dict@1.1.0
promise@0.12.0
random@1.2.0
rate-limit@1.0.9
react-fast-refresh@0.2.0
reactive-dict@1.3.0
reactive-var@1.0.11
reload@1.3.1
retry@1.1.0
routepolicy@1.1.1
service-configuration@1.3.0
session@1.2.0
sha@1.0.9
shell-server@0.5.0
socket-stream-client@0.4.0
spacebars@1.2.0
spacebars-compiler@1.2.1
standard-minifier-css@1.7.4
standard-minifier-js@2.7.1
stylus@2.513.14
templating@1.4.1
templating-compiler@1.4.1
templating-runtime@1.5.0
templating-tools@1.2.0
tracker@1.2.0
twbs:bootstrap@3.3.6
ui@1.0.13
underscore@1.0.10
url@1.3.2
webapp@1.13.0
webapp-hashing@1.1.0


Week 4:

accounts-base@2.2.0
accounts-password@2.2.0
accounts-ui@1.4.1
accounts-ui-unstyled@1.6.0
aldeed:autoform@7.0.0
aldeed:collection2@3.5.0
aldeed:simple-schema@1.5.4
allow-deny@1.1.0
autoupdate@1.8.0
babel-compiler@7.7.0
babel-runtime@1.5.0
babrahams:editable-text@0.7.16
base64@1.0.12
binary-heap@1.0.11
blaze@2.5.0
blaze-html-templates@1.2.1
blaze-tools@1.1.2
boilerplate-generator@1.7.1
caching-compiler@1.2.2
caching-html-compiler@1.2.0
callback-hook@1.4.0
check@1.3.1
dburles:mongo-collection-instances@0.3.1
ddp@1.4.0
ddp-client@2.5.0
ddp-common@1.4.0
ddp-rate-limiter@1.1.0
ddp-server@2.5.0
deps@1.0.12
diff-sequence@1.1.1
djedi:sanitize-html@1.11.3
dynamic-import@0.7.2
ecmascript@0.16.0
ecmascript-runtime@0.8.0
ecmascript-runtime-client@0.12.1
ecmascript-runtime-server@0.11.0
ejson@1.1.1
email@2.2.0
es5-shim@4.8.0
fetch@0.1.1
geojson-utils@1.0.10
gwendall:body-events@0.1.7
hot-code-push@1.0.4
html-tools@1.1.2
htmljs@1.1.1
id-map@1.1.1
inter-process-messaging@0.1.1
iron:controller@1.0.12
iron:core@1.0.11
iron:dynamic-template@1.0.12
iron:layout@1.0.12
iron:location@1.0.11
iron:middleware-stack@1.1.0
iron:router@1.1.2
iron:url@1.1.0
jquery@1.11.11
launch-screen@1.3.0
less@3.0.2
livedata@1.0.18
localstorage@1.2.0
logging@1.3.1
mdg:validation-error@0.2.0
meteor@1.10.0
meteor-base@1.5.1
minifier-css@1.6.0
minifier-js@2.7.1
minimongo@1.7.0
mobile-experience@1.1.0
mobile-status-bar@1.1.0
modern-browsers@0.1.7
modules@0.17.0
modules-runtime@0.12.0
momentjs:moment@2.13.1
mongo@1.13.0
mongo-decimal@0.1.2
mongo-dev-server@1.1.0
mongo-id@1.0.8
npm-mongo@3.9.1
observe-sequence@1.0.19
ordered-dict@1.1.0
promise@0.12.0
raix:eventemitter@1.0.0
random@1.2.0
rate-limit@1.0.9
react-fast-refresh@0.2.0
reactive-dict@1.3.0
reactive-var@1.0.11
reload@1.3.1
retry@1.1.0
routepolicy@1.1.1
service-configuration@1.3.0
session@1.2.0
sha@1.0.9
shell-server@0.5.0
socket-stream-client@0.4.0
spacebars@1.2.0
spacebars-compiler@1.2.1
standard-minifier-css@1.7.4
standard-minifier-js@2.7.1
stylus@2.513.14
templating@1.4.1
templating-compiler@1.4.1
templating-runtime@1.5.0
templating-tools@1.2.0
tmeasday:check-npm-versions@1.0.2
tracker@1.2.0
twbs:bootstrap@3.3.6
typescript@4.4.0
ui@1.0.13
underscore@1.0.10
url@1.3.2
webapp@1.13.0
webapp-hashing@1.1.0


2. In case after running meteor command you face an error : 
Error: 
The @babel/runtime npm package could not be found in your node_modules directory. 
Please run the following command to install it from the terminal and then re-run meteor: 

meteor npm install --save @babel/runtime

(please re-run the above command if it throws and error again)

3. If you get error in installing any npm packages re-run the command again to install. 

4. Add codemirror 5.63.3 to the package.json file in Week 1, Week 2, Week 3 as below: (in case you encounter issues with the ones given in the course files)

Week 1: 

{
  "name": "week_1_textcircle_end_module_1",
  "version": "1.0.0",
  "description": "",
  "main": "textcircle.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@babel/runtime": "^7.15.4",
    "babel-runtime": "^6.18.0",
    "bcrypt": "^0.8.7",
    "codemirror": "^5.63.3"
  }
}

Similarly, add it to Week 2 and Week 3 under dependencies.

and in Week 4, add "simpl-schema": "^1.12.0" under dependencies list.

5. If you get an error 

Unexpected mongo exit code null. Restarting.  
Can't start Mongo server. 

Please run below command to get it working : 

meteor reset 

and then 

meteor
