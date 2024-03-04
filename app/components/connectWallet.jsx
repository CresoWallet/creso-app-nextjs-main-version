const networks = {
    bsc: {
        chainId: `0x${Number(56).toString(16)}`,
        chainName: "Binance Smart Chain Mainnet",
        nativeCurrency: {
            name: "Binance Chain Native Token",
            symbol: "BNB",
            decimals: 18,
        },
        rpcUrls: [
            "https://bsc-dataseed.binance.org/",
            "https://bsc-dataseed1.binance.org",
            "https://bsc-dataseed2.binance.org",
            "https://bsc-dataseed3.binance.org",
            "https://bsc-dataseed4.binance.org",
            "https://bsc-dataseed1.defibit.io",
            "https://bsc-dataseed2.defibit.io",
            "https://bsc-dataseed3.defibit.io",
            "https://bsc-dataseed4.defibit.io",
            "https://bsc-dataseed1.ninicoin.io",
            "https://bsc-dataseed2.ninicoin.io",
            "https://bsc-dataseed3.ninicoin.io",
            "https://bsc-dataseed4.ninicoin.io",
            "wss://bsc-ws-node.nariox.org",
        ],
        blockExplorerUrls: ["https://bscscan.com"],
    },
    ethereum: {
        chainId: `0x${Number(1).toString(16)}`,
        chainName: "Ethereum Mainnet",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18,
        },
        rpcUrls: ["https://mainnet.infura.io/v3/YOUR_INFURA_API_KEY"],
        blockExplorerUrls: ["https://etherscan.io/"],
    },
    rinkeby: {
        chainId: `0x${Number(4).toString(16)}`,
        chainName: "Rinkeby Testnet",
        nativeCurrency: {
            name: "Ether",
            symbol: "ETH",
            decimals: 18,
        },
        rpcUrls: ["https://rinkeby.infura.io/v3/YOUR_INFURA_API_KEY"],
        blockExplorerUrls: ["https://rinkeby.etherscan.io/"],
    },
    polygon: {
        chainId: `0x${Number(137).toString(16)}`,
        chainName: "Polygon Mainnet",
        nativeCurrency: {
            name: "Matic",
            symbol: "MATIC",
            decimals: 18,
        },
        rpcUrls: ["https://rpc-mainnet.maticvigil.com"],
        blockExplorerUrls: ["https://explorer.matic.network/"],
    },
    avalancheMainnet: {
        chainId: `0x${Number(43114).toString(16)}`,
        chainName: "Avalanche Mainnet",
        nativeCurrency: {
            name: "AVAX",
            symbol: "AVAX",
            decimals: 18,
        },
        rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
        blockExplorerUrls: ["https://cchain.explorer.avax.network/"],
    },
    avalancheFuji: {
        chainId: `0x${Number(43113).toString(16)}`,
        chainName: "Avalanche Fuji C-Chain",
        nativeCurrency: {
            name: "AVAX",
            symbol: "AVAX",
            decimals: 18,
        },
        rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"],
        blockExplorerUrls: ["https://cchain.explorer.avax-test.network/"],
    },
    fantomOpera: {
        chainId: `0x${Number(250).toString(16)}`,
        chainName: "Fantom Opera",
        nativeCurrency: {
            name: "FTM",
            symbol: "FTM",
            decimals: 18,
        },
        rpcUrls: ["https://rpcapi.fantom.network"],
        blockExplorerUrls: ["https://ftmscan.com/"],
    },
};

export default function ConnectWalletBtn() {
    const changeNetwork = async ({ networkName }) => {
        try {
            if (!window.ethereum) throw new Error("No crypto wallet found");

            await window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [
                    {
                        ...networks[networkName],
                    },
                ],
            });
        } catch (err) {
            console.log("chamge networkError", err);
        }
    };

    const handleNetworkSwitch = async (networkName) => {
        await changeNetwork({ networkName });
    };

    const openmetamask = async () => {
        if (!window.ethereum) {
            window.open("https://metamask.io/");
        } else {

            handleNetworkSwitch("bsc");
        }
    };

    return (
        <>
            <button onClick={() => openmetamask()}>
                Connect Wallet
            </button>
        </>
    );
}