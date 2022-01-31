export default function Post() {
	return (
		<div>posts</div>
	);
}

// tell next how many pages there are
export async function getStaticPaths() {
	const res = await fetch('http://localhost:1337/api/posts');
	const data = await res.json();

	const paths = posts.map(post => ({
		params: { slug: post.Slug }
	}));

	return {
		paths,
		fallback: false,
	};
}

// for each individual page: get the data for that page
export async function getStaticProps({ params }) {
	const { slug } = params;

	const res = await  
}
