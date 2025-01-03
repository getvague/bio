import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const filePath = path.join(process.cwd(), '.well-known', 'discord');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    res.status(200).send(fileContents);
}