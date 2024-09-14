import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

const LandingPage: React.FC = () => {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>EMMANUEL HOSTEL</h1>
      <h3>BOOK A ROOM WITH FEW CLICKS</h3>
      <div className="card">
        <button >
         register
        </button>
        <p>
        Have an account already ? <a>sign in</a>
        </p>
      </div>
      <p className="read-the-docs">
        2024 copyright &copy;
      </p>
    </>
  );
};

export default LandingPage;
