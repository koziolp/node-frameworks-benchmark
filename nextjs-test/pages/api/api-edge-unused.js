import { NextResponse } from 'next/server';
//import type { NextRequest } from 'next/server';
const {createRandomData} = require('../../../data/data');

export const runtime = 'edge'; // 'nodejs' is the default

export default function GET(request) {
    return NextResponse.json(
        {
            body: createRandomData('nextjs'),
            //query: request.nextUrl.search,
            //cookies: request.cookies.getAll(),
        },
        {
            status: 200,
        },
    );
}