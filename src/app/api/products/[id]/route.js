import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";


// MOSTRAR UN REGISTRO
export async function GET(request,{params}) {
  const oneProduct =  await prisma.product.findUnique({
        where: { 
            id: Number(params.id),
        },
              include: {          
          category: true
      }

    })
    return NextResponse.json(oneProduct)
}

// MODIFICAR UN REGISTRO
export async function PUT(request,{params}) {
    const data = await request.json()
    const productUpdated = await prisma.product.update({
        where:{
            id: Number(params.id),
        },
        data: data
    })
    return NextResponse.json(productUpdated)
}

// BORRAR UN REGISTRO
export async function DELETE(request,{params}){
    try {
      const productRemoved = await prisma.product.delete({
        where: { 
            id: Number(params.id),
        },
        })
        return NextResponse.json(productRemoved)

    } catch (error) {
        return NextResponse.json(error.message);    
    }}
    