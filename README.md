# cypress
evaluating cypress


 npm install -D cypress-xpath   -- to install xpath implementation
 Then include in your project's cypress/support/index.js
 
 require('cypress-xpath')
 
 cypress run -e TAGS='not @foo and (@bar or @zap)'
 
 
 npm install -D cypress-capybara
 
 
 yarn add --dev picklejs