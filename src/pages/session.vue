<template>
	<layout>
		<div class="session">
			<container>
				<h2 class="session__heading">Pair programming session</h2>

				<div
					v-for="{ node } in $page.pp.edges"
					:key="node.key"
					class="session__list"
				>
					<div class="session__list-item">
						<div class="session__item-date">
							{{ node.date }}
						</div>

						<div class="session__item-dot"></div>

						<div class="session__item-name">
							{{ node.name }}
						</div>
					</div>
				</div>
			</container>
		</div>
	</layout>
</template>

<page-query>
query Blog {
	pp: allPairProgrammingSession(order: DESC) {
		edges {
			node {
				id
				name
				date
			}
		}
	}
}
</page-query>

<script>
import Container from "../layouts/Container";

export default {
	name: "Session",
	components: {
		Container
	}
}
</script>

<style lang="sass">
.session
	&__heading
		text-align: center
		margin-top: 3rem
		margin-bottom: 2rem

	&__list-item
		border-radius: 20px
		padding: .5rem 1rem
		display: flex
		align-items: center

		&:hover
			background-color: rgba(32, 33, 36, 0.039)

.session__item
	&-dot
		margin-left: 1rem
		margin-right: 1rem
		background-color: #00ADB5
		width: 12px
		height: 12px
		border-radius: 6px

	&-name
		font-weight: bold
</style>
