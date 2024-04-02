import { NextResponse } from 'next/server'
import {prisma} from '@/libs/prisma'

// MUESTRA TODOS LOS REGISTROS
export async function GET() {
    const categories = await prisma.category.findMany()
    return NextResponse.json(categories);
}


// CREA UN REGISTRO

export async function POST(request) {
    const data = await request.json();
    const newCategory = await prisma.category.create({
        data: {
            name: data.name,
            products: data.products
        }
    })
    return NextResponse.json(newCategory);
}