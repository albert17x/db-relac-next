import { NextResponse } from 'next/server'
import { prisma } from '@/libs/prisma'

// MUESTRA TODOS LOS REGISTROS
export async function GET() {
    const products = await prisma.product.findMany({
        include: {          
            category: true
        }
    })
    return NextResponse.json(products);
}

// CREA UN REGISTRO

export async function POST(request) {
    const data = await request.json();
    const newProduct = await prisma.product.create({
        data: {
            name: data.name,
            price: data.price,
            stock: data.stock,
            categoryId: data.categoryId
        },

    });
    return NextResponse.json(newProduct);
}

// !  AQUI VOY DESARROLLANDO

// data: {
//     name: data.name,
//     price: data.price,
//     stock: data.stock,
//     categoryId: data.categoryId
// },