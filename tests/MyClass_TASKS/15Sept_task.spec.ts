//Task : Open the Katalon demo site and click on the "Make Appointment" button to navigate to the login page.
// Then enter the username:'John Doe' and password: 'ThisIsNotAPassword', and click on the login button to log in to the application. 
//Now Verify the label "Make Appointment" is displayed on the page after successful login.  
//Also verify the url of the page after login is 'https://katalon-demo-cura.herokuapp.com/#appointment' and the title of the page is 'CURA Healthcare Service'.


import {test, expect} from '@playwright/test';

test('MyClass TASKS 15Sept_task', async ({ page }) => {
  // Navigate to the page where MyClass is implemented
  await page.goto('https://katalon-demo-cura.herokuapp.com');
  // Perform actions on the page

  //<a 
  // id="btn-make-appointment" 
  // href="./profile.php#login" 
  // class="btn btn-dark btn-lg">Make Appointment</a>

  let makeAppointmentButton = page.locator('#btn-make-appointment');
  await makeAppointmentButton.click();

  // Login page displays
  let usernameField = page.locator('#txt-username');
  let passwordField = page.locator('#txt-password');
  let loginButton = page.locator('#btn-login');

  await usernameField.fill('John Doe');
  await passwordField.fill('ThisIsNotAPassword');
  await loginButton.click();        

  // Verify the label "Make Appointment" is displayed on the page after successful login
  let makeAppointmentLabel = page.locator('h2:has-text("Make Appointment")');
  await expect(makeAppointmentLabel).toBeVisible();

  // Verify the URL of the page after login
  await expect(page).toHaveURL('https://katalon-demo-cura.herokuapp.com/#appointment');

  // Verify the title of the page after login
  await expect(page).toHaveTitle('CURA Healthcare Service');

  page.pause();
});
