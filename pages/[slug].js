
export default function Post() {
	return (
		<div>{post.Title}</div>
	);
}

// tell next how many pages there are
export async function getStaticPaths() {
	const res = await fetch('http://localhost:1337/api/posts');
	const posts = await res.json();

	const paths = posts.data.map(post => ({
		params: { slug: post.attributes.Slug }
	}));

	return {
		paths,
		fallback: false,
	};
}

// for each individual page: get the data for that page
export async function getStaticProps({ params }) {
	const { slug } = params;

	const res = await fetch(`http://localhost:1337/api/posts?Slug=${slug}`);
	const data = await res.json();
	const post = data[0];


	return {
		props: { post }
	};
}
