import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta charSet="utf-8"></meta>
				<title>GRAFUZ | SOHIB ABDURAMON</title>
				<meta name="description" content="Istalgan vaqtda, istalgan mavzuni, eng yaxshi narxda o'rganing!"></meta>
				<meta
					http-equiv="Content-Type"
					content="text/html; charset=UTF-8"
				></meta>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				></meta>
				<meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
				<link
					rel="icon"
					type="image/x-icon"
					href="/images/new_ico.svg"
				></link>
				<meta
					name="keywords"
					content="Adobe Photoshop, After Effects, Adobe Premiere Pro, Adobe Audition, Mocha PRO, SMM, ta'lim, darslar, yaratish, kurs, Design, Editing, Sound, ANIMATSIYA, MONTAJ, DIZAYN, VFX"
				/>
				<meta name="author" content="SOHIB ABDURAMON"></meta>
				<meta property="og:title" content="Bosh sahifa"></meta>
				<meta property="og:type" content="Learning management system"></meta>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
