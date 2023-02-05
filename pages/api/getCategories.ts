// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';

//Execute Query
const query = groq`*[_type == "category"] {
  _id,
   ...
}`;

type Data = {
  categories: Category[]; // or [Category]
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const categories: Category[] = await sanityClient.fetch(query);
  console.log(categories);
  res.status(200).json({ categories });
}
