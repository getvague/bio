type Props = React.SVGProps<SVGSVGElement>;
export function GitHub(props: Props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className={props.className}
		>
			<title>GitHub</title>
			<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
			<path d="M9 18c-4.51 2-5-2-7-2" />
		</svg>
	);
}
export function Discord(props: Props) {
	return (
		<svg viewBox="0 0 24 24" {...props}>
			<title>Discord</title>
			<path
				className="fill-current"
				d="M8.52062 13.8456C7.48059 13.8456 6.63159 12.9011 6.63159 11.7444 6.63159 10.5876 7.45936 9.64307 8.52062 9.64307 9.57123 9.64307 10.4308 10.5876 10.4096 11.7444 10.4096 12.9011 9.57123 13.8456 8.52062 13.8456ZM15.4941 13.8456C14.454 13.8456 13.604 12.9011 13.604 11.7444 13.604 10.5876 14.4328 9.64307 15.4941 9.64307 16.5447 9.64307 17.4043 10.5876 17.3831 11.7444 17.3831 12.9011 16.5553 13.8456 15.4941 13.8456ZM10.1253 4.32272 9.81655 3.75977 9.18323 3.86532C7.71915 4.10934 6.32658 4.54652 5.02544 5.1458L4.79651 5.25124 4.65507 5.45985C2.0418 9.31417 1.3258 13.1084 1.68032 16.836L1.71897 17.2423 2.04912 17.4822C3.78851 18.7463 5.47417 19.5186 7.12727 20.0254L7.91657 20.2674 9.03013 17.5504C10.9397 18.0224 13.0592 18.0225 14.969 17.5508L16.0757 20.2681 16.8668 20.0254C18.5173 19.5191 20.2137 18.7469 21.9466 17.4809L22.2726 17.2428 22.3131 16.8412C22.7491 12.521 21.616 8.75749 19.3547 5.45628L19.2128 5.2492 18.9846 5.1448C17.6767 4.5466 16.2852 4.10957 14.8309 3.86549L14.2132 3.76182 13.8987 4.30344C13.8112 4.4542 13.7215 4.6244 13.6364 4.79662 12.5441 4.68445 11.456 4.68421 10.3726 4.79627 10.2882 4.62711 10.2025 4.46356 10.1253 4.32272ZM6.71436 16.61C6.91235 16.724 7.11973 16.8356 7.32557 16.9378L6.8764 18.0338C5.75585 17.6256 4.61837 17.0635 3.4476 16.2555 3.22313 13.1175 3.86092 9.95075 6.01196 6.68602 6.90962 6.29099 7.8535 5.98255 8.83606 5.77271 8.89631 5.89807 8.95235 6.02042 8.99839 6.12892L9.27128 6.77213 9.96259 6.67074C11.3152 6.47235 12.6772 6.47209 14.0523 6.671L14.7424 6.77082 15.0147 6.12892C15.0621 6.01719 15.1167 5.89523 15.1743 5.77298 16.1525 5.98301 17.098 6.29188 18.0029 6.68787 19.8781 9.50833 20.8241 12.6541 20.5486 16.255 19.3837 17.0623 18.2422 17.6246 17.1193 18.0333L16.6735 16.9387C16.8799 16.8362 17.0879 16.7243 17.2865 16.61 17.7763 16.3277 18.3039 15.9757 18.6402 15.6395L17.3606 14.36C17.1969 14.5237 16.837 14.7805 16.3831 15.0421 15.9388 15.2981 15.498 15.5049 15.2164 15.598 13.2126 16.2606 10.7883 16.2606 8.78443 15.598 8.50285 15.5049 8.06205 15.2981 7.61772 15.0421 7.16383 14.7805 6.80392 14.5237 6.64017 14.36L5.36065 15.6395C5.6969 15.9757 6.2245 16.3277 6.71436 16.61Z"
			/>
		</svg>
	);
}
export function Bluesky(props: Props) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
			<title>Bluesky</title>
			<path d="M4.907 3.44c.709.12 1.533.501 2.576 1.247C9.28 5.97 10.769 7.739 12 9.564c1.231-1.825 2.72-3.593 4.517-4.877 1.043-.746 1.867-1.127 2.576-1.248.767-.13 1.29.065 1.615.2C21.717 4.06 22 5.225 22 6.215c0 .201-.086 1.302-.185 2.36-.052.546-.11 1.108-.166 1.577-.053.428-.115.88-.19 1.133a4.331 4.331 0 0 1-1.951 2.517c.937.707 1.277 1.856.928 2.984-.597 1.924-2.737 4.397-4.835 4.618-1.773.186-2.935-1.325-3.601-2.76-.666 1.435-1.828 2.946-3.6 2.76-2.099-.22-4.24-2.694-4.836-4.618-.35-1.128-.01-2.277.928-2.984a4.331 4.331 0 0 1-1.95-2.517c-.076-.253-.138-.705-.19-1.133a60.58 60.58 0 0 1-.167-1.577C2.085 7.517 2 6.416 2 6.215c0-.99.283-2.155 1.292-2.576.326-.135.847-.33 1.615-.2ZM4.05 6.916c.064.818.18 2.108.288 2.992.032.268.055.545.122.807.397 1.34 1.929 2.082 3.686 1.887a1 1 0 0 1 .257 1.983c-.756.112-3.315.357-2.928 1.607.357 1.151 1.848 3.087 3.134 3.222.928.097 1.5-1.394 1.766-2.045.275-.674.488-1.38.668-1.982a1 1 0 0 1 1.916 0c.18.602.393 1.308.668 1.982.266.651.838 2.142 1.766 2.045 1.286-.135 2.777-2.07 3.134-3.222.387-1.25-2.172-1.495-2.928-1.607a1 1 0 0 1 .257-1.983c1.757.195 3.289-.547 3.686-1.887.069-.266.089-.536.122-.807.108-.884.224-2.174.288-2.992.037-.468.247-1.637-.522-1.506-.286.049-.823.241-1.749.903-1.943 1.389-3.705 3.513-4.789 5.64a1 1 0 0 1-1.782 0c-1.084-2.127-2.846-4.251-4.789-5.64-.926-.662-1.463-.854-1.749-.903-.784-.134-.559 1.034-.522 1.506Z" />
		</svg>
	);
}
export function Instagram(props: Props) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
			<title>Instagram</title>
			<path d="M12.001 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM12.001 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.007 9.075 4 9.461 4 12c0 2.475.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333 1.104.052 1.49.058 4.029.058 2.475 0 2.878-.007 4.029-.058.782-.037 1.308-.142 1.797-.331.433-.169.748-.37 1.08-.703.337-.336.538-.649.704-1.08.19-.492.296-1.018.332-1.8.052-1.103.058-1.49.058-4.028 0-2.474-.007-2.878-.058-4.029-.037-.782-.143-1.31-.332-1.798a2.912 2.912 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.926 4.006 14.54 4 12 4Zm0-2c2.717 0 3.056.01 4.123.06 1.064.05 1.79.217 2.427.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.884 4.884 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465-1.067.047-1.406.06-4.123.06-2.717 0-3.056-.01-4.123-.06-1.064-.05-1.789-.218-2.427-.465a4.89 4.89 0 0 1-1.772-1.153 4.905 4.905 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428-.048-1.066-.06-1.405-.06-4.122 0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772 4.897 4.897 0 0 1 1.772-1.153c.637-.248 1.362-.415 2.427-.465C8.945 2.013 9.284 2 12.001 2Z" />
		</svg>
	);
}

export function JavaScript(props: Props) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
			<g fill="none" stroke="#f9e2af" strokeLinecap="round" strokeLinejoin="round">
				<title>JavaScript</title>
				<path d="M4.5 11a1.5 1.5 0 0 0 3 0V7.5m5 1.25c0-.69-.537-1.25-1.2-1.25h-.6c-.663 0-1.2.56-1.2 1.25S10.037 10 10.7 10h.6c.663 0 1.2.56 1.2 1.25s-.537 1.25-1.2 1.25h-.6c-.663 0-1.2-.56-1.2-1.25" />
				<path d="M4 1.5h8c1.385 0 2.5 1.115 2.5 2.5v8c0 1.385-1.115 2.5-2.5 2.5H4A2.495 2.495 0 0 1 1.5 12V4c0-1.385 1.115-2.5 2.5-2.5Z" />
			</g>
		</svg>
	);
}
export function TypeScript(props: Props) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
			<g fill="none" stroke="#89b4fa" strokeLinecap="round" strokeLinejoin="round">
				<title>TypeScript</title>
				<path d="M4 1.5h8A2.5 2.5 0 0 1 14.5 4v8a2.5 2.5 0 0 1-2.5 2.5H4A2.5 2.5 0 0 1 1.5 12V4A2.5 2.5 0 0 1 4 1.5" />
				<path d="M12.5 8.75c0-.69-.54-1.25-1.2-1.25h-.6c-.66 0-1.2.56-1.2 1.25S10.04 10 10.7 10h.6c.66 0 1.2.56 1.2 1.25s-.54 1.25-1.2 1.25h-.6c-.66 0-1.2-.56-1.2-1.25m-3-3.75v5M5 7.5h3" />
			</g>
		</svg>
	);
}

export function Java(props: Props) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
			<title>Java</title>
			<g fill="none" strokeLinecap="round" strokeLinejoin="round">
				<path
					stroke="#cdd6f4"
					d="M10.73 8.41c.57 3 1.59 5.83 2.77 7.09-6.63-3.45-9.76-1.75-10.5 0-.66-3.4-.54-5.74.09-7.78"
				/>
				<path
					stroke="#f38ba8"
					d="M8.5 7c.63.34 1.82 1.07 2.24 1.41-.54-2.9-.64-5.96-.74-7.91-2.13.58-5.73 1.98-6.9 7.22.52-.69 1.72-1.05 2.4-1.22"
				/>
				<path
					stroke="#f38ba8"
					d="M5.5 7A1.5 1.5 0 0 0 7 8.5 1.5 1.5 0 0 0 8.5 7 1.5 1.5 0 0 0 7 5.5 1.5 1.5 0 0 0 5.5 7"
				/>
			</g>
		</svg>
	);
}

export function HTML(props: Props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" {...props}>
            <title>HTML</title>
            <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26"/>
            <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529"/>
            <path d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z" fill="white"/>
        </svg>
    );
}

export function Elixir(props: Props) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
			<title>Elixir</title>
			<path fill="none" stroke="#c6a0f6" strokeLinecap="round" strokeLinejoin="round" d="M8.03 14.5C5 14.5 3.5 12.49 3.5 10.01c0-2.82 2.25-7.02 4.62-8.48a.24.24 0 0 1 .24 0c.08.04.12.12.11.2c-.13 1.25.22 2.5.98 3.54c.3.43.63.8 1.02 1.27c.54.66.94 1.03 1.52 2.08l.01.02c.33.56.5 1.2.5 1.84c0 2.03-1.69 4.02-4.47 4.02" />
		</svg>
	)
}

export function Golang(props: Props) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
			<title>GO</title>
			<path fill="none" stroke="#7dc4e4" strokeLinecap="round" strokeLinejoin="round" d="m15.48 8.06l-4.85.48m4.85-.48a4.98 4.98 0 0 1-4.54 5.42a5 5 0 1 1 2.95-8.66l-1.7 1.84a2.5 2.5 0 0 0-4.18 2.06c.05.57.3 1.1.69 1.51c.25.27 1 .83 1.78.82c.8-.02 1.58-.25 2.07-.81c0 0 .8-.96.68-1.88M2.5 8.5l-2 .01m1.5 2h1.5m-2-3.99l2-.02"/>
		</svg>
	)
}

export function Cpp(props: Props) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
			<title>C++</title>
			<path fill="none" stroke="#8aadf4" strokeLinecap="round" strokeLinejoin="round" d="M2.556 12.952a7.05 7.05 0 0 0 9.944 0l-1.79-1.783a4.513 4.513 0 0 1-6.364 0a4.47 4.47 0 0 1 0-6.338a4.513 4.513 0 0 1 6.364 0l.895-.891l.895-.892a7.05 7.05 0 0 0-9.944 0a6.98 6.98 0 0 0 0 9.904" clipRule="evenodd"></path>
			<path fill="none" stroke="#8aadf4" strokeLinecap="round" strokeLinejoin="round" d="M7.5 6v4M5.514 8h3.999m3.973-2v4M11.5 8h4"></path>
		</svg>
	)
}

export function C(props: Props) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
			<title>C</title>
			<path fill="none" stroke="#c6a0f6" strokeLinecap="round" strokeLinejoin="round" d="M4.056 12.952a7.05 7.05 0 0 0 9.944 0l-1.79-1.783a4.513 4.513 0 0 1-6.364 0a4.47 4.47 0 0 1 0-6.338a4.513 4.513 0 0 1 6.364 0l.895-.891l.895-.892a7.05 7.05 0 0 0-9.944 0a6.98 6.98 0 0 0 0 9.904" clipRule="evenodd"></path>
		</svg>
	)
}

export function Python(props: Props) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
			<title>Python</title>
			<g fill="none" strokeLinecap="round" strokeLinejoin="round">
				<path stroke="#8aadf4" d="M8.5 5.5h-3m6 0V3c0-.8-.7-1.5-1.5-1.5H7c-.8 0-1.5.7-1.5 1.5v2.5H3c-.8 0-1.5.7-1.5 1.5v2c0 .8.7 1.5 1.48 1.5"></path>
				<path stroke="#eed49f" d="M10.5 10.5h-3m-3 0V13c0 .8.7 1.5 1.5 1.5h3c.8 0 1.5-.7 1.5-1.5v-2.5H13c.8 0 1.5-.7 1.5-1.5V7c0-.8-.7-1.5-1.48-1.5H11.5c0 1.5 0 2-1 2h-2"></path>
				<path stroke="#8aadf4" d="M2.98 10.5H4.5c0-1.5 0-2 1-2h2m0-5"></path>
			</g>
		</svg>
	)
}