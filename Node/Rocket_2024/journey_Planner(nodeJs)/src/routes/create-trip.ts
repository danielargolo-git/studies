import type { FastifyInstance } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from 'zod'
import { prisma } from "../lib/prisma";

export async function createTrip(app: FastifyInstance) {
    app.withTypeProvider<ZodTypeProvider>().post('/trips', 
        {            
            schema: {
                body: z.object({
                    destination: z.string().min(4),
                    starts_at: z.coerce.string(),
                    ends_at: z.coerce.string(),
                    // created_at: z.coerce.string(),                    
                })
            },
        },  
        async (request) =>     
        {
            const { destination, starts_at, ends_at } = request.body

            const trips = await prisma.trip.create({
                data: {
                    destination,
                    starts_at,
                    ends_at
                }
            })


        return { tripId: trips.id }
    }

    )
} 