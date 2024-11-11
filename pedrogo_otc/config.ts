import { createConfig, http } from "wagmi";
import { webSocket } from "viem";
import { pulsechain, pulsechainV4 } from "wagmi/chains";
import { injected } from '@wagmi/connectors'

declare module "wagmi" {
	interface Register {
		config: typeof config
	}
}

const config = createConfig({
	chains: [pulsechainV4],
	connectors: [injected()],
	transports: {
		[pulsechainV4.id]: http("https://rpc.v4.testnet.pulsechain.com", {
			timeout: 60_000,
		})
	}
});

export { config };
