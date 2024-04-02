import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";


// MOSTRAR UN REGISTRO
export async function GET(request,{params}) {
  const oneCategory =  await prisma.category.findUnique({
        where: { 
            id: Number(params.id),
        },
              include: {          
          product: true
      }

    })
    return NextResponse.json(oneCategory)
}

// MODIFICAR UN REGISTRO
export async function PUT(request,{params}) {
    const data = await request.json()
    const categoryUpdate = await prisma.category.update({
        where:{
            id: Number(params.id),
        },
        data: data
    })
    return NextResponse.json(categoryUpdate)
}

// BORRAR UN REGISTRO
export async function DELETE(request,{params}){
    try {
      const categoryRemoved = await prisma.category.delete({
        where: { 
            id: Number(params.id),
        },
        })
        return NextResponse.json(categoryRemoved)

    } catch (error) {
        return NextResponse.json(error.message);    
    }}
    