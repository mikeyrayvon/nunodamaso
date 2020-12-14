# Discipline Starter for Next.js Website with Prismic CMS
[Next.js](https://nextjs.org/) example blog project with content managed in [Prismic](https://prismic.io).

Based on the [Prismic Next.js Blog Site Example](https://github.com/prismicio/nextjs-blog)

[Prismic project guide](https://user-guides.prismic.io/en/articles/2882569-sample-blog-with-api-based-cms-in-next-js)


## Installation Flow
### Clone this repo
```
git clone https://github.com/mikeyrayvon/discipline-nextjs-prismic.git my-project
cd my-project
```

### Create Prismic repo
Create a new repo in Prismic and create Custom Types with the JSON from the `custom_types` directory.

### Make .env
Duplicate `.env.example` as `.env.local` and update the `API_ENDPOINT` value with the endpoint from your Prismic repo.

### Install node packages
```
yarn
```

### Run the project
```
yarn dev
```
Then you can access it at [http://localhost:3000](http://localhost:3000).


## Resources
- [Prismic project guide](https://user-guides.prismic.io/en/articles/2882569-sample-blog-with-api-based-cms-in-next-js)
- [Prismic + Next.js documentation](https://prismic.io/docs/reactjs/getting-started/prismic-nextjs)
