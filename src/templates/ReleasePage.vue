<template>
	<Layout :headerSize="1">
		<div class="releases__content">
			<Container width="600">
				<PostLayout :editOnGH="false">
					<div v-html="$page.releases.content"></div>
				</PostLayout>
			</Container>
		</div>
	</Layout>
</template>

<page-query>
query releasePage ($path: String!) {
	releases: releasePage (path: $path) {
		date
		version
		build_type
		content
	}
}
</page-query>

<script>
import Container from "../layouts/Container";
import PostLayout from "../layouts/Post";

export default {
	components: {
		Container,
		PostLayout
	}
};
</script>

<style lang='sass'>
.releases__content
	margin-top: 4rem
</style>
