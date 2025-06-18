import React from "react";

//include images into your bundle
import patoRiact from "../../img/patoriact.png";
import patoVite from "../../img/patovite.png";
import patonodejs from "../../img/patonodejs.png";
import patogeek from "../../img/patpgeek.png";

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <a className="navbar-brand" href="#">Start Bootstrap</a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

const Header = () => (
    <header className="bg-light py-5">
        <div className="container px-5">
            <div className="text-center">
                <h1 className="display-4 fw-bolder">A Warm Welcome!</h1>
                <p className="lead fw-normal text-muted mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsa, eligendi, in quo sunt
                    possimus non incidunt dolor vero aliquid similique quaerat nam nobis illo aspernatur vitae fugit
                    numquam repellat.
                </p>
                <a className="btn btn-primary btn-lg" href="#!">
                    Call to action!
                </a>
            </div>
        </div>
    </header>
);

const Card = ({ title, text, btnText, image }) => (
    <div className="col mb-5">
        <div className="card h-100">
            <img
                className="card-img-top"
                src={image}
                alt={title}
            />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
            </div>
            <div className="card-footer bg-transparent border-top-0">
                <a href="#!" className="btn btn-primary">
                    {btnText}
                </a>
            </div>
        </div>
    </div>
);

const CardGrid = () => {
    const images = [patoRiact, patoVite, patonodejs, patogeek];
    const cards = images.map((imgSrc, idx) => ({
        id: idx,
        title: 'Card title',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.',
        btnText: 'Find Out More!',
        image: imgSrc
    }));

    return (
        <section className="py-5">
            <div className="container px-5">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                    {cards.map(card => (
                        <Card
                            key={card.id}
                            title={card.title}
                            text={card.text}
                            btnText={card.btnText}
                            image={card.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const Footer = () => (
    <footer className="py-4 bg-dark">
        <div className="container px-5">
            <p className="m-0 text-center text-white">
                Copyright &copy; My addiction to rubber ducks
            </p>
        </div>
    </footer>
);

function App() {
    return (
        <>
            <Navbar />
            <Header />
            <CardGrid />
            <Footer />
        </>
    );
}

export default App;