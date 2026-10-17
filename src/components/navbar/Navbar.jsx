function Navbar({ title, price }) {
    return (<div className="navbar">
        <b>{title} , </b>
        <b> price = {price ? price : "price is not defiend"}</b>
    </div>)
}
export default Navbar;