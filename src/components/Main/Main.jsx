import "./Main.css";

// Main contains a header blurb allowing uses to see what the app is about
// the main section on html is enclosed in main html tags

const Main = () => {
  return (
    <main>
      <h1> Book Tracker </h1>
      <p> You can add books that you want to read... </p>

      <p> If you no longer want to read a book: you can then delete books.</p>
      <p> You can also start afresh with a blank list by clicking delete All</p>
    </main>
  );
};

export default Main;
