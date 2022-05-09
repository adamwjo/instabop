This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm install && npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Getting started with Prisma

The prisma file should be ready to go. first we type the following command in the terminal 
```bash
npx prisma init
```

To create models and there relationships, Navigate over to the schema.prisma file - and this is where you write up your models. 

After you're done creating a model, we need to push that model up to Heroku via the following command

```bash
npx prisma db push
```

This is known as a data base push. It's similar to git push and git commit. db push means your pushing it up, but you're not ready to commit it yet to the data base. 

once we push up, we'll get confirmation that Prisma is insyc with your databaset that you have deployed somehwere. So when we see "Generated Prisma Client" in the terminal, this is basically Prisma notifying the database regarding schema changes. 

Now that we have that, we will now run a migration using the following command. 

```bash
npx prisma migrate dev
```

here, we are using Dev is because we aren't ready to go to production yet. This will be a different data base.

once we migrate, a migration folder is created with the SQL file with all the SQL code done for us.

Once that is done, type the following in your terminal
```bash
npx prisma studio
```
This will run your server where you can then look at the modules and their key value pairs. 

## seeding data with Prisma

first we navigate into your seed.ts file. Then we write up how we want to seed our data. Currently, I am still trying to figure out how this works exactly, but I was able to write up a seed for a user. But once seed is created, we run the following command in the terminal

```bash
npx prisma db seed
```
