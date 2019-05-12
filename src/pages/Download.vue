<page-query>
	query GitHub {
		allgithub {
			edges {
				node {
					id
					title
					assets {
						url
						browserDownloadUrl
					}
				}
			}
		}
	}
</page-query>

