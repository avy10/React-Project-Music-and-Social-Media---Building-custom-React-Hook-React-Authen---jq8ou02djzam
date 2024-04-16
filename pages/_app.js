import Navigation from "@/components/commons/Navigation";
import { AuthorisationProvider } from "@/contexts/AuthorisationContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
	return (
		<AuthorisationProvider>
			<Navigation />
			<Component {...pageProps} />
		</AuthorisationProvider>
	);
}
