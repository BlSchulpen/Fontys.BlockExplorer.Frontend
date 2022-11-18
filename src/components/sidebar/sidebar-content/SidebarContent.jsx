function SidebarContent() {
    return (
        <ul>
            <p className="title">Coins</p>
            <Link to="/btc" style={{ textDecoration: "none" }}>
                <li>
                    <FaBitcoin className="icon" color={BtcOrange} />
                    <span>Bitcoin</span>
                </li>
            </Link>
            <Link to="/bch" style={{ textDecoration: "none" }}>
                <li>
                    <SiBitcoincash className="icon" color={BchGreen} />
                    <span>Bitcoin Cash</span>
                </li>
            </Link>
            <Link to="/eth" style={{ textDecoration: "none" }}>
                <li>
                    <FaEthereum className="icon" color={EthPurple} />
                    <span>Ethereum</span>
                </li>
            </Link>
        </ul>
    )
};

export default SidebarContent;