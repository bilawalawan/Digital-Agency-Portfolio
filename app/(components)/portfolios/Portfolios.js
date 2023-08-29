import Portfoliocard from "./portfoliocard";


export default function Portfolios() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <h3 className="text-primary">Our Portfolio</h3>
        <h2 className="fw-bold">Take A Look At Our Latest Work</h2>
      </div>
      <div className="row">
        <Portfoliocard title="App Developer" />
        <Portfoliocard title="Web Developer" />
        <Portfoliocard title="Software Developer" />
        <Portfoliocard title="AI Developer" />
        <Portfoliocard title="System Developer" />
        <Portfoliocard title="Web Developer" />
      </div>
    </div>
  )
}
