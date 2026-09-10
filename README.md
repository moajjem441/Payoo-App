📱 Payoo MFS App
A simulated Mobile Financial Service (MFS) web application inspired by popular digital wallets like bKash, Nagad, and Rocket. This project is built to practice DOM manipulation, event handling, form validation, and state management in Vanilla JavaScript alongside Tailwind CSS.


✨ Features
Secure Login System: Validates user credentials (e.g., 11-digit mobile number and 4-digit PIN).

Add Money: Allows users to add funds by selecting a bank, entering an account number, amount, and PIN confirmation.

Cash Out: Enables cash withdrawal to an agent number with real-time balance deduction and PIN validation.

Transfer Money (Send Money): Transfer funds securely to another user account.

Get Bonus: Redeem promotional bonus codes to add instant credit.

Transaction History: Dynamically tracks and displays all financial activities (Add Money, Cash Out, Transfer, etc.) with timestamps.

Interactive UI Toggle: Smooth navigation between different service sections using DOM manipulation.

🛠️ Technologies Used
HTML5: Semantic markup structure.

Tailwind CSS & DaisyUI: Modern utility-first styling and component library for a clean, responsive UI.

JavaScript (ES6+): Core logic, DOM manipulation, event listeners, and data validation.

📂 Project Structure
Plaintext
Payoo-App/
│
├── index.html       # Login page / Entry point
├── home.html        # Main dashboard containing MFS features
│
├── js/
│   ├── login.js     # Handles authentication and credential checks
│   ├── addMoney.js  # Manages deposit logic and balance updates
│   ├── cashOut.js   # Manages withdrawal logic
│   ├── features.js  # Controls tab toggling and UI state
│   └── utilities.js # Reusable helper functions (input reading, ID extraction)
│
└── README.md        # Project documentation
🚀 Getting Started Locally
To run this project locally on your machine, follow these simple steps:

Clone the repository:

Bash
git clone https://github.com/moajjem441/Payoo-App.git
Navigate to the project directory:

Bash
cd Payoo-App
Open the project:

Open index.html directly in your favorite web browser, or

Use a live server extension (like Live Server in VS Code) for a better development experience.

👤 Author
Moajjem - GitHub Profile

📄 License
This project is open-source and available for educational and portfolio purposes
