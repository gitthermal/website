
function user_input() {
local USER_CONFIRMATION

# Accepting arguments
read -p "Date: " BLOG_DATE
read -p "Enter directory name: " DIRECTORY_NAME
read -p "Title: " BLOG_TITLE
read -p "Description: " BLOG_DESCRIPTION
read -p "Category: " BLOG_CATEGORY
read -p "Image: " BLOG_IMAGE
read -p "Author: " AUTHOR_NAME
read -p "Draft: " BLOG_DRAFT
read -p "Canonical: " BLOG_CANONICAL
read -p "Slug: " BLOG_SLUG

echo "(y) Process | (n) Enter data again | (q) Quit the session"
read -p "Would you like to proceed (y|n|q): " USER_CONFIRMATION

case $USER_CONFIRMATION in
	y)
		echo "Writing content to file system"
		write_content
		;;
	n)
		echo "Resetting all of your input data"
		user_input
		;;
	q)
		echo "Existing from the session"
		exist 1
		;;
esac
}

function write_content() {
cd blogs
mkdir "${BLOG_DATE}-${DIRECTORY_NAME}"
mkdir "${BLOG_DATE}-${DIRECTORY_NAME}/image"
cd "${BLOG_DATE}-${DIRECTORY_NAME}"

touch readme.md

cat << EOM > readme.md
---
title: $BLOG_TITLE
description: $BLOG_DESCRIPTION
category: $BLOG_CATEGORY
date: $BLOG_DATE
image: $BLOG_IMAGE
author:
	- $AUTHOR_NAME
draft: $BLOG_DRAFT
canonical: $BLOG_CANONICAL
slug: $BLOG_SLUG
---

EOM
}

user_input
