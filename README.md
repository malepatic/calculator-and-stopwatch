Assignment-7
Part A: Simple Calculator Web Application

1. Login Page (Page 1)

	•	Fields and Validations:
	•	Email: Accepts only Northeastern University emails; must include null checks and special character validation.
	•	Username: Minimum and maximum length validation, special character validation.
	•	Password: Must have minimum and maximum length checks.
	•	Confirm Password: Should match the Password field.
	•	Error Messaging:
	•	Error messages display below the respective fields in red.
	•	Error messages are specific and not generic (e.g., “Email is required” instead of “Invalid input”).
	•	No pop-up notifications are used.
	•	Login Button:
	•	Initially disabled and only enabled after all validations pass.
	•	jQuery Validation:
	•	All validations are implemented using jQuery.
	•	On successful validation, the user is redirected to the calculator page.

2. Calculator Page (Page 2)

	•	User Display:
	•	Displays the logged-in username at the top.
	•	Calculation Fields:
	•	Two input fields labeled “Number 1” and “Number 2”.
	•	Operations:
	•	Four buttons: Add, Subtract, Multiply, and Divide.
	•	A single arrow function is used for all operations, with parameters to handle the specific calculation.
	•	Result Display:
	•	The result is displayed in a separate field that is not editable.
	•	Validation:
	•	Only numbers are allowed in the input fields.
	•	Error messages display below the fields and are specific to each issue.
	•	No pop-up notifications are used.

Part B: Stopwatch Web Application

Single-Page Structure

	•	Label:
	•	Non-editable label displaying time in “HH:MM:SS” format, initially set to 00:00:00.
	•	Date Picker:
	•	Displays the current date by default, with the ability to select past and future dates.
	•	The date field is non-editable.
	•	Buttons:
	•	Start: Starts the stopwatch timer.
	•	Stop: Pauses the stopwatch timer.
	•	Reset: Resets the timer to 00:00:00.

Key Concepts Used

	•	Async, Await, and Promises:
	•	The stopwatch functionality incorporates asynchronous JavaScript using async and await for seamless time tracking.
	•	Promises handle time intervals, ensuring precise timing updates without blocking other functionalities on the page.
	•	Example: The startTimer function uses await to asynchronously update time values and improve responsiveness.
	•	setInterval and clearInterval:
	•	setInterval is used to start the timer at regular intervals (every second), updating the display with the current time.
	•	clearInterval stops the timer, ensuring that setInterval is only active when the timer is running.
	•	Example: When the Start button is clicked, setInterval initiates the timer update; clicking Stop triggers clearInterval, pausing the timer.

Summary of Stopwatch Flow

	1.	Start Button: Begins the stopwatch using setInterval, with time display updates handled asynchronously.
	2.	Stop Button: Pauses the timer by clearing the interval using clearInterval.
	3.	Reset Button: Stops the timer and resets the display to 00:00:00.



