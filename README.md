# Login Page

This is a simple login page designed to authenticate users by checking their entered credentials (username and password). It provides an intuitive, user-friendly interface with basic form validation. Below is an overview of the page’s key elements and functionalities:

## 1. User Interface (UI) Components:
- **Username Field**: A text input field where the user must enter their username.
- **Password Field**: A password input field where the user must enter their password. The text is masked for privacy.
- **Login Button**: A button that, when clicked, triggers the form submission for authentication.
- **Error Message**: A red-colored message displayed when the entered credentials are incorrect. It notifies the user that the login attempt has failed.

## 2. Front-End (HTML, CSS, JavaScript):
- The page is built using **HTML** for the structure, **CSS** for styling, and **JavaScript** for form validation and submission handling.
- The page is responsive, meaning it will adapt to different screen sizes, ensuring a smooth experience on both desktop and mobile devices.

## 3. Authentication Logic:
- The login credentials are hardcoded for demonstration purposes:
  - **Username**: `user`
  - **Password**: `password123`
- When the user enters their credentials and submits the form, **JavaScript** checks if the values match the correct hardcoded ones.
- If the credentials are correct, the user is redirected to a new page, such as `homepage.html`.
- If the credentials are incorrect, an error message is shown, asking the user to re-enter the correct information.

## 4. Back-End Authentication (Node.js):
- The back-end, implemented using **Node.js** and **Express**, manages the actual validation of user credentials.
- The server listens for authentication requests, compares the entered credentials to predefined values (for simplicity), and sends a response indicating whether the login is successful or not.

## 5. Security Considerations (Basic):
While this example uses simple, hardcoded values for login, real-world applications should use secure practices such as:
- **Hashing passwords** with algorithms like bcrypt.
- **Session management** using JWT (JSON Web Tokens) or cookies.
- Storing user credentials securely in a database (e.g., MySQL or MongoDB).

## How to Run:

1. **Set Up Your Project Environment**
   - Make sure you have **Node.js** installed. Download it from [here](https://nodejs.org/).

2. **Create Project Directory**
   - Create a folder for your project (e.g., `login-page`), and add the following files:
     - `index.html` (Front-End Login Page)
     - `styles.css` (Styling for the page)
     - `script.js` (JavaScript for form validation and submission)
     - `server.js` (Node.js server handling back-end authentication)

3. **Install Dependencies**
   - Open the terminal or command prompt and navigate to your project folder.
   - Run `npm init -y` to create a `package.json` file.
   - Install dependencies using:
     ```bash
     npm install express body-parser
     ```

4. **Start the Server**
   - Run the following command to start the Node.js server:
     ```bash
     node server.js
     ```

5. **Open the Login Page**
   - Open `index.html` in your browser to test the login functionality.

## Contributions:
Feel free to fork the repository, make changes, and open pull requests. Contributions are welcome!

## License:
This project is open source and available under the [MIT License](LICENSE).
