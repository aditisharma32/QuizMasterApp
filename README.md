# Quiz App

A simple React-based quiz application that fetches questions from a JSON file and presents a randomized quiz experience. Each quiz session shows 10 random questions from the question pool.

## Features

-   Loads questions dynamically from a JSON file
-   Displays 10 random questions per quiz session
-   Highlights correct and wrong answers
-   Keeps track of the score
-   Shows results at the end of the quiz
-   Allows resetting the quiz with a new set of random questions
-   Responsive and user-friendly UI

## Installation

1.  Clone the repository:


2.  Navigate to the project directory:

    ```bash
    cd quiz-app
    ```

3.  Install dependencies:

    ```bash
    npm install
    ```

4.  Start the development server:

    ```bash
    npm start
    ```

    The app will be available at `http://localhost:XXXX`.

## Project Structure

-   `public/data.json`: Contains all quiz questions and answers.
-   `src/components/Quiz.jsx`: Main Quiz component handling quiz logic and UI.
-   `src/components/Quiz.css`: Styling for the quiz app.

## How to Use

1.  On loading, 10 random questions are selected from the JSON question pool.
2.  Click an option to answer a question.
3.  The correct answer is highlighted.
4.  Click "Next" to move to the next question.
5.  After the last question, the total score is displayed.
6.  Click "Reset" to start a new quiz with a different random selection.

## Customization

-   To add or modify questions, edit the `public/data.json` file.
-   The app supports any number of questions; it always picks 10 randomly per session.

## Dependencies

-   React
