# My Application

A basic structure of a web application for web developers to develop upon and show their skills.

### Please DO NOT mention any Company or Individual names in code, when forking, committing, branching, developing or completing the exercise. 

# Dependancies
> node ^10.15.3

> grunt-cli ```npm install -g grunt-cli```

# Get Started

- Fork this repo
- Clone your repo

## Install dependancies
```
npm i
``` 

## Build the app & watch
```
grunt dev
```

## Start application and server
```
npm start
```

## Creative assets  
Look in ```./assets```

### Fonts
All free to download or include from [https://fonts.google.com/specimen/Libre+Franklin](https://fonts.google.com/specimen/Libre+Franklin) (Regular and ExtraLight)

## Which Browsers/Devices or Virtualisation services did you check the application in?
- Latest Chrome, Firefox and Edge
- Responsive and Chrome Device Toolbar to be able to see iPad layout, different screen width, landscape, portrait for mobile devices. Also tested breakpoints to make sure the site's style doesn't break at breakpoints.
- I ran out of time but I wanted to do some extensive testing with Browserstack Local as well to be able to test with several device simulations
 
## List of tools
Windows Machine
Visual Studio IDE
With Live Sass compiler Extension
Running http-server in the terminal to create a local server to enable use of fetch on local json file

## Anything you want to tell us?
- Assumptions?
That the logo APPS is just text

- Decisions?
I assumed the Website needs to follow the Lunacy Layout to the closest Pixel, however there were a few instances where I have decided to tweak pixel values a little to make the website content look better to the naked eye. For example *font-weight of menu items* were put at 500 instead of 400 because on the website rendering page it looked a bit too thin. *Some buttons* were made less wide than the Lunacy layout pixel values for the same reason.
In some few instances I was not able to pick up elements from the Lunacy application. *The logo* for example, I chose to create it with a simple Times New Roman font.

- What you used to develop and test?
I had a bit of a challenge getting the default challenge setup to work on my machine. After spending 2 days trying to get grunt and npm to recompile changes continuously without success, I fell back on a simple setup to be able to get the work started on Monday morning. 

## What did you think of this test/exercise?
### What did you like?
1. This web challenge has allowed me to think about workflow automation in depth. I previously used Gulp for work and it was a preset setup throughout the company. I was thus able to research Grunt for this exercise but also other workflow automation tools such as Webpack and Browserify. 
1. The cool toned layout. The color pallete is easy on the eyes.
2. Loved the Clean and concise UI/UX
3. Picked up how to use Lunacy

### What could be improved?
1. The setup of compilation tools took a bit of time before being able to start coding 

2. I would have loved to put *my app on a Shopify store* to show various great tools of the Shopify platform but I ran out of time. Using the Shopify Platform would have enabled me to quickly code
=> *Easy translation menu EN/FR/DE* - The Website in Deutsch or French - I have worked with Shopify translation several times in Canada as having websites in English and in French is required very often from our clients
=> *Products Page with images*
=> *Client Homepage Customization* - I would have implemented custom components for the Client side giving the ability to change the look and feel of the whole homepage in less than 10mn on the customization panel of shopify. This would let the client be able to choose and update the slideshow images in the hero banner. Change/update the text content and positioning (eg. text block at the left instead of the right) in less than 10mn. Or even have several versions of the play and feel of the side with different themes so that the client can decide on his/her end which customization he would like to put live. It works great to give more autonomy to clients that feature special events/sales for xmas, Valentines day etc.

### Task2 - PSEUDO-CODE
I ran out of time for the implementation of the checkout page functionality.
I designed the checkout page with the products already inside. The quantity input element has value has min value of 1 and max value which is equal to the inventory qty.
the input is changeable and buttons + and - also update the qty number value. 
Both buttons have methods to change (increment or decrement) the quantity value. In the methods we verify the value is within range before making an update, recalculate the cost of the article in the cart and update the subtotal and total values. We also need a currency format helper method.

onsubmit --> when BUY NOW button is clicked.
We check the cart size - using json stringify to make the post. If cart size is empty the buy now button is disabled.

On SUCCESS SUBMIT we send a post with the cart products data. and display a div with Thank you for making a purchase.

I read the products.json file with fetch and printed the have the object file
On submit of the checkout update the product.json file. For each purchased element use element id and match to sku to update json file values.

3. I would have spent *more time on QA testing on different devices*

4. *Moved reuseable components to snippets* in the theme.liquid file of Shopify. Used the SVG vectors as snippets to achieve a very readable index.html file. I could have achieved this too using React.js*

### What didn't you like?
1. Nothing. It was a really nice challenge to take part in. 
2.
3.


A README file with
o Instructions on how to setup and run your application.
o List of tools you used to develop and debug your application not evident in code. (IDE’s, Dev tools,
Debugging tools etc)
I used Visual Studio with Live Sass Compiler

### Libraries you used and why
I am using the latest jquery library
*Slick* with a simple fade effect to animate the Homepage banner

*Fontawesome for the icons* - intended to use SVG files for better Accessability, Scalability and Animation possibilites but for code simplicity I fell back on the latest fontawesome framework with free script subscription. I wanted to save svg files into reuseable components/snippets within the project

*Sass* to write nested css and show that styles can be decoupled into composants such as: 
=> colors.scss (to keep track of the color pallete in a project and allow for one stop spot to update the whole website color pallette without leaving out elements).
This also allows for consistent margins, gutters, container sizes across website.
=> basics.scss styles (to allow easy pickup in a team project environment. This also helps to improve coding speed as styles can be shared across project and customized if needed in the other elements if needed)  

### How long you spent?
I spent 3 days trying to get the setup to work on my device.
I started coding on monday, 2 days ago.
I spent one day to resolve my setup issues.